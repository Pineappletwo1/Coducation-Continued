module.exports = [
  {
    ref: "javascriptBasics",
    title: "Introduction to JavaScript",
    description:
      "This section will provide an introduction to JavaScript, covering its history, basic concepts, and its role in web development.",
    image: "javascriptBasics",
    units: require("./javascriptFullCourseUnits/javascriptBasics"),
  },
  {
    ref: "javascriptIntermediate",
    title: "JavaScript Intermediate",
    description:
      "This section will cover intermediate concepts of JavaScript, including object-oriented programming, classes, constructors, more array and object methods, and DOM events.",
    image: "javascriptIntermediate",
    units: require("./javascriptFullCourseUnits/javascriptIntermediate"),
  },
  {
    ref: "javascriptAdvanced",
    title: "JavaScript Advanced",
    description:
      "In this section, you will explore advanced JavaScript concepts while building simple and fun games using DOM manipulation and HTML canvas.",
    image: "javascriptAdvanced",
    units: require("./javascriptFullCourseUnits/javascriptAdvanced"),
  },
];
