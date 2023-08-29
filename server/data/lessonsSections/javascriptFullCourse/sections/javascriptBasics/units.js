module.exports = [
  {
    ref: "unit1",
    title: "Unit 1: Introduction to JavaScript",
    description:
      "Learn about the basics of JavaScript, its history, and its role in web development.",
    lessons: require("./lessons/introductionToJavaScript"),
  },
  {
    ref: "unit2",
    title: "Unit 2: Variables and Data Types",
    description:
      "Understand variables and data types in JavaScript, including variable hoisting, scope, and type coercion.",
    lessons: require("./lessons/variablesAndDataTypes"),
  },
  {
    ref: "unit3",
    title: "Unit 3: Operators and Expressions",
    description:
      "Explore operators, expressions, and template literals to perform operations and build dynamic strings.",
    lessons: require("./lessons/operatorsAndExpressions"),
  },
  {
    ref: "unit4",
    title: "Unit 4: Control Flow",
    description:
      "Master control flow concepts such as conditional statements, nested if-else, and the switch statement.",
    lessons: require("./lessons/controlFlow"),
  },
  {
    ref: "unit5",
    title: "Unit 5: Loops",
    description:
      "Dive into different types of loops in JavaScript for iterative tasks.",
    lessons: require("./lessons/loops"),
  },
  {
    ref: "unit6",
    title: "Unit 6: Functions",
    description:
      "Discover the world of functions, including function scope, parameter passing, and IIFE.",
    lessons: require("./lessons/functions"),
  },
  {
    ref: "unit7",
    title: "Unit 7: Arrays",
    description:
      "Deep dive into arrays, including array manipulation, iteration, and common methods.",
    lessons: require("./lessons/arrays"),
  },
];
