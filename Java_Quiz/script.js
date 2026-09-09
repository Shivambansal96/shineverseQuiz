// ========================================
// ShineVerse Java Quiz Application
// ========================================

const TOTAL_QUESTIONS = quizData.length;
const STORAGE_KEY = "javaQuizState";

// Quiz State
let currentQuestion = 0;
let score = 0;
let answers = new Array(TOTAL_QUESTIONS).fill(null);
let answeredQuestions = new Set();
let isSubmitting = false;
let isHintVisible = false;
let currentReviewFilter = "all";

// DOM Elements
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const blockedScreen = document.getElementById("blockedScreen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");
const hintBtn = document.getElementById("hintBtn");
const hintContainer = document.getElementById("hintContainer");
const reviewContainer = document.getElementById("reviewContainer");

// ========================================
// PARTICLES BACKGROUND
// ========================================
function createParticles() {
    const container = document.getElementById("particlesContainer");
    if (!container) return;

    container.innerHTML = "";
    for (let i = 0; i < 28; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 20 + "s";
        particle.style.animationDuration = 15 + Math.random() * 20 + "s";
        particle.style.width = particle.style.height = (Math.random() * 3 + 1.5) + "px";
        container.appendChild(particle);
    }
}

// ========================================
// LOCAL STORAGE PERSISTENCE
// ========================================
function saveProgress() {
    const state = {
        completed: false,
        currentQuestion,
        answers,
        submittedAt: null
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveQuizState(finalScore, percentage) {
    const state = {
        completed: true,
        score: finalScore,
        total: TOTAL_QUESTIONS,
        percentage,
        answers,
        currentQuestion,
        submittedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadSavedProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return false;

        const state = JSON.parse(saved);

        if (state.completed) {
            document.getElementById("savedScore").textContent = state.percentage + "%";
            startScreen.classList.add("hidden");
            quizScreen.classList.add("hidden");
            
            // Show result screen with review options immediately
            score = state.score;
            answers = state.answers || [];
            showResults(state.score, state.percentage);
            return true;
        }

        if (Array.isArray(state.answers)) {
            answers = state.answers;
            answeredQuestions = new Set(
                answers
                    .map((a, i) => (a !== null ? i : null))
                    .filter(i => i !== null)
            );
        }

        currentQuestion = state.currentQuestion || 0;
        return false;
    } catch (err) {
        console.warn("Corrupted localStorage for Java Quiz. Resetting...", err);
        localStorage.removeItem(STORAGE_KEY);
        return false;
    }
}

// ========================================
// START QUIZ
// ========================================
function startQuiz() {
    startScreen.classList.add("hidden");
    blockedScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    isHintVisible = false;
    loadQuestion();
}

// ========================================
// QUESTION RENDERING WITH CODE FORMATTING
// ========================================
function formatQuestionText(rawText) {
    // Check if question contains code snippets (e.g. multi-line code)
    const lines = rawText.split("\n\n");
    if (lines.length > 1) {
        const questionText = lines[0];
        const codeText = lines.slice(1).join("\n\n");
        return `
            <div class="question-title">${escapeHtml(questionText)}</div>
            <div class="code-container">
                <div class="code-header">
                    <span><i class="fab fa-java"></i> Java Snippet</span>
                </div>
                <pre><code>${escapeHtml(codeText)}</code></pre>
            </div>
        `;
    }
    return `<div class="question-title">${escapeHtml(rawText)}</div>`;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text || "";
    return div.innerHTML;
}

function loadQuestion() {
    const questionObj = quizData[currentQuestion];
    isHintVisible = false;
    if (hintContainer) {
        hintContainer.classList.add("hidden");
        hintContainer.innerHTML = "";
    }

    // Question Category & Difficulty Badges
    const badgeCategory = document.getElementById("badgeCategory");
    const badgeDifficulty = document.getElementById("badgeDifficulty");
    
    if (badgeCategory) {
        badgeCategory.textContent = questionObj.category || "Java";
    }
    
    if (badgeDifficulty) {
        const diff = questionObj.difficulty || "Medium";
        badgeDifficulty.textContent = diff;
        badgeDifficulty.className = `badge badge-${diff.toLowerCase()}`;
    }

    // Counters
    document.getElementById("questionCounter").textContent =
        `Question ${currentQuestion + 1} of ${TOTAL_QUESTIONS}`;
    document.getElementById("answeredCounter").textContent =
        `${answeredQuestions.size} of ${TOTAL_QUESTIONS} answered`;

    // Question Body
    const questionContainer = document.getElementById("questionContent");
    questionContainer.innerHTML = formatQuestionText(questionObj.question);

    // Options
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    questionObj.options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";
        optionDiv.tabIndex = 0;
        optionDiv.setAttribute("role", "button");
        optionDiv.setAttribute("aria-pressed", answers[currentQuestion] === index ? "true" : "false");

        if (answers[currentQuestion] === index) {
            optionDiv.classList.add("selected");
        }

        optionDiv.innerHTML = `
            <div class="option-text">
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <span>${escapeHtml(option)}</span>
            </div>
        `;

        optionDiv.addEventListener("click", () => selectOption(index));
        optionDiv.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                selectOption(index);
            }
        });

        optionsContainer.appendChild(optionDiv);
    });

    updateProgress();
    updateButtons();
}

