module.exports = {
  "Variables and Declarations": {
    content: [
      {
        type: "paragraph",
        content:
          "Welcome to Lesson 1 of Unit 2! In this lesson, we'll dive into variables and declarations in JavaScript.",
      },
      {
        type: "paragraph",
        content:
          "In JavaScript, variables are used to store and manage data. They provide a way to refer to values by a name or identifier. Variables can hold various types of data, such as numbers, strings, and objects.",
      },
      {
        type: "paragraph",
        content:
          "To declare a variable, you use the 'let' or 'const' keyword, followed by the variable name. The 'let' keyword is used for variables whose values can change, while the 'const' keyword is used for variables whose values remain constant.",
      },
      {
        type: "code",
        content: "let age = 25;\nconst name = 'John';\nlet balance = 1000.50;",
        description:
          "Examples of variable declarations using 'let' and 'const'.",
      },
      {
        type: "paragraph",
        content:
          "In this lesson, we've introduced you to the basics of declaring variables. As you continue your JavaScript journey, you'll learn more about scope, hoisting, and best practices for naming variables.",
      },
    ],
  },
  "Understanding Data Types": {
    content: [
      {
        type: "paragraph",
        content:
          "In Lesson 2, we'll explore the various data types available in JavaScript and learn how to work with them.",
      },
      {
        type: "paragraph",
        content:
          "JavaScript supports several primitive data types, including numbers, strings, booleans, null, undefined, and symbols. Additionally, there is a complex data type called an object that can hold key-value pairs of data.",
      },
      {
        type: "code",
        content:
          "const age = 25;\nconst name = 'John';\nconst isStudent = true;\nconst user = { firstName: 'Alice', lastName: 'Johnson' };",
        description: "Examples of variables with different data types.",
      },
      {
        type: "paragraph",
        content:
          "In JavaScript, variables are dynamically typed, meaning their data type can change during runtime. Understanding data types is crucial for writing effective and bug-free code.",
      },
    ],
  },
  "Type Coercion and Conversion": {
    content: [
      {
        type: "paragraph",
        content:
          "Lesson 3: Let's delve into the concepts of type coercion and type conversion in JavaScript.",
      },
      {
        type: "paragraph",
        content:
          "Type coercion refers to JavaScript's automatic conversion of data types when performing operations. For example, when concatenating a string and a number, JavaScript converts the number to a string before performing the operation.",
      },
      {
        type: "paragraph",
        content:
          "Type conversion, on the other hand, involves explicitly changing the data type of a value. This can be done using built-in functions or operators.",
      },
      {
        type: "code",
        content:
          "const num = 5;\nconst text = '10';\nconst result = num + Number(text);\nconst converted = String(result);",
        description: "Examples of type coercion and conversion.",
      },
      {
        type: "paragraph",
        content:
          "Understanding type coercion and conversion is essential for preventing unexpected behavior in your JavaScript code.",
      },
    ],
  },
  "Working with Strings": {
    content: [
      {
        type: "paragraph",
        content:
          "Welcome to Lesson 4! In this lesson, we'll focus on working with strings in JavaScript.",
      },
      {
        type: "paragraph",
        content:
          "A string is a sequence of characters enclosed in single or double quotes. Strings are used to represent text and are essential for tasks like displaying messages, input validation, and more.",
      },
      {
        type: "code",
        content:
          "const firstName = 'Alice';\nconst lastName = 'Johnson';\nconst fullName = firstName + ' ' + lastName;",
        description: "Examples of string concatenation.",
      },
      {
        type: "paragraph",
        content:
          "JavaScript provides various string methods that allow you to manipulate strings, extract substrings, find the length, and perform other operations.",
      },
    ],
  },
  "Working with Numbers": {
    content: [
      {
        type: "paragraph",
        content:
          "Lesson 5: Let's explore the world of numbers in JavaScript and learn about different numerical operations.",
      },
      {
        type: "paragraph",
        content:
          "Numbers are used for performing mathematical calculations and operations in JavaScript. JavaScript supports both integer and floating-point numbers.",
      },
      {
        type: "code",
        content:
          "const num1 = 10;\nconst num2 = 3.14;\nconst sum = num1 + num2;\nconst product = num1 * num2;",
        description: "Examples of numerical operations.",
      },
      {
        type: "paragraph",
        content:
          "In addition to basic arithmetic operations, JavaScript provides built-in Math object methods for more advanced mathematical calculations.",
      },
    ],
  },
  "Working with Booleans": {
    content: [
      {
        type: "paragraph",
        content:
          "In Lesson 6, we'll discuss the boolean data type and its significance in conditional statements.",
      },
      {
        type: "paragraph",
        content:
          "Booleans represent true or false values and are often used in decision-making and comparisons. They play a crucial role in creating conditions and controlling the flow of a program.",
      },
      {
        type: "code",
        content:
          "const isSunny = true;\nconst isLoggedIn = false;\nconst temperature = 25;\nconst isWarm = temperature > 20;",
        description: "Examples of boolean variables and comparisons.",
      },
      {
        type: "paragraph",
        content:
          "Booleans are fundamental to programming logic and are used extensively in conditional statements and loops.",
      },
    ],
  },
};
