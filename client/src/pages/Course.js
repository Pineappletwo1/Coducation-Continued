import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { kickOut } from "../security";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import images from "../assets/courseImages/images";

export default function Course() {
  const { courseName } = useParams();
  const [courseInfo, setCourseInfo] = useState({});
  async function getCourseInfo() {
    const res = await fetch("/lessons");
    const data = await res.json();
    const course = data.lessons.filter((lesson) => lesson.ref == courseName)[0];
    console.log(course);
    setCourseInfo(() => ({
      title: course.title,
      description: course.intro.description,
      hook: course.intro.hook,
      image: course.intro.imageSrc,
      language: course.language,
      curriculum: course.intro.curriculum,
      sections: course.intro.sections.map((section) => (
        <div className="lessonCard">
          <img
            className="lessonCardImg"
            src={images[course.ref].sectionImages[section.image]}
            alt=""
          />
          <h1 className="hoverable">{section.title}</h1>
          <h2 className="hoverable">{section.description}</h2>
          <button
            className="hoverable"
            onClick={() => {
              window.location = `/section/${courseName}/${section.ref}`;
            }}
          >
            Enroll
          </button>
        </div>
      )),
      reasonsToLearn: course.intro.reasonsToLearn.map((reason) => (
        <div className="reason" style={{ flex: "1 1 400px" }}>
          <h1 className="hoverable">{reason.title}</h1>
          <h2 className="hoverable">{reason.description}</h2>
        </div>
      )),
    }));
  }
  useEffect(() => {
    getCourseInfo();
  }, []);
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
        <h1 className="hoverable" style={{ margin: "2rem" }}>
          {courseInfo.hook}
        </h1>
        <div className="hero">
          <div style={{ flex: "1 1 400px" }}>
            <img
              src={courseInfo.image}
              className="hoverable"
              style={{
                width: "90%",
                maxWidth: "650px",
                maxHeight: "650px",
                margin: "1rem",
              }}
            />
          </div>
          <div style={{ flex: "1 1 550px" }}>
            <h1 className="hoverable">{courseInfo.title}</h1>
            <h2 className="hoverable">{courseInfo.description}</h2>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="hero">
          <div style={{ flex: "1 1 100%" }} className="hoverable">
            <h1 style={{ padding: "0rem", margin: "0rem 1rem" }}>
              Why should I learn {courseInfo.language}?
            </h1>
          </div>
          {courseInfo.reasonsToLearn}
        </div>
      </div>
      <div className="section1">
        <div className="hero">
          <div style={{ flex: "1 1 100%" }} className="hoverable">
            <h1 style={{ marginBottom: "0rem" }}>Our Curriculum.</h1>
          </div>
          <div
            style={{ flex: "1 1 100%", paddingTom: "0rem", marginTom: "0rem" }}
          >
            <h2 className="hoverable">{courseInfo.curriculum}</h2>
          </div>
          <div>
            <div style={{ flex: "1 1 100%" }}>
              <div className="lessons">{courseInfo.sections}</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
