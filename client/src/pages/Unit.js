import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { kickOut } from "../security";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Unit() {
  const { courseName, sectionName, unitName } = useParams();
  const [unitInfo, setUnitInfo] = useState({});
  const [lessons, setLessons] = useState([]);
  async function getUnitInfo() {
    const res = await fetch("/lessons");
    const data = await res.json();
    console.log(data.lessons);
    const course = data.lessons.filter((lesson) => lesson.ref == courseName)[0];
    const section = course.intro.sections.filter(
      (section) => section.ref == sectionName
    )[0];
    const unit = section.units.filter((unit) => unit.ref == unitName)[0];
    setUnitInfo(() => ({
      title: unit.title,
      description: unit.description,
    }));
    unit.lessons.map((lesson) => {
      setLessons((oldArray) => [
        ...oldArray,
        <div className="lessonBar">
          <h1 className="hoverable">{lesson.title}</h1>
          <h2 className="hoverable">{lesson.description}</h2>
          <button
            className="hoverable"
            onClick={() => {
              window.location = `/lesson/${courseName}/${sectionName}/${unitName}/${lesson.ref}`;
            }}
          >
            Go to Lesson
          </button>
        </div>,
      ]);
    });
  }
  useEffect(() => {
    kickOut();
    getUnitInfo();
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
        <div className="hero" style={{ margin: "1rem" }}>
          <h1>{unitInfo.title}</h1>
          <h2>{unitInfo.description}</h2>
          <h2>
            Please note, you will want to do the lessons in order if you are new
            to the coding language. If you want to get to a specific lesson,
            feel free to skip through.
          </h2>
          <div className="lessonGrid" style={{ width: "100%" }}>
            {lessons}
          </div>
        </div>
      </div>
    </>
  );
}
