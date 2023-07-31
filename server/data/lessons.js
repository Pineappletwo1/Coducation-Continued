const javascriptFullCourseSections = require("./lessonsSections/javascriptFullCourse");
const htmlEssentialsSections = require("./lessonsSections/htmlEssentials");
const cssFundamentalsSections = require("./lessonsSections/cssFundamentals");

module.exports = [
  {
    language: "JavaScript",
    ref: "javascriptfullcourse",
    title: "Javascript Full Course",
    description:
      "Javascript is a great coding language with many uses. This course will help you get through vanilla JavaScript fundamentals all the way into modern ES6 syntax and advanced DOM manipulation and some HTML canvas. This course will not use any JavaScript libraries or frameworks and is 100% static.",
    image: "javascriptfullcourse",
    intro: {
      hook: 'Welcome to the world of "JavaScript"!',
      description:
        "Javascript is the superior coding language. Well, this is a pretty bold statement, but let me explain. First, it's easy to learn and once you get the basics done, you can get a lot done. Javascript can theoretically be run anywhere, so that means it can be run in any environment. Then you can create new compilers that can run javascript in different ways to fix minor flaws or make it more efficient. Nodejs is the server side Javascript coding language that most people use, while working with the front-end there's an all out war between React.js, Angular, and Vue and which one is \"better.\" This makes it so getting the basics done can make it easier to learn these other frameworks and runtimes and even potentially only learn javascript (with decent HTML and CSS skills probably) and get a job.",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      reasonsToLearn: [
        {
          description:
            "Javascript is a very easy language to learn and it's very easy to get started with. It's also very easy to get a lot done with it. Learning JavaScript can be a rewarding experience, and once you grasp the fundamentals, you'll have the power to create interactive and dynamic web applications.",
          title: "It's easy to learn!",
        },
        {
          description:
            "Javascript is a very versatile language. It can be used for frontend development, backend development, and even mobile development. With JavaScript, you can build web applications, server-side applications, and even mobile apps using frameworks like React Native or NativeScript.",
          title: "It's versatile!",
        },
        {
          description:
            "Javascript is a very popular language. It's the most popular language on GitHub and it's the most popular language on StackOverflow. This popularity means you'll find a vast community and plenty of resources to support your learning journey and problem-solving.",
          title: "It's popular!",
        },
      ],
      curriculum:
        "Our JavaScript full course will take you from the basics of JavaScript, to being able to use these skills to improve your websites and create games. Here are the different stages of the curriculum, and feel free to view and skip them if needed. Coducation tracks your progress, so if you want to show off that you completed the JavaScript full-course, you'll need to take the tests of each unit, or take the unit test and get a 100%.",
      sections: javascriptFullCourseSections,
    },
  },
  {
    ref: "htmlessentials",
    title: "HTML Essentials",
    description:
      "HTML is a fundamental markup language for building web pages. In this course, you'll learn the essential concepts of HTML, including how to create elements, structure your content, and use semantic tags. Understanding HTML is crucial for every web developer, as it forms the backbone of any website. By the end of this course, you'll have a solid foundation in HTML and be ready to enhance your web development skills with CSS and JavaScript.",
    image: "htmlessentials",
    intro: {
      hook: 'Discover the power of "HTML Essentials"!',
      description:
        "HTML, which stands for HyperText Markup Language, is a core technology for building websites. It provides the structure and content of web pages, allowing browsers to interpret and display them. Learning HTML is the first step to becoming a web developer. Whether you want to create simple static pages or dive into more complex web applications, mastering HTML is essential. This course will guide you through the fundamentals of HTML, and you'll be amazed at how quickly you can create web content with just a few lines of code.",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/320px-HTML5_logo_resized.svg.png",
      reasonsToLearn: [
        {
          description:
            "HTML is the backbone of web development, and understanding it is essential for every web developer. With HTML, you'll be able to create the structure of your web pages, adding headings, paragraphs, and lists to organize your content.",
          title: "Foundation of Web Development",
        },
        {
          description:
            "Learning HTML is easy and straightforward, making it accessible to beginners. The simplicity of HTML means you can quickly grasp its basic concepts and start building web pages from scratch.",
          title: "Simplicity and Accessibility",
        },
        {
          description:
            "By the end of this course, you'll be able to create structured and semantically meaningful web pages. Using semantic tags, you'll enhance the accessibility and SEO-friendliness of your websites.",
          title: "Creating Content-Rich Websites",
        },
      ],
      curriculum:
        "The HTML Essentials course covers all the necessary aspects of HTML. From basic elements to semantic tags, you'll gain a comprehensive understanding of HTML. Completing the course and its assessments will demonstrate your proficiency in creating web content with HTML.",
      sections: htmlEssentialsSections,
    },
  },
  {
    ref: "cssfundamentals",
    title: "CSS Fundamentals",
    description:
      "CSS (Cascading Style Sheets) is a powerful styling language that complements HTML. This course will teach you the basics of CSS, including how to apply styles to your web pages, control layout, and create responsive designs. By mastering CSS, you'll be able to transform plain HTML documents into visually appealing and interactive websites.",
    image: "cssfundamentals",
    intro: {
      hook: 'Unleash your creativity with "CSS Fundamentals"!',
      description:
        "CSS is the language that makes your web pages visually stunning. It allows you to apply colors, fonts, spacing, and various styles to your HTML elements, turning them into beautifully designed web pages. Learning CSS is a crucial step in becoming a well-rounded web developer. With CSS, you can control the layout and presentation of your web pages, creating eye-catching designs and delivering a great user experience. This course will take you from the basics of CSS to more advanced techniques, empowering you to create modern and responsive web designs.",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/320px-CSS3_logo_and_wordmark.svg.png",
      reasonsToLearn: [
        {
          description:
            "CSS is essential for customizing the look and feel of your websites, giving you creative control. By applying CSS styles to your HTML elements, you can create visually stunning web pages that captivate your audience.",
          title: "Unlock Your Design Creativity",
        },
        {
          description:
            "CSS allows you to implement responsive design, making your websites adapt to different screen sizes and devices. With CSS, you'll create web pages that look great on desktops, tablets, and smartphones.",
          title: "Create Responsive Web Designs",
        },
        {
          description:
            "By the end of this course, you'll be proficient in CSS and able to implement complex layouts and effects. From styling text to creating animations, CSS opens up endless possibilities for enhancing your web pages.",
          title: "Enhance Web Page Interactivity",
        },
      ],
      curriculum:
        "The CSS Fundamentals course covers everything you need to know to create stylish and visually appealing web pages. From basic styling to responsive design, you'll acquire a solid foundation in CSS. Upon completing the course and its assessments, you'll have the skills to create custom layouts, engaging animations, and interactive web content.",
      sections: cssFundamentalsSections,
    },
  },
];
