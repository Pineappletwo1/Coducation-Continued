const javascriptFullCourseSections = require("./lessonsSections/javascriptFullCourse/course");
const htmlEssentialsSections = require("./lessonsSections/htmlEssentials/course");
const cssFundamentalsSections = require("./lessonsSections/cssFundamentals/course");

module.exports = {
  javascriptfullcourse: {
    language: "JavaScript",
    ref: "javascriptfullcourse",
    title: "JavaScript Full Course",
    description:
      "Master the art of JavaScript programming with our comprehensive full course. From fundamental concepts to advanced techniques, this course covers everything you need to know to become a skilled JavaScript developer.",
    shortDescription:
      "A comprehensive JavaScript course for beginners and beyond.",
    image: "javascriptfullcourse",
    intro: {
      hook: "Welcome to the world of JavaScript programming!",
      description:
        "JavaScript is a versatile and powerful programming language that enables you to create dynamic and interactive web applications. Whether you're just starting out or looking to deepen your skills, our JavaScript Full Course has you covered. Dive into the world of programming and learn how to build engaging web experiences from scratch.",
      about:
        "This course is designed to guide you through the world of JavaScript, starting from the basics and progressing to advanced concepts. You'll learn how to work with variables, control flow, functions, objects, and more. Our course is designed to provide a solid foundation in JavaScript programming, setting you up for success in both web development and software engineering.",
      sections: javascriptFullCourseSections,
    },
  },
  htmlessentials: {
    ref: "htmlessentials",
    title: "HTML Essentials",
    description:
      "HTML is a fundamental markup language for building web pages. In this course, you'll learn the essential concepts of HTML, including how to create elements, structure your content, and use semantic tags. Understanding HTML is crucial for every web developer, as it forms the backbone of any website. By the end of this course, you'll have a solid foundation in HTML and be ready to enhance your web development skills with CSS and JavaScript.",

    shortDescription:
      "Learn the basics of HTML, the language that builds your websites.",
    image: "htmlessentials",
    intro: {
      hook: 'Discover the power of "HTML Essentials"!',
      description:
        "HTML, which stands for HyperText Markup Language, is a core technology for building websites. It provides the structure and content of web pages, allowing browsers to interpret and display them. Learning HTML is the first step to becoming a web developer. Whether you want to create simple static pages or dive into more complex web applications, mastering HTML is essential. This course will guide you through the fundamentals of HTML, and you'll be amazed at how quickly you can create web content with just a few lines of code.",
      about:
        "This course is divided into three different sections. It is completely beginner friendly and you can start from the beginning, or jump right to the advanced sections. It should be noted that this course doesn't focus on using CSS or JavaScript. This course is meant for you to understand HTML and how to use it, and to get you ready to use CSS and JavaScript to enhance your web pages.",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/320px-HTML5_logo_resized.svg.png",
      curriculum:
        "The HTML Essentials course covers all the necessary aspects of HTML. From basic elements to semantic tags, you'll gain a comprehensive understanding of HTML. Completing the course and its assessments will demonstrate your proficiency in creating web content with HTML.",
      sections: htmlEssentialsSections,
    },
  },
  cssfundamentals: {
    ref: "cssfundamentals",
    title: "CSS Fundamentals",
    description:
      "CSS (Cascading Style Sheets) is a powerful styling language that complements HTML. This course will teach you the basics of CSS, including how to apply styles to your web pages, control layout, and create responsive designs. By mastering CSS, you'll be able to transform plain HTML documents into visually appealing and interactive websites.",
    shortDescription:
      "Learn the basics of CSS, the language that adds styles to your websites.",
    image: "cssfundamentals",
    intro: {
      hook: 'Unleash your creativity with "CSS Fundamentals"!',
      description:
        "CSS is the language that makes your web pages visually stunning. It allows you to apply colors, fonts, spacing, and various styles to your HTML elements, turning them into beautifully designed web pages. Learning CSS is a crucial step in becoming a well-rounded web developer. With CSS, you can control the layout and presentation of your web pages, creating eye-catching designs and delivering a great user experience. This course will take you from the basics of CSS to more advanced techniques, empowering you to create modern and responsive web designs.",
      about:
        "This course is divided into three different sections. It is almost completely beginner friendly, because you should already know some HTML. You can start from the beginning, or jump right to the advanced sections. This course was designed so you can make your websites look modern and professional, but the beginner and intermediate sections are more about creating foundations.",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/320px-CSS3_logo_and_wordmark.svg.png",
      curriculum:
        "The CSS Fundamentals course covers everything you need to know to create stylish and visually appealing web pages. From basic styling to responsive design, you'll acquire a solid foundation in CSS. Upon completing the course and its assessments, you'll have the skills to create custom layouts, engaging animations, and interactive web content.",
      sections: cssFundamentalsSections,
    },
  },
};
