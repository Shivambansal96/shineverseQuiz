# ShineVerse Programming Quiz Hub

<div align="center">

  <img src="https://img.shields.io/badge/Status-Live-brightgreen" alt="Live status" />
  <img src="https://img.shields.io/badge/Language-HTML%2C%20CSS%2C%20JS-orange" alt="Languages" />
  <img src="https://img.shields.io/badge/Frontend-Responsive-9b59b6" alt="Responsive" />

</div>

A sleek, interactive quiz platform designed to test and improve your Java and Python programming skills. Built with a modern UI, instant feedback, progress tracking, and adaptive learning flow, this project turns revision into an engaging experience.

Live website: [ShineVerse Programming Quiz Hub](https://shineverse-quiz.vercel.app/)

---

## 🌐 Overview

ShineVerse Programming Quiz Hub is a browser-based assessment platform featuring:

- Java programming MCQ test
- Python programming MCQ test
- 30 questions per quiz
- instant score calculation
- detailed explanation & answer review
- hint support
- saved progress using local storage
- keyboard shortcuts for faster interaction
- responsive interface with animated design

This project is ideal for students, aspiring developers, interview prep candidates, and anyone wanting to practice core programming concepts in a smooth, motivating way.

---

## ✨ Features

### Java Quiz
- 30 Java-focused multiple-choice questions
- Topics include:
  - Java fundamentals
  - JVM and memory concepts
  - control flow
  - OOP and polymorphism
  - core Java basics
  - collections framework
  - advanced practical scenarios

### Python Quiz
- 30 Python-focused multiple-choice questions
- Covers:
  - Python basics and variables
  - operators and control flow
  - data structures
  - functions and file handling
  - OOP concepts
  - exception handling

### Learning Experience
- instant result evaluation
- percentage-based performance rating
- detailed answer review with correct answers highlighted
- filtered result view: all, correct, incorrect
- hints for tricky questions
- previous/next navigation
- ability to resume or revisit saved progress
- supportive success and performance states

### UX / UI
- animated background particles
- glassmorphism-inspired cards
- colorful quiz switcher and live navigation
- mobile-friendly responsive layout
- accessible keyboard navigation
- polished modern design for learning dashboards

---

## 🧠 Tech Stack

- HTML5
- CSS3
- JavaScript
- LocalStorage for progress persistence
- Font Awesome icons
- AOS animations
- Vercel deployment

---

## 📁 Project Structure

```bash
Java Quiz/
├── README.md
├── index.html
├── Java Quiz/
│   ├── data.js
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── ShineVerse.png
│   └── ShineVerseLogo.png
├── Python Quiz/
│   ├── data.js
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── ShineVerse.png
│   └── ShineVerseLogo.png
└── .git/
```

---

## 🚀 Live Demo

Open the project here:

[ShineVerse Programming Quiz Hub](https://shineverse-quiz.vercel.app/)

---

## ▶️ Run Locally

### Option 1: Open directly
You can open the HTML file in a browser directly:

- open `Java Quiz/index.html` for the Java test
- open `Python Quiz/index.html` for the Python test

### Option 2: Run with a local server
If you want a more reliable local setup, use a simple HTTP server:

```bash
cd "c:\Users\lucif\OneDrive\Desktop\Java Quiz"
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/Java Quiz/index.html
http://localhost:8000/Python Quiz/index.html
```

You can also use VS Code Live Server or any static file server of your choice.

---

## 🕹️ How to Use

1. Open the live site or local project.
2. Choose Java or Python quiz.
3. Start the quiz.
4. Answer each multiple-choice question.
5. Use hints when needed.
6. Navigate with previous/next controls or keyboard shortcuts.
7. Submit the quiz after answering all questions.
8. Review explanations and see your score breakdown.

### Keyboard Shortcuts
- 1–4: select answer option
- A–D: select answer option
- Left/Right Arrow: move between questions
- H: toggle hint

---

## 🧪 Quiz Behavior Highlights

- Every question is tracked with persisted state
- Completed attempts are saved to browser storage
- Result screen includes performance tiers such as:
  - Outstanding Mastery
  - Very Good Job
  - Good Effort
  - Needs Practice
- Review shows which questions were correct or incorrect
- Explanations help reinforce learning and improve recall

---

## 🛠️ Customization

You can easily extend the project by editing the quiz dataset inside:

- `Java Quiz/data.js`
- `Python Quiz/data.js`

Each dataset contains:
- question text
- multiple-choice options
- correct answer index
- category
- difficulty
- hint
- explanation

Example structure:

```javascript
{
  question: "What is the output of ... ?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 1,
  category: "Java Fundamentals",
  difficulty: "Easy",
  hint: "Think about ...",
  explanation: "Because ..."
}
```

---

## 📚 Learning Goals

This quiz is designed to help users:

- improve coding fundamentals
- strengthen concept recall
- prepare for technical interviews
- practice Java and Python syntax
- build confidence in object-oriented and procedural thinking

---

## 🤝 Contributing

Contributions are welcome.

If you want to improve the project, you can:

- add more question sets
- improve UI styling
- add difficulty filters
- introduce timer modes
- integrate leaderboard or scoring analytics
- add category-based practice modes

---

## 🙌 Credits

Project concept and design by ShineVerse.

Live platform: [ShineVerse](https://shineverse.vercel.app/)

---

## 📌 Summary

ShineVerse Programming Quiz Hub is a modern, polished, and engaging way to practice Java and Python. It combines clean UI design, educational value, and instant performance feedback to deliver a meaningful learning experience.

If you're preparing for coding interviews or want to sharpen your fundamentals, this project is a great companion.

---

Made with passion for developers, learners, and quiz enthusiasts.
