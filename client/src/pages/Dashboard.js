import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { functions } from "../security";
import images from "../assets/courseImages/images";

export default function App() {
  const [lessons, setLessons] = useState([]);
  async function getLessons() {
    const res = await fetch("/lessons");
    const data = await res.json();
    data.lessons.map((lesson) => {
      setLessons((oldArray) => [
        ...oldArray,
        <div className="lessonCard">
          <img
            src={images[lesson.image].titleImage}
            className="lessonCardImg hoverable"
          />
          <h1 className="hoverable">{lesson.title}</h1>
          <h2 className="hoverable">{lesson.description}</h2>
          <button
            className="hoverable"
            onClick={() => {
              window.location = `/course/${lesson.ref}`;
            }}
          >
            Go to Lesson
          </button>
        </div>,
      ]);
    });
  }
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("kicking out");
    functions.kickOut();
    getLessons();
  }, []);
  return (
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
            window.location = "/account";
          },
          text: "Account",
        }}
      />
      <div className="hero">
        <div className="col">
          <h1 className="hoverable">Lesson Dashboard</h1>
          <h2 className="hoverable">
            Here are all of our carefully crafted lessons. They might not all be
            complete, but we aim to finish them as soon as possible. Feel free
            to take as many courses as you like, but don't rush through them,
            for that would ruin the point of the lessons being built this way.
            These lessons are built so you can use the tools and not just forget
            them right away.{" "}
          </h2>
        </div>
      </div>
      <div className="lessons">{lessons}</div>
    </div>
  );
}
