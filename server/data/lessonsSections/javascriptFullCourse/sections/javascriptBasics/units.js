module.exports = [
  {
    ref: "unit1",
    title: "Unit 1: Introduction to JavaScript",
    description:
      "Learn about the basics of JavaScript, its history, and its role in web development.",
    intro: {
      title: "Introduction to JavaScript",
      description:
        "Unlock the full potential of web development with our comprehensive Vanilla JavaScript course. In this unit, you'll be introduced to the fundamental concepts of JavaScript and its significance in modern web development.",
      whatYouWillLearn: [
        "Understand the history and evolution of JavaScript.",
        "Explore the importance of JavaScript in modern web development.",
        "Learn about the role of JavaScript in adding interactivity to websites.",
      ],
    },
    lessons: require("./lessons/introductionToJavaScript"),
  },
  {
    ref: "unit2",
    title: "Unit 2: Variables and Data Types",
    description:
      "Understand variables and data types in JavaScript, including variable hoisting, scope, and type coercion.",
    intro: {
      title: "Explore Variables and Data Types in JavaScript",
      description:
        "In this unit, you'll dive into the world of variables and data types in JavaScript. You'll learn how to declare variables, understand their scope, and explore the different data types that JavaScript offers.",
      whatYouWillLearn: [
        "Understand the concept of variables and their purpose.",
        "Learn about different data types in JavaScript.",
        "Explore variable hoisting and scope.",
        "Understand type coercion and its implications.",
      ],
    },
    lessons: require("./lessons/variablesAndDataTypes"),
  },
  {
    ref: "unit3",
    title: "Unit 3: Operators and Expressions",
    description:
      "Explore operators, expressions, and template literals to perform operations and build dynamic strings.",
    intro: {
      title: "Discover Operators and Expressions in JavaScript",
      description:
        "In this unit, you'll dive into the world of operators and expressions in JavaScript. Operators allow you to perform various operations on values, while expressions combine values to create new ones. You'll also learn about template literals for creating dynamic strings.",
      whatYouWillLearn: [
        "Understand different types of operators in JavaScript.",
        "Learn about arithmetic, comparison, and logical operators.",
        "Explore expressions and their role in JavaScript.",
        "Create dynamic strings using template literals.",
      ],
    },
    lessons: require("./lessons/operatorsAndExpressions"),
  },
  {
    ref: "unit4",
    title: "Unit 4: Control Flow",
    description:
      "Master control flow concepts such as conditional statements, nested if-else, and the switch statement.",
    intro: {
      title: "Explore Control Flow in JavaScript",
      description:
        "In this unit, you'll delve into control flow statements in JavaScript, which allow you to make decisions and control the execution path of your code based on various conditions.",
      whatYouWillLearn: [
        "Understand how to use if-else statements for decision making.",
        "Learn about nested if-else statements and their applications.",
        "Explore the switch statement for multiple conditional checks.",
        "Practice using control flow to solve real-world scenarios.",
      ],
    },
    lessons: require("./lessons/controlFlow"),
  },
  {
    ref: "unit5",
    title: "Unit 5: Loops",
    description:
      "Dive into different types of loops in JavaScript for iterative tasks.",
    intro: {
      title: "Dive into Loops in JavaScript",
      description:
        "In this unit, you'll explore the concept of loops in JavaScript, which allow you to automate repetitive tasks by iterating over collections or executing code multiple times.",
      whatYouWillLearn: [
        "Understand the for loop and its components.",
        "Learn about the while loop and its use cases.",
        "Explore the do-while loop and its unique behavior.",
        "Practice solving problems using loops for efficient coding.",
      ],
    },
    lessons: require("./lessons/loops"),
  },
  {
    ref: "unit6",
    title: "Unit 6: Functions",
    description:
      "Discover the world of functions, including function scope, parameter passing, and IIFE.",
    intro: {
      title: "Discover Functions in JavaScript",
      description:
        "In this unit, you'll dive into the concept of functions in JavaScript. Functions are essential for organizing and reusing code, and you'll explore their various aspects, including function scope, parameter passing, and immediately invoked function expressions (IIFE).",
      whatYouWillLearn: [
        "Understand how to define and call functions.",
        "Learn about function scope and variable visibility.",
        "Explore different ways of passing parameters to functions.",
        "Discover the concept of IIFE and its applications.",
      ],
    },
    lessons: require("./lessons/functions"),
  },
  {
    ref: "unit7",
    title: "Unit 7: Arrays",
    description:
      "Deep dive into arrays, including array manipulation, iteration, and common methods.",
    intro: {
      title: "Deep Dive into Arrays in JavaScript",
      description:
        "In this unit, you'll explore arrays, a fundamental data structure in JavaScript. Arrays allow you to store and manipulate collections of data. You'll learn how to create, modify, and iterate over arrays, as well as utilize common array methods for various tasks.",
      whatYouWillLearn: [
        "Understand how to create and initialize arrays.",
        "Learn about array manipulation methods such as push, pop, shift, and unshift.",
        "Explore array iteration using loops and forEach.",
        "Discover powerful array methods like map, filter, and reduce.",
      ],
    },
    lessons: require("./lessons/arrays"),
  },
];