// ========================================
// OPTION SELECTION
// ========================================
function selectOption(index) {
    answers[currentQuestion] = index;
    answeredQuestions.add(currentQuestion);
    saveProgress();
    loadQuestion();
}

// ========================================
// HINT TOGGLE
// ========================================
function toggleHint() {
    if (!hintContainer) return;
    isHintVisible = !isHintVisible;

    if (isHintVisible) {
        const currentHint = quizData[currentQuestion].hint || "Think carefully about Java specifications and memory rules.";
        hintContainer.innerHTML = `
            <div class="hint-box">
                <i class="fas fa-lightbulb" style="color: #f59e0b; font-size: 1.1rem; margin-top: 2px;"></i>
                <div>
                    <strong>Hint:</strong> ${escapeHtml(currentHint)}
                </div>
            </div>
        `;
        hintContainer.classList.remove("hidden");
    } else {
        hintContainer.classList.add("hidden");
        hintContainer.innerHTML = "";
    }
}

// ========================================
// NAVIGATION
// ========================================
function nextQuestion() {
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
        currentQuestion++;
        saveProgress();
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        saveProgress();
        loadQuestion();
    }
}

function jumpToQuestion(index) {
    if (index >= 0 && index < TOTAL_QUESTIONS) {
        currentQuestion = index;
        saveProgress();
        loadQuestion();
    }
}

// ========================================
// PROGRESS BAR
// ========================================
function updateProgress() {
    const progress = (answeredQuestions.size / TOTAL_QUESTIONS) * 100;
    const progressFill = document.getElementById("progressFill");
    if (progressFill) {
        progressFill.style.width = progress + "%";
    }
}

// ========================================
// BUTTON STATES
// ========================================
function updateButtons() {
    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === TOTAL_QUESTIONS - 1) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
    }

    submitBtn.disabled = answeredQuestions.size < TOTAL_QUESTIONS;
}

// ========================================
// SUBMIT QUIZ
// ========================================
function submitQuiz() {
    if (isSubmitting) return;

    if (answeredQuestions.size < TOTAL_QUESTIONS) {
        alert(`Please complete all 30 questions before submitting. (${TOTAL_QUESTIONS - answeredQuestions.size} remaining)`);
        return;
    }

    if (!confirm("Are you sure you want to submit your Java Quiz?")) return;

    isSubmitting = true;

    score = answers.reduce((total, answer, i) => {
        return total + (answer === quizData[i].correct ? 1 : 0);
    }, 0);

    const percentage = Math.round((score / TOTAL_QUESTIONS) * 100);

    saveQuizState(score, percentage);
    playSuccessAudio(percentage);
    showResults(score, percentage);
}

// ========================================
// PERFORMANCE EVALUATION
// ========================================
function getPerformanceTier(percentage) {
    if (percentage >= 90) {
        return {
            title: "Outstanding Mastery!",
            emoji: "🏆",
            message: "Exceptional mastery of Java concepts, OOP design, and the Collections Framework!",
            badgeClass: "perf-excellent",
            badgeText: "Performance: Excellent (90-100%)"
        };
    } else if (percentage >= 75) {
        return {
            title: "Very Good Job!",
            emoji: "🎉",
            message: "Great grasp of Java fundamentals and core libraries with strong problem solving!",
            badgeClass: "perf-verygood",
            badgeText: "Performance: Very Good (75-89%)"
        };
    } else if (percentage >= 60) {
        return {
            title: "Good Effort!",
            emoji: "👍",
            message: "Solid foundation in Java. Review advanced collections and edge cases to level up!",
            badgeClass: "perf-good",
            badgeText: "Performance: Good (60-74%)"
        };
    } else {
        return {
            title: "Needs Practice",
            emoji: "📚",
            message: "Keep practicing Java fundamentals, OOP polymorphism, and data structure mechanics!",
            badgeClass: "perf-needspractice",
            badgeText: "Performance: Needs Practice (<60%)"
        };
    }
}

