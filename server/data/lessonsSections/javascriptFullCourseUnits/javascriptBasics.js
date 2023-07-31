module.exports = [
  {
    ref: "unit1",
    title: "Unit 1: Introduction to JavaScript",
    description:
      "Learn about the basics of JavaScript, its history, and its role in web development.",
    lessons: [
      {
        ref: "lesson1",
        title: "Lesson 1: What is JavaScript?",
        questions: [
          {
            ref: "question1",
            question: "What 's one plus one?",
            options: [0, 1, 2, 3],
            solution: 2,
          },
          {
            ref: "question2",
            question: "What's two plus two?",
            options: [0, 1, 3, 4],
            solution: 4,
          },
        ],
        content: [
          {
            type: "paragraph",
            content:
              "Welcome to Lesson 1! In this lesson, we'll introduce you to the world of JavaScript and its significance in modern web development.",
          },
          {
            type: "paragraph",
            content:
              "JavaScript is a high-level, interpreted programming language primarily used for front-end web development. It was created by Brendan Eich in 1995 and quickly became an essential part of web development due to its ability to add interactivity and dynamic features to websites.",
          },
          {
            type: "paragraph",
            content:
              "JavaScript is a versatile language that can be used for both front-end and back-end development. In recent years, it has gained popularity for server-side development with the advent of technologies like Node.js.",
          },
          {
            type: "paragraph",
            content:
              "In this lesson, you'll gain a basic understanding of JavaScript and its various applications in web development.",
          },
          {
            type: "image",
            content: "https://example.com/javascript_intro.png",
            description: "JavaScript in action on a web page.",
          },
          {
            type: "paragraph",
            content:
              "JavaScript's key features include its ability to manipulate the Document Object Model (DOM), manage events, handle asynchronous operations, and make HTTP requests. As you continue learning JavaScript, you'll discover how these features contribute to building interactive and dynamic web applications.",
          },
        ],
      },
      {
        ref: "lesson2",
        title: "Lesson 2: JavaScript in Web Development",
        content: [
          {
            type: "paragraph",
            content:
              "In this lesson, we'll explore how JavaScript fits into the broader landscape of web development.",
          },
          {
            type: "paragraph",
            content:
              "JavaScript is a crucial component of front-end development as it enables dynamic content and interactivity on websites. With the use of JavaScript, developers can create engaging user interfaces, handle user interactions, and perform various actions based on user input.",
          },
          {
            type: "paragraph",
            content:
              "On the client-side, JavaScript is executed in the user's web browser. It allows developers to modify the Document Object Model (DOM), which represents the structure of the web page. By manipulating the DOM, developers can dynamically update the content, style, and behavior of web pages without requiring a page reload.",
          },
          {
            type: "paragraph",
            content:
              "Furthermore, JavaScript is used in conjunction with HTML and CSS to build interactive web applications, from simple form validations to complex single-page applications (SPAs) that mimic desktop applications in functionality and user experience.",
          },
          {
            type: "image",
            content: "https://example.com/javascript_web_development.png",
            description:
              "Example of a JavaScript-powered interactive form on a website.",
          },
          {
            type: "code",
            content:
              "function showMessage() {\n  const message = 'Hello, JavaScript!';\n  alert(message);\n}\n\nshowMessage();",
            description:
              "Example of a simple JavaScript function that shows an alert message.",
          },
          {
            type: "paragraph",
            content:
              "JavaScript's versatility extends to server-side development as well. With the introduction of Node.js, JavaScript can be used to build scalable and efficient server-side applications. Node.js allows developers to use the same language and share code between the client and server, making it easier to create full-stack applications.",
          },
        ],
      },
      {
        ref: "lesson3",
        title: "Lesson 3: JavaScript Versions and ES6+",
        content: [
          {
            type: "paragraph",
            content:
              "In this lesson, we'll explore the different versions of JavaScript and the enhancements introduced in ECMAScript 6 (ES6) and beyond.",
          },
          {
            type: "paragraph",
            content:
              "JavaScript has evolved over the years, with new features and syntax improvements being introduced in each version. ES6, also known as ECMAScript 2015, was a significant update that brought numerous enhancements to the language.",
          },
          {
            type: "paragraph",
            content:
              "Some of the notable features introduced in ES6 include arrow functions, classes, template literals, destructuring, and modules. These features made JavaScript code more concise, readable, and easier to maintain.",
          },
          {
            type: "image",
            content: "https://example.com/javascript_es6_features.png",
            description: "Example of an ES6 arrow function in JavaScript code.",
          },
          {
            type: "code",
            content:
              "const greeting = (name) => `Hello, ${name}!`;\nconsole.log(greeting('John'));",
            description:
              "Example of an ES6 arrow function using template literals to create a greeting message.",
          },
          {
            type: "paragraph",
            content:
              "As a modern web developer, it's essential to be familiar with ES6+ features and use them in your projects to take advantage of the latest improvements in the language. Many popular JavaScript frameworks and libraries, such as React and Vue.js, leverage ES6 features to provide a more efficient and enjoyable development experience.",
          },
        ],
      },
      {
        ref: "lesson4",
        title: "Lesson 4: Setting Up a JavaScript Development Environment",
        content: [
          {
            type: "paragraph",
            content:
              "In this lesson, we'll guide you through setting up a JavaScript development environment to start building web applications.",
          },
          {
            type: "paragraph",
            content:
              "To develop JavaScript applications, you need a code editor, a web browser, and a version control system. There are several popular code editors like Visual Studio Code, Sublime Text, and Atom, among others. Choose the one that best suits your preferences.",
          },
          {
            type: "paragraph",
            content:
              "For testing and debugging your applications, modern web browsers like Google Chrome, Mozilla Firefox, and Microsoft Edge provide developer tools that allow you to inspect, analyze, and debug JavaScript code effectively.",
          },
          {
            type: "paragraph",
            content:
              "Additionally, using version control systems like Git and hosting your code on platforms like GitHub or GitLab allows you to collaborate with other developers and manage changes to your codebase efficiently.",
          },
          {
            type: "image",
            content: "https://example.com/setup_js_environment.png",
            description:
              "Example of a code editor and browser developer tools.",
          },
          {
            type: "code",
            content:
              "console.log('Setting up JavaScript development environment...');",
            description:
              "Example of a console log message indicating the setup process.",
          },
          {
            type: "paragraph",
            content:
              "By the end of this lesson, you'll have a fully functional JavaScript development environment ready to build amazing web applications.",
          },
          {
            type: "paragraph",
            content:
              "In the next unit, we'll dive deeper into JavaScript fundamentals and explore variables, data types, and basic operations. Let's get started!",
          },
        ],
      },
      // Add more lessons here...
    ],
  },
  {
    ref: "unit2",
    title: "Unit 2: Variables",
    description: "Learn about variables and their importance in JavaScript.",
    lessons: [
      {
        ref: "lesson1",
        title: "Lesson 1: Understanding Variables",
        content: "",
      },
      {
        ref: "lesson2",
        title: "Lesson 2: Variable Naming and Declaration",
        content: "",
      },
      {
        ref: "lesson3",
        title: "Lesson 3: Working with Data Types",
        content: "",
      },
      {
        ref: "lesson4",
        title: "Lesson 4: Scope and Hoisting",
        content: "",
      },
    ],
  },
  {
    ref: "unit3",
    title: "Unit 3: If Statements and Prompt",
    description:
      "Learn about conditional statements and how to interact with users using the prompt function.",
    lessons: [
      {
        ref: "lesson1",
        title: "Lesson 1: Introduction to If Statements",
        content: "",
      },
      {
        ref: "lesson2",
        title: "Lesson 2: Using Comparison Operators",
        content: "",
      },
      { ref: "lesson3", title: "Lesson 3: Logical Operators", content: "" },
      {
        ref: "lesson4",
        title: "Lesson 4: Using the prompt Function",
        content: "",
      },
    ],
  },
  {
    ref: "unit4",
    title: "Unit 4: For and While Loops",
    description:
      "Explore different types of loops in JavaScript for iterative tasks.",
    lessons: [
      {
        ref: "lesson1",
        title: "Lesson 1: Introduction to Loops",
        content: "",
      },
      { ref: "lesson2", title: "Lesson 2: The for Loop", content: "" },
      { ref: "lesson3", title: "Lesson 3: The while Loop", content: "" },
      {
        ref: "lesson4",
        title: "Lesson 4: Loop Control Statements (break and continue)",
        content: "",
      },
    ],
  },
  {
    ref: "unit5",
    title: "Unit 5: Block and Global Scope",
    description:
      "Learn about block scope, global scope, and how variables are scoped in JavaScript.",
    lessons: [
      {
        ref: "lesson1",
        title: "Lesson 1: Understanding Block Scope",
        content: "",
      },
      {
        ref: "lesson2",
        title: "Lesson 2: Global Scope and Global Variables",
        content: "",
      },
      {
        ref: "lesson3",
        title: "Lesson 3: Function Scope and Closure",
        content: "",
      },
      {
        ref: "lesson4",
        title: "Lesson 4: Let, Const, and Var",
        content: "",
      },
    ],
  },
  {
    ref: "unit6",
    title: "Unit 6: Introduction to Objects",
    description:
      "Learn about objects, their properties, and how to work with them in JavaScript.",
    lessons: [
      { ref: "lesson1", title: "Lesson 1: Creating Objects", content: "" },
      {
        ref: "lesson2",
        title: "Lesson 2: Accessing Object Properties",
        content: "",
      },
      {
        ref: "lesson3",
        title: "Lesson 3: Adding and Removing Object Properties",
        content: "",
      },
      {
        ref: "lesson4",
        title: "Lesson 4: Nested Objects and Object Methods",
        content: "",
      },
    ],
  },
  {
    ref: "unit7",
    title: "Unit 7: Arrays in JavaScript",
    description:
      "Explore arrays, their manipulation, and common array methods.",
    lessons: [
      {
        ref: "lesson1",
        title: "Lesson 1: Creating and Initializing Arrays",
        content: "",
      },
      {
        ref: "lesson2",
        title: "Lesson 2: Accessing and Modifying Array Elements",
        content: "",
      },
      {
        ref: "lesson3",
        title: "Lesson 3: Array Iteration and Manipulation",
        content: "",
      },
      {
        ref: "lesson4",
        title: "Lesson 4: Multidimensional Arrays",
        content: "",
      },
    ],
  },
  {
    ref: "unit8",
    title: "Unit 8: Functions",
    description:
      "Explore the concept of functions and their importance in JavaScript.",
    lessons: [
      {
        ref: "lesson1",
        title: "Lesson 1: Introducing Functions",
        content: "",
      },
      {
        ref: "lesson2",
        title: "Lesson 2: Function Parameters and Return",
        content: "",
      },
      {
        ref: "lesson3",
        title: "Lesson 3: Using Function Expressions",
        content: "",
      },
      { ref: "lesson4", title: "Lesson 4: Arrow Functions", content: "" },
    ],
  },
  {
    ref: "unit9",
    title: "Unit 9: Switch Statements",
    description:
      "Learn about the switch statement for handling multiple conditions.",
    lessons: [
      {
        ref: "lesson1",
        title: "Lesson 1: Introduction to Switch Statements",
        content: "",
      },
      {
        ref: "lesson2",
        title: "Lesson 2: Basic Switch Syntax",
        content: "",
      },
      {
        ref: "lesson3",
        title: "Lesson 3: Using Case and Break",
        content: "",
      },
      {
        ref: "lesson4",
        title: "Lesson 4: Multiple Cases and Default",
        content: "",
      },
    ],
  },
];
