import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../code.css";
import { functions } from "../security";

export default function Lesson() {
  const { courseName, sectionName, unitName, lessonName } = useParams();
  const [lessonInfo, setLessonInfo] = useState({});
  const [lessonContent, setLessonContent] = useState([]);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [quiz, setQuiz] = useState([]);
  console.log(courseName, sectionName, lessonName);
  async function submit(e) {
    e.preventDefault();
    const questions = document.querySelectorAll(".question");
    const questionList = Array.from(questions);
    const inputs = questionList.map((question) => {
      return question.querySelector("input");
    });
    const checked = inputs.filter((input) => input.checked == true);
    if (checked.length < questions.length / 4) {
      alert("Answer all of the questions!");
    } else {
      const body = {};
      checked.forEach((checked) => {
        body[checked.name] = checked.value;
      });
      body.courseName = courseName;
      body.sectionName = sectionName;
      body.unitName = unitName;
      body.lessonName = lessonName;
      console.log(body);
      const res = await fetch("/quiz", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
    }
  }
  async function getLessonData() {
    const res = await fetch("/lessons");
    const data = await res.json();
    const course = data.lessons.filter((lesson) => lesson.ref == courseName)[0];
    const section = course.intro.sections.filter(
      (section) => section.ref == sectionName
    )[0];
    const unit = section.units.filter((unit) => unit.ref == unitName)[0];
    const lesson = unit.lessons.filter((lesson) => lesson.ref == lessonName)[0];
    setLessonInfo(() => ({
      title: lesson.title,
      content: [],
    }));
    lesson.content.map((section) => {
      if (section.type == "code") {
        setLessonContent((oldArray) => [
          ...oldArray,
          <pre>
            <code className="language-javascript">{section.content}</code>
          </pre>,
        ]);
      } else if (section.type == "image") {
        setLessonContent((oldArray) => [
          ...oldArray,
          <img className="image" src={section.content} />,
          <div className="codeComment">{section.description}</div>,
        ]);
      } else {
        setLessonContent((oldArray) => [
          ...oldArray,
          <div className={section.type}>{section.content}</div>,
        ]);
      }
    });
    lesson.questions.map((question) => {
      const questions = question.options.map((option) => {
        return (
          <div className="question">
            <input value={option} name={question.ref} type="radio" />
            <h1>{option}</h1>
          </div>
        );
      });
      setQuiz((oldArray) => [
        ...oldArray,
        <h1>{question.question}</h1>,
        questions,
      ]);
    });
  }
  async function start() {
    await functions.kickOut();
    await getLessonData();
    setContentLoaded(true);
  }

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (contentLoaded) {
      Prism.highlightAll();
      const checkBoxes = document.querySelectorAll(".question");
      checkBoxes.forEach((box) => {
        box.addEventListener("click", (e) => {
          const input = box.querySelector("input");
          input.checked = "checked";
        });
      });
    }
  }, [contentLoaded]);

  return (
    <>
      <div className="section1">
        <Navbar
          one={{
            function: () => {
              document.cookie =
                "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              document.cookie =
                "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              window.location = "/login";
            },
            text: "Logout",
          }}
          two={{
            function: () => {
              window.location = "/dashboard";
            },
            text: "Dashboard",
          }}
        />
        <div className="lessonContainer">
          <h1 style={{ textAlign: "center" }}>{lessonInfo.title}</h1>
          {lessonContent}
          <form onSubmit={submit}>
            {quiz}
            <button>asdf</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
