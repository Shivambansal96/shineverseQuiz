// data.js
// ============================================
// Python Quiz Questions Data
// ============================================

const quizData = [
    {
        question: "Which of the following is used to display output in Python?",
        options: ["input()", "print()", "show()", "display()"],
        correct: 1,
        category: "Basics"
    },
    {
        question: "Which of the following is a valid variable name?",
        options: ["2name", "class", "student_name", "my-name"],
        correct: 2,
        category: "Variables"
    },
    {
        question: "Python is a:",
        options: [
            "Compiled language only",
            "Interpreted language",
            "Assembly language",
            "Markup language"
        ],
        correct: 1,
        category: "Basics"
    },
    {
        question: "Which data type is used to store decimal numbers?",
        options: ["int", "str", "float", "bool"],
        correct: 2,
        category: "Data Types"
    },
    {
        question: "What is the output of print(10 // 3)?",
        options: ["3.33", "3", "1", "4"],
        correct: 1,
        category: "Operators"
    },
    {
        question: "Which operator is used for exponentiation?",
        options: ["^", "%", "**", "//"],
        correct: 2,
        category: "Operators"
    },
    {
        question: "What is the result of 5 == 5?",
        options: ["5", "True", "False", "Error"],
        correct: 1,
        category: "Operators"
    },
    {
        question: "Which statement is used for decision making?",
        options: ["loop", "if", "def", "class"],
        correct: 1,
        category: "Control Flow"
    },
    {
        question: "Which loop is used when the number of iterations is known?",
        options: ["for loop", "while loop", "if statement", "break"],
        correct: 0,
        category: "Loops"
    },
    {
        question: "What does break do?",
        options: [
            "Skips one iteration",
            "Ends the loop immediately",
            "Does nothing",
            "Repeats the loop"
        ],
        correct: 1,
        category: "Loops"
    },
    {
        question: "Strings in Python are:",
        options: ["Mutable", "Immutable", "Numeric", "Boolean"],
        correct: 1,
        category: "Strings"
    },
    {
        question: "What is the output of 'Python'[0]?",
        options: ["P", "y", "n", "Error"],
        correct: 0,
        category: "Strings"
    },
    {
        question: "Which of the following is a list?",
        options: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "\"1, 2, 3\""],
        correct: 2,
        category: "Lists"
    },
    {
        question: "Which method adds one element to a list?",
        options: ["add()", "append()", "insert()", "extend()"],
        correct: 1,
        category: "Lists"
    },
    {
        question: "Tuples are:",
        options: ["Mutable", "Immutable", "Unordered", "Empty"],
        correct: 1,
        category: "Tuples"
    },
    {
        question: "Which collection does not allow duplicate values?",
        options: ["List", "Tuple", "Set", "String"],
        correct: 2,
        category: "Sets"
    },
    {
        question: "Dictionaries store data in:",
        options: [
            "Index-value pairs",
            "Key-value pairs",
            "Rows and columns",
            "Characters"
        ],
        correct: 1,
        category: "Dictionaries"
    },
    {
        question: "Which keyword is used to define a function?",
        options: ["function", "def", "fun", "define"],
        correct: 1,
        category: "Functions"
    },
    {
        question: "What does a function return if there is no return statement?",
        options: ["0", "False", "None", "Error"],
        correct: 2,
        category: "Functions"
    },
    {
        question: "Variables created inside a function are:",
        options: [
            "Global variables",
            "Local variables",
            "Static variables",
            "Constants"
        ],
        correct: 1,
        category: "Functions"
    },
    {
        question: "Which mode opens a file for reading?",
        options: ['"w"', '"a"', '"r"', '"x"'],
        correct: 2,
        category: "File Handling"
    },
    {
        question: "Which block is used to handle exceptions?",
        options: ["if-else", "try-except", "for-while", "class"],
        correct: 1,
        category: "Exception Handling"
    },
    {
        question: "OOP stands for:",
        options: [
            "Only Object Programming",
            "Object-Oriented Programming",
            "Open Object Programming",
            "Object Output Programming"
        ],
        correct: 1,
        category: "OOP"
    },
    {
        question: "A class is:",
        options: [
            "An instance of an object",
            "A blueprint for creating objects",
            "A function",
            "A variable"
        ],
        correct: 1,
        category: "OOP"
    },
    {
        question: "__init__() is:",
        options: ["Destructor", "Constructor", "Loop", "Operator"],
        correct: 1,
        category: "OOP"
    },
    {
        question: "self refers to:",
        options: [
            "The class itself",
            "The current object instance",
            "A global variable",
            "A built-in function"
        ],
        correct: 1,
        category: "OOP"
    },
    {
        question: "Creating a new class from an existing class is called:",
        options: [
            "Encapsulation",
            "Polymorphism",
            "Inheritance",
            "Abstraction"
        ],
        correct: 2,
        category: "OOP"
    },
    {
        question: "Which concept allows the same method name to behave differently?",
        options: [
            "Inheritance",
            "Polymorphism",
            "Encapsulation",
            "Constructor"
        ],
        correct: 1,
        category: "OOP"
    },
    {
        question: "What is the output?\n\nx = [1, 2]\nx.append(3)\nprint(len(x))",
        options: ["2", "3", "4", "Error"],
        correct: 1,
        category: "Lists"
    },
    {
        question: "Which of the following best describes encapsulation?",
        options: [
            "Reusing code from another class",
            "Hiding data and controlling access",
            "Creating many objects",
            "Writing multiple functions"
        ],
        correct: 1,
        category: "OOP"
    }
];