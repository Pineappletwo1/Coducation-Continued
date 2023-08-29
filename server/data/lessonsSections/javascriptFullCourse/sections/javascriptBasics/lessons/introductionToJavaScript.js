module.exports = [
  {
    ref: "whatIsJavaScript",
    title: "What is JavaScript?",
    description:
      "Learn about the basics of JavaScript, its history, and its role in web development.",
    questions: [
      {
        ref: "question1",
        question: "What is JavaScript primarily used for?",
        options: [
          "Creating stylish web designs",
          "Building server-side applications",
          "Adding interactivity to websites",
          "Creating databases",
        ],
        solution: 2,
      },
      {
        ref: "question2",
        question: "When was JavaScript created?",
        options: ["1990", "2000", "2005", "1995"],
        solution: 3,
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
        type: "paragraph",
        content:
          "JavaScript's key features include its ability to manipulate the Document Object Model (DOM), manage events, handle asynchronous operations, and make HTTP requests. As you continue learning JavaScript, you'll discover how these features contribute to building interactive and dynamic web applications.",
      },
    ],
  },
  {
    ref: "javascriptInWebDevelopment",
    title: "JavaScript in Web Development",
    description:
      "Explore how JavaScript fits into the broader landscape of web development.",
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
    ref: "settingUpJavaScriptEnvironment",
    title: "Setting Up a JavaScript Development Environment",
    description:
      "Guide to setting up a JavaScript development environment to start building web applications.",
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
];
