import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { kickOut } from "../security";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import images from "../assets/courseImages/images";

export default function Section() {
  const { courseName, sectionName } = useParams();
  const [sectionInfo, setSectionInfo] = useState({});
  const [units, setUnits] = useState([]);
  async function getSectionInfo() {
    const res = await fetch("/lessons");
    const data = await res.json();
    console.log(data.lessons);
    const course = data.lessons.filter((lesson) => lesson.ref == courseName)[0];
    const section = course.intro.sections.filter(
      (section) => section.ref == sectionName
    )[0];
    setSectionInfo(() => ({
      title: section.title,
      description: section.description,
      image: section.image,
    }));
    console.log(images[courseName].sectionImages[section.image]);
    section.units.map((unit) => {
      setUnits((oldArray) => [
        ...oldArray,
        <div className="lessonCard">
          <img
            src={images[courseName].sectionImages[section.image]}
            className="lessonCardImg hoverable"
          />
          <h1 className="hoverable">{unit.title}</h1>
          <h2 className="hoverable">{unit.description}</h2>
          <button
            className="hoverable"
            onClick={() => {
              window.location = `/unit/${courseName}/${sectionName}/${unit.ref}`;
            }}
          >
            Go to Unit
          </button>
        </div>,
      ]);
    });
  }
  useEffect(() => {
    kickOut();
    getSectionInfo();
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
        <div className="hero" style={{ margin: "1rem 2rem" }}>
          <h1 style={{ width: "100%" }}>{sectionInfo.title}</h1>
          <div style={{ flex: "1 1 500px" }}>
            <img
              src={images[courseName].sectionImages[sectionInfo.image]}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ flex: "1 1 500px" }}>
            <h2>{sectionInfo.description}</h2>
          </div>
          <h1 style={{ width: "100%" }}>
            Here are all of the units of this section:
          </h1>
          <div className="lessons">{units}</div>
        </div>
      </div>
    </>
  );
}
