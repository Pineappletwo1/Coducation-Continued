module.exports = [
  {
    ref: "unit1",
    title: "Unit 1: Objects and Scope",
    description:
      "Explore object-oriented programming concepts and delve into scope and closures.",
    lessons: require("./lessons/objectsAndScope"),
  },
  {
    ref: "unit2",
    title: "Unit 2: Intermediate DOM Manipulation",
    description:
      "Enhance your understanding of the Document Object Model (DOM) and event handling.",
    lessons: require("./lessons/intermediateDOMManipulation"),
  },
  {
    ref: "unit3",
    title: "Unit 3: Error Handling and Debugging",
    description:
      "Learn advanced error handling techniques and effective debugging strategies.",
    lessons: require("./lessons/errorHandlingAndDebugging"),
  },
  {
    ref: "unit4",
    title: "Unit 4: Asynchronous Programming",
    description:
      "Master asynchronous programming using callbacks, promises, and async/await.",
    lessons: require("./lessons/asynchronousProgramming"),
  },
  {
    ref: "unit5",
    title: "Unit 5: Introduction to ES6+",
    description:
      "Discover the modern features introduced in ES6 and beyond for cleaner and more efficient code.",
    lessons: require("./lessons/introductionToES6"),
  },
  {
    ref: "unit6",
    title: "Unit 6: Object-Oriented Programming",
    description:
      "Dive into object-oriented programming (OOP) principles, classes, constructors, and prototypes.",
    lessons: require("./lessons/objectOrientedProgramming"),
  },
];
