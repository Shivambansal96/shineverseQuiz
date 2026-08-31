// data.js
// ============================================
// Java Quiz Questions Data (30 Questions)
// Curriculum:
//   Q1-Q5:   Java Fundamentals (Easy)
//   Q6-Q10:  Control Flow (Easy)
//   Q11-Q15: Object-Oriented Programming (Medium)
//   Q16-Q20: Core Java (Medium)
//   Q21-Q25: Collections Framework (Medium)
//   Q26-Q30: Advanced Collections & Scenarios (Hard)
// ============================================

const quizData = [
    // ========================================
    // 1–5: Java Fundamentals
    // ========================================
    {
        question: "Which Java component is responsible for converting compiled Java bytecode (.class files) into platform-specific machine code during execution?",
        options: [
            "Java Development Kit (JDK)",
            "Java Virtual Machine (JVM)",
            "Java Runtime Environment (JRE)",
            "Java Compiler (javac)"
        ],
        correct: 1,
        category: "Java Fundamentals",
        difficulty: "Easy",
        explanation: "The JVM (Java Virtual Machine) is the abstract execution engine that executes bytecode instructions by translating them into native host instructions via its interpreter and JIT (Just-In-Time) compiler. javac produces bytecode, JRE provides class libraries + JVM, and JDK contains development tools.",
        hint: "Think about the virtual runtime engine that fulfills Java's 'Write Once, Run Anywhere' promise."
    },
    {
        question: "What happens if you define the main method header in a Java class as:\n\npublic void static main(String[] args)",
        options: [
            "The program compiles and executes without errors",
            "A NoSuchMethodError is thrown at runtime",
            "A compilation error occurs because the return type must immediately precede the method name",
            "It is treated as a constructor overloading attempt"
        ],
        correct: 2,
        category: "Java Fundamentals",
        difficulty: "Easy",
        explanation: "In Java syntax, method modifiers (like public, static, final) can appear in any order, but the return type ('void' in this case) MUST immediately precede the method identifier ('main'). Placing 'void' before 'static' is a compile-time syntax error.",
        hint: "In Java method declarations, where does the return type always belong relative to the method name?"
    },
    {
        question: "What is the memory size and default value of a primitive 'char' in Java when declared as an uninitialized instance field?",
        options: [
            "1 byte and '\\0'",
            "2 bytes and '\\u0000' (null character)",
            "4 bytes and 0",
            "2 bytes and ' ' (space character)"
        ],
        correct: 1,
        category: "Java Fundamentals",
        difficulty: "Easy",
        explanation: "In Java, 'char' is a 16-bit (2-byte) unsigned Unicode character with values ranging from '\\u0000' (0) to '\\uffff' (65,535). For uninitialized instance/class variables, its default value is '\\u0000'.",
        hint: "Java adopts 16-bit Unicode characters to natively support global character sets."
    },
    {
        question: "What will be the output of the following Java code snippet?\n\nint a = 260;\nbyte b = (byte) a;\nSystem.out.println(b);",
        options: [
            "260",
            "4",
            "0",
            "-4"
        ],
        correct: 1,
        category: "Java Fundamentals",
        difficulty: "Easy",
        explanation: "A 'byte' in Java is an 8-bit signed integer with a range from -128 to 127. When casting int 260 (binary ...0000 0001 0000 0100) to byte, the higher bits are truncated, leaving only the lowest 8 bits (0000 0100), which evaluates to decimal 4 (260 % 256 = 4).",
        hint: "Narrowing cast to an 8-bit byte keeps only the lowest 8 bits (modulo 256 arithmetic)."
    },
    {
        question: "What is the output of the following Java expression?\n\nint x = 7;\nint y = -3;\nSystem.out.println((x / y) + \" \" + (x % y));",
        options: [
            "-2 1",
            "-2 -1",
            "-3 1",
            "-2.33 1"
        ],
        correct: 0,
        category: "Java Fundamentals",
        difficulty: "Easy",
        explanation: "Integer division truncates toward zero: 7 / -3 = -2. The modulus operator in Java preserves the sign of the left operand (dividend): 7 % -3 = +1 because 7 = (-3 * -2) + 1. Therefore, the result is '-2 1'.",
        hint: "In Java, the sign of the remainder (% operator) always takes the sign of the left operand."
    },

    // ========================================
    // 6–10: Control Flow
    // ========================================
    {
        question: "What will be the output of the following code snippet demonstrating short-circuit logical evaluation?\n\nint count = 0;\nif (false && ++count > 0) {\n    count += 2;\n}\nif (true || ++count > 0) {\n    count += 5;\n}\nSystem.out.println(count);",
        options: [
            "0",
            "5",
            "6",
            "7"
        ],
        correct: 1,
        category: "Control Flow",
        difficulty: "Easy",
        explanation: "In 'false && ++count > 0', the left side is false, so Java short-circuits and skips ++count. In 'true || ++count > 0', the left side is true, so Java short-circuits again and skips ++count. The second if-body executes count += 5, leaving count = 5.",
        hint: "Logical short-circuit operators (&& and ||) skip evaluating the right side if the final truth value is already guaranteed."
    },
    {
        question: "What will be printed when this Java code executes?\n\nint number = 2;\nswitch (number) {\n    case 1:\n        System.out.print(\"A\");\n    case 2:\n        System.out.print(\"B\");\n    case 3:\n        System.out.print(\"C\");\n    default:\n        System.out.print(\"D\");\n}",
        options: [
            "B",
            "BCD",
            "BC",
            "ABCD"
        ],
        correct: 1,
        category: "Control Flow",
        difficulty: "Easy",
        explanation: "Because there are no 'break' statements, execution enters at case 2 (prints 'B') and falls through to case 3 (prints 'C') and default (prints 'D'). The combined output is 'BCD'.",
        hint: "Traditional switch statements in Java fall through to all subsequent cases unless interrupted by a break statement."
    },
    {
        question: "Which Java loop structure is guaranteed to execute its loop body at least once, even if the condition is initially false?",
        options: [
            "Standard for loop",
            "while loop",
            "do-while loop",
            "Enhanced for-each loop"
        ],
        correct: 2,
        category: "Control Flow",
        difficulty: "Easy",
        explanation: "A 'do-while' loop is an exit-controlled loop: the body executes first, and the boolean condition is checked at the end of each iteration. Thus, the body runs at least once under all circumstances.",
        hint: "Look for the post-tested loop construct."
    },
    {
        question: "What will be the output of the following labeled loop in Java?\n\nouter:\nfor (int i = 1; i <= 2; i++) {\n    for (int j = 1; j <= 3; j++) {\n        if (j == 2) break outer;\n        System.out.print(i + \"\" + j + \" \");\n    }\n}",
        options: [
            "11 ",
            "11 13 21 23 ",
            "11 21 ",
            "11 12 "
        ],
        correct: 0,
        category: "Control Flow",
        difficulty: "Easy",
        explanation: "On the first outer iteration (i=1), the inner loop runs with j=1 and prints '11 '. When j becomes 2, 'break outer;' triggers, which terminates the labeled outer loop entirely. No further iterations execute.",
        hint: "A labeled break statement jumps completely out of the specified enclosing loop."
    },
    {
        question: "What is the output of the following nested ternary expression?\n\nint score = 75;\nString grade = score >= 90 ? \"A\" : score >= 70 ? \"B\" : score >= 50 ? \"C\" : \"F\";\nSystem.out.println(grade);",
        options: [
            "A",
            "B",
            "C",
            "F"
        ],
        correct: 1,
        category: "Control Flow",
        difficulty: "Easy",
        explanation: "First, 'score >= 90' evaluates to false. Next, 'score >= 70' is evaluated, which is true (75 >= 70). The ternary operator yields 'B' without evaluating the remaining expressions.",
        hint: "Ternary operators evaluate conditionally from left to right in right-associative groupings."
    },

    // ========================================
    // 11–15: Object-Oriented Programming
    // ========================================
    {
        question: "What rule must be strictly followed when using explicit constructor chaining with this() or super() in Java?",
        options: [
            "Both this() and super() can be invoked together in the same constructor",
            "The invocation must be the very first statement in the constructor body",
            "It must always be placed inside a finally block",
            "It can be placed anywhere as long as member variables are initialized"
        ],
        correct: 1,
        category: "OOP",
        difficulty: "Medium",
        explanation: "Java mandates that explicit constructor calls using this() or super() must be the very first line of a constructor body. Moreover, a constructor cannot contain both this() and super() simultaneously.",
        hint: "Object construction requires parent/delegated initialization before any custom body instructions run."
    },
    {
        question: "To make a Java class completely immutable, which of the following practices is NOT required?",
        options: [
            "Declare the class as final to prevent subclassing",
            "Make all fields private and final",
            "Implement the java.lang.Cloneable interface",
            "Perform defensive copies of any mutable fields in constructors and getters"
        ],
        correct: 2,
        category: "OOP",
        difficulty: "Medium",
        explanation: "Implementing Cloneable is not required for immutability and may actually introduce security/integrity vulnerabilities if clone() exposes internal mutable state. Immutability requires final class, private final fields, no setters, and deep defensive copying.",
        hint: "Immutability is about protecting internal state from modification, not enabling object cloning."
    },
    {
        question: "Which of the following is valid when overriding a method in a Java subclass?",
        options: [
            "Reducing the method's visibility from public to protected",
            "Returning a subtype of the return type declared in the parent method (Covariant return type)",
            "Declaring additional broader checked exceptions in the throws clause",
            "Overriding a method marked with the final keyword"
        ],
        correct: 1,
        category: "OOP",
        difficulty: "Medium",
        explanation: "Java allows covariant return types: an overriding method can specify a return type that is a subclass of the parent method's return type. Overriding methods cannot reduce access visibility, cannot declare new or broader checked exceptions, and cannot override final methods.",
        hint: "Think of the feature that lets an overriding method return a more specialized subclass."
    },
    {
        question: "What will be the output of the following Java program demonstrating runtime polymorphism?\n\nclass Parent {\n    String name = \"Parent\";\n    void show() { System.out.print(\"P-\" + name + \" \"); }\n}\nclass Child extends Parent {\n    String name = \"Child\";\n    void show() { System.out.print(\"C-\" + name + \" \"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent obj = new Child();\n        System.out.print(obj.name + \" \");\n        obj.show();\n    }\n}",
        options: [
            "Parent C-Child ",
            "Child C-Child ",
            "Parent P-Parent ",
            "Child P-Parent "
        ],
        correct: 0,
        category: "OOP",
        difficulty: "Medium",
        explanation: "In Java, instance variables are NOT overridden (no runtime polymorphism for fields); field access is bound at compile-time by the reference type ('Parent'). Instance methods, however, use dynamic method dispatch at runtime, calling Child's overridden show(). Output: 'Parent C-Child '.",
        hint: "Variables are resolved by reference type at compile time; methods are dispatched dynamically at runtime."
    },
    {
        question: "Since Java 8 and 9, what capability do interfaces possess that abstract classes also have, while maintaining interface advantages?",
        options: [
            "Interfaces can declare non-static, mutable instance fields",
            "Interfaces can have constructors",
            "Interfaces can provide concrete implementations via default and private helper methods while allowing multiple inheritance of types",
            "Interfaces can have protected abstract methods"
        ],
        correct: 2,
        category: "OOP",
        difficulty: "Medium",
        explanation: "Java 8 introduced default and static methods in interfaces, and Java 9 added private interface methods. Unlike abstract classes (single inheritance), a class can implement multiple interfaces, allowing flexible code reuse without class hierarchy constraints.",
        hint: "Java interfaces can now include default and private methods for reusable behavior without multiple-inheritance class conflicts."
    },

    // ========================================
    // 16–20: Core Java
    // ========================================
    {
        question: "What will be printed when the following String comparison code executes?\n\nString s1 = \"Java\";\nString s2 = \"Java\";\nString s3 = new String(\"Java\");\nString s4 = s3.intern();\n\nSystem.out.println((s1 == s2) + \" \" + (s1 == s3) + \" \" + (s1 == s4));",
        options: [
            "true false true",
            "true true true",
            "true false false",
            "false false true"
        ],
        correct: 0,
        category: "Core Java",
        difficulty: "Medium",
        explanation: "s1 and s2 reference the same literal in the String Constant Pool (s1 == s2 is true). s3 is explicitly allocated on the heap (s1 == s3 is false). Calling s3.intern() retrieves the canonical pool reference matching s1 (s1 == s4 is true). Output is 'true false true'.",
        hint: "String literals share pool references, new String() allocates a distinct heap object, and intern() returns the pool object."
    },
    {
        question: "What is the fundamental architectural difference between StringBuilder and StringBuffer in Java?",
        options: [
            "StringBuilder is thread-safe (synchronized), whereas StringBuffer is not",
            "StringBuffer is thread-safe (synchronized), whereas StringBuilder is unsynchronized and faster for single-threaded tasks",
            "StringBuilder is immutable, while StringBuffer is mutable",
            "StringBuffer cannot be modified after instantiation"
        ],
        correct: 1,
        category: "Core Java",
        difficulty: "Medium",
        explanation: "StringBuffer has synchronized methods, making it thread-safe with locking overhead. StringBuilder (introduced in Java 5) is unsynchronized, making it faster and preferred for single-threaded string building.",
        hint: "The 'Builder' is newer, non-synchronized, and faster when multi-thread synchronization is unnecessary."
    },
    {
        question: "What will happen when executing the following array code?\n\nint[] arr = new int[3];\narr[0] = 10;\narr[1] = 20;\nSystem.out.print(arr[2] + \" \");\nSystem.out.print(arr.length);",
        options: [
            "0 3",
            "null 3",
            "20 2",
            "Throws ArrayIndexOutOfBoundsException"
        ],
        correct: 0,
        category: "Core Java",
        difficulty: "Medium",
        explanation: "When an int array is allocated in Java, all elements are automatically zero-initialized. Thus arr[2] is 0. The .length property reflects the fixed allocated capacity of 3. Output is '0 3'.",
        hint: "Primitive integer arrays initialize all slots to 0, and array length is fixed at allocation."
    },
    {
        question: "What is the exact output when Test.main() executes?\n\nclass Sample {\n    static { System.out.print(\"S1 \"); }\n    Sample() { System.out.print(\"C \"); }\n    static { System.out.print(\"S2 \"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Sample s1 = new Sample();\n        Sample s2 = new Sample();\n    }\n}",
        options: [
            "S1 S2 C C ",
            "S1 C S2 C ",
            "C C S1 S2 ",
            "S1 S2 C S1 S2 C "
        ],
        correct: 0,
        category: "Core Java",
        difficulty: "Medium",
        explanation: "Static initializer blocks run in source order when the class is first loaded by the JVM and execute only ONCE. Instance constructors run each time a new object is created. Output: 'S1 S2 C C '.",
        hint: "Static initializers run once when the class is loaded; constructors execute per instantiation."
    },
    {
        question: "What integer value is returned by the method compute()?\n\npublic static int compute() {\n    try {\n        int x = 10 / 0;\n        return 1;\n    } catch (ArithmeticException e) {\n        return 2;\n    } finally {\n        return 3;\n    }\n}",
        options: [
            "1",
            "2",
            "3",
            "An ArithmeticException is uncaught and thrown"
        ],
        correct: 2,
        category: "Core Java",
        difficulty: "Medium",
        explanation: "The try block throws ArithmeticException (division by zero). The catch block catches it and prepares to return 2. However, the finally block always executes before return completion, and its explicit 'return 3;' overrides the catch block's return.",
        hint: "A return statement in a finally block takes precedence over any return in try or catch blocks."
    },

    // ========================================
    // 21–25: Collections Framework
    // ========================================
    {
        question: "Which of the following core interfaces in the Java Collections Framework does NOT inherit from the java.util.Collection interface?",
        options: [
            "java.util.List",
            "java.util.Set",
            "java.util.Queue",
            "java.util.Map"
        ],
        correct: 3,
        category: "Collections Framework",
        difficulty: "Medium",
        explanation: "Map is not a subinterface of Collection because maps store key-value mappings rather than single elements. List, Set, and Queue all directly extend java.util.Collection.",
        hint: "Key-value pair data structures reside in a distinct interface hierarchy in java.util."
    },
    {
        question: "For which specific scenario is LinkedList generally preferred over ArrayList in Java?",
        options: [
            "Random element retrieval by index using .get(index)",
            "Frequent insertions and deletions at the very beginning of the list (O(1) vs O(n))",
            "Iterating through items with minimal memory consumption",
            "High performance sorting with Collections.sort()"
        ],
        correct: 1,
        category: "Collections Framework",
        difficulty: "Medium",
        explanation: "LinkedList provides O(1) time complexity for inserting/removing at the front or ends because it only updates node pointers. ArrayList requires O(n) time to shift all subsequent elements in memory.",
        hint: "Prepending elements to an array-backed structure requires shifting all existing items."
    },
    {
        question: "When adding an object into a HashSet, what sequence of method calls does Java perform to prevent duplicate entries?",
        options: [
            "equals() and compareTo()",
            "hashCode() first to find the bucket, and if collisions occur, equals() on bucket elements",
            "equals() first across all elements, followed by hashCode()",
            "toString() comparison followed by identity check"
        ],
        correct: 1,
        category: "Collections Framework",
        difficulty: "Medium",
        explanation: "HashSet computes the element's hashCode() to determine its hash bucket. If the bucket already contains entries (hash collision), it calls equals() on those entries. If equals() returns true, the duplicate is rejected.",
        hint: "Hashing locates the storage bucket, while equals() verifies whether objects are logically identical."
    },
    {
        question: "Which statement accurately describes how standard java.util.HashMap handles null keys and values?",
        options: [
            "HashMap throws NullPointerException if null key or value is inserted",
            "HashMap allows multiple null keys and multiple null values",
            "HashMap permits exactly one null key (stored in bucket 0) and multiple null values",
            "HashMap allows null keys only when wrapped with Collections.synchronizedMap()"
        ],
        correct: 2,
        category: "Collections Framework",
        difficulty: "Medium",
        explanation: "HashMap supports exactly one null key (always hashed to bucket 0) and any number of null values. In contrast, Hashtable and ConcurrentHashMap prohibit all null keys and null values.",
        hint: "Because map keys must be unique, only one null key can exist, whereas values have no uniqueness restriction."
    },
    {
        question: "What happens if you insert an element of a custom class that does NOT implement Comparable into a default-constructed TreeSet?",
        options: [
            "Elements will be automatically ordered by their memory address",
            "The code compiles, but throws a ClassCastException at runtime upon adding the element",
            "A compile-time error occurs immediately",
            "Elements will be maintained in their insertion order"
        ],
        correct: 1,
        category: "Collections Framework",
        difficulty: "Medium",
        explanation: "TreeSet is backed by a Red-Black tree and requires elements to be mutually comparable. Without an explicit Comparator passed to the constructor, TreeSet attempts to cast elements to Comparable<T>, throwing ClassCastException at runtime.",
        hint: "TreeSet requires either a Comparator or elements implementing Comparable to maintain sorting order."
    },

    // ========================================
    // 26–30: Advanced Collections & Scenarios
    // ========================================
    {
        question: "What will be printed by the following code using a default PriorityQueue?\n\nQueue<Integer> pq = new PriorityQueue<>();\npq.offer(30);\npq.offer(10);\npq.offer(20);\n\nwhile (!pq.isEmpty()) {\n    System.out.print(pq.poll() + \" \");\n}",
        options: [
            "30 10 20 ",
            "30 20 10 ",
            "10 20 30 ",
            "10 30 20 "
        ],
        correct: 2,
        category: "Advanced Collections",
        difficulty: "Hard",
        explanation: "By default, PriorityQueue in Java is an unbounded min-heap where elements are ordered by natural ascending order. poll() repeatedly removes and returns the smallest element at the head, outputting '10 20 30 '.",
        hint: "Java's standard PriorityQueue orders elements as a min-priority queue (smallest values extracted first)."
    },
    {
        question: "Consider this scenario with a mutable HashSet element:\n\nclass Person {\n    int id;\n    Person(int id) { this.id = id; }\n    public int hashCode() { return id; }\n    public boolean equals(Object o) { \n        return o instanceof Person && ((Person)o).id == this.id; \n    }\n}\n\nPerson p = new Person(101);\nSet<Person> set = new HashSet<>();\nset.add(p);\np.id = 202;\n\nSystem.out.println(set.contains(p) + \" \" + set.size());\n\nWhat is printed?",
        options: [
            "true 1",
            "false 1",
            "false 0",
            "Throws ConcurrentModificationException"
        ],
        correct: 1,
        category: "Advanced Collections",
        difficulty: "Hard",
        explanation: "When added, p was stored in bucket 101 based on its original hash code. Mutating p.id to 202 changes its hash code to 202. When contains(p) runs, HashSet checks bucket 202, finds it empty, and returns false. The element is still physically in the set, so size() remains 1.",
        hint: "Mutating an object's hash-defining fields while it is inside a hash table breaks lookup integrity."
    },
    {
        question: "Which of the following approaches safely removes elements from an ArrayList<String> during iteration without throwing ConcurrentModificationException?",
        options: [
            "for (String s : list) { if (s.startsWith(\"A\")) list.remove(s); }",
            "Iterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    if (it.next().startsWith(\"A\")) it.remove();\n}",
            "list.forEach(s -> { if (s.startsWith(\"A\")) list.remove(s); });",
            "for (int i = 0; i < list.size(); i++) { list.remove(i); }"
        ],
        correct: 1,
        category: "Advanced Collections",
        difficulty: "Hard",
        explanation: "Enhanced for-loops and forEach utilize iterators internally; calling list.remove() directly modifies modCount without notifying the iterator, triggering ConcurrentModificationException. Using Iterator.remove() properly updates the iterator's internal state.",
        hint: "Always use the Iterator's own remove() method or Collection.removeIf() when removing elements while traversing."
    },
    {
        question: "What will be printed by the following LinkedHashMap configured with access-order set to true?\n\nMap<Integer, String> map = new LinkedHashMap<>(16, 0.75f, true);\nmap.put(1, \"One\");\nmap.put(2, \"Two\");\nmap.put(3, \"Three\");\n\nmap.get(1); // Access key 1\n\nfor (Integer key : map.keySet()) {\n    System.out.print(key + \" \");\n}",
        options: [
            "1 2 3 ",
            "2 3 1 ",
            "3 2 1 ",
            "1 3 2 "
        ],
        correct: 1,
        category: "Advanced Collections",
        difficulty: "Hard",
        explanation: "When LinkedHashMap is created with accessOrder = true, calling get() moves the accessed entry to the tail (end) of its internal doubly-linked list. Accessing key 1 moves it to the end, resulting in an iteration order of '2 3 1 ' (the basis of an LRU cache).",
        hint: "An access-order LinkedHashMap shifts the most recently accessed entry to the end of the iteration sequence."
    },
    {
        question: "In a high-throughput multi-threaded financial application where hundreds of threads concurrently read, update, and insert orders with sorted price keys without locking the entire map, which collection should be selected?",
        options: [
            "Collections.synchronizedSortedMap(new TreeMap<>())",
            "ConcurrentSkipListMap",
            "Hashtable",
            "ConcurrentHashMap"
        ],
        correct: 1,
        category: "Advanced Collections",
        difficulty: "Hard",
        explanation: "ConcurrentSkipListMap provides a thread-safe, concurrent, sorted map based on skip-list algorithms with O(log n) non-blocking access. Synchronized TreeMap locks on a single mutex, Hashtable is unsorted and coarse-locked, and ConcurrentHashMap does not maintain key ordering.",
        hint: "Look for the concurrent sorted collection that uses lock-free skip lists to provide thread safety with ordering."
    }
];