// ========================================
// RESULTS & SVG GAUGE
// ========================================
function showResults(finalScore, percentage) {
    quizScreen.classList.add("hidden");
    startScreen.classList.add("hidden");
    blockedScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const perf = getPerformanceTier(percentage);

    document.getElementById("resultEmoji").textContent = perf.emoji;
    document.getElementById("resultTitle").textContent = perf.title;
    document.getElementById("feedbackMessage").textContent = perf.message;

    const perfBadge = document.getElementById("performanceBadge");
    if (perfBadge) {
        perfBadge.textContent = perf.badgeText;
        perfBadge.className = `feedback-badge ${perf.badgeClass}`;
    }

    document.getElementById("finalPercentage").textContent = percentage + "%";
    document.getElementById("resultScore").textContent = `You scored ${finalScore} / ${TOTAL_QUESTIONS}`;
    document.getElementById("correctCount").textContent = finalScore;
    document.getElementById("incorrectCount").textContent = TOTAL_QUESTIONS - finalScore;
    document.getElementById("accuracyRate").textContent = percentage + "%";

    // Animate SVG circle
    setTimeout(() => {
        const circle = document.getElementById("progressCircle");
        if (circle) {
            const circumference = 2 * Math.PI * 45; // ~282.74
            const offset = circumference - (percentage / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }
    }, 100);

    renderAnswerReview("all");
}

// ========================================
// DETAILED ANSWER REVIEW
// ========================================
function renderAnswerReview(filter = "all") {
    currentReviewFilter = filter;
    const reviewList = document.getElementById("reviewList");
    if (!reviewList) return;

    reviewList.innerHTML = "";

    // Update filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.filter === filter);
    });

    quizData.forEach((q, idx) => {
        const userAnswer = answers[idx];
        const isCorrect = userAnswer === q.correct;

        if (filter === "correct" && !isCorrect) return;
        if (filter === "incorrect" && isCorrect) return;

        const card = document.createElement("div");
        card.className = `review-card ${isCorrect ? "correct-card" : "wrong-card"}`;

        let optionsHtml = "";
        q.options.forEach((opt, optIdx) => {
            let optClass = "";
            let icon = `<i class="far fa-circle" style="color: var(--text-muted)"></i>`;

            if (optIdx === q.correct) {
                optClass = "is-correct-target";
                icon = `<i class="fas fa-check-circle" style="color: var(--success)"></i>`;
            } else if (optIdx === userAnswer && !isCorrect) {
                optClass = "is-user-wrong";
                icon = `<i class="fas fa-times-circle" style="color: var(--danger)"></i>`;
            }

            optionsHtml += `
                <div class="review-option ${optClass}">
                    ${icon}
                    <span><strong>${String.fromCharCode(65 + optIdx)}:</strong> ${escapeHtml(opt)}</span>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="review-card-header">
                <div class="review-q-num">
                    Question ${idx + 1} of ${TOTAL_QUESTIONS} • <span style="color: var(--primary)">${q.category}</span>
                </div>
                <div>
                    ${isCorrect 
                        ? `<span class="badge badge-easy"><i class="fas fa-check"></i> Correct</span>` 
                        : `<span class="badge badge-hard"><i class="fas fa-times"></i> Incorrect</span>`}
                </div>
            </div>
            <div class="review-q-text">
                ${formatQuestionText(q.question)}
            </div>
            <div class="review-answers-grid">
                ${optionsHtml}
            </div>
            <div class="review-explanation">
                <strong><i class="fas fa-info-circle"></i> Explanation:</strong> ${escapeHtml(q.explanation || "No explanation provided.")}
            </div>
        `;

        reviewList.appendChild(card);
    });
}

// ========================================
// AUDIO SYNTHESIS
// ========================================
function playSuccessAudio(percentage) {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;

        const ctx = new AudioContextClass();
        if (ctx.state === "suspended") ctx.resume();

        const notes = percentage >= 75 ? [523.25, 659.25, 783.99, 1046.50] : [440, 554.37, 659.25];
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.frequency.value = freq;
            osc.type = "sine";
            gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.12 + 0.35);

            osc.start(ctx.currentTime + i * 0.12);
            osc.stop(ctx.currentTime + i * 0.12 + 0.35);
        });
    } catch (e) {
        console.warn("Audio Context playback note:", e);
    }
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
function setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
        // Only active during quiz screen
        if (quizScreen.classList.contains("hidden")) return;

        // Number keys 1-4 or A-D for options
        const key = e.key.toUpperCase();
        if (["1", "2", "3", "4"].includes(key)) {
            const optIndex = parseInt(key, 10) - 1;
            selectOption(optIndex);
        } else if (["A", "B", "C", "D"].includes(key)) {
            const optIndex = key.charCodeAt(0) - 65;
            selectOption(optIndex);
        } else if (e.key === "ArrowRight") {
            nextQuestion();
        } else if (e.key === "ArrowLeft") {
            prevQuestion();
        } else if (e.key === "h" || e.key === "H") {
            toggleHint();
        }
    });
}

// ========================================
// INITIALIZATION
// ========================================
function initializeQuiz() {
    createParticles();

    const statCount = document.getElementById("questionCountStat");
    if (statCount) statCount.textContent = TOTAL_QUESTIONS;

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 750,
            once: true
        });
    }

    // Button event listeners
    if (startBtn) startBtn.addEventListener("click", startQuiz);
    if (nextBtn) nextBtn.addEventListener("click", nextQuestion);
    if (prevBtn) prevBtn.addEventListener("click", prevQuestion);
    if (submitBtn) submitBtn.addEventListener("click", submitQuiz);
    if (hintBtn) hintBtn.addEventListener("click", toggleHint);
        
    // Filter buttons for Answer Review
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            renderAnswerReview(btn.dataset.filter);
        });
    });

    setupKeyboardNavigation();

    // Check saved state
    loadSavedProgress();
}

document.addEventListener("DOMContentLoaded", initializeQuiz);
