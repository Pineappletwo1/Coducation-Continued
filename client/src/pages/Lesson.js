import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../code.css";
import { functions } from "../security";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Lesson.module.css";

export default function Lesson() {
  const { courseName, sectionName, unitName, lessonName } = useParams();
  const [lessonInfo, setLessonInfo] = useState({});
  const [loading, setLoading] = useState(true);
  async function getLessonData() {
    const res = await fetch("/lessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        info: "lessonInfo",
        section: sectionName,
        courseName: courseName,
        unitName: unitName,
        lessonName: lessonName,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.lesson === undefined) {
      alert("something weng wrong");
      return (window.location = "/dashboard");
    }
    setLessonInfo(data.lesson);
    setLoading(false);
    Prism.highlightAll();
  }

  useEffect(() => {
    functions.kickOut();
    getLessonData();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [lessonInfo]);

  return (
    <>
      <DashboardNavbar
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
      {loading === true ? (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin />
      ) : (
        <>
          <div className={styles.lessonContainer}>
            <div className={styles.lesson}>
              <h1 style={{ textAlign: "center" }}>{lessonInfo.title}</h1>
              {lessonInfo.content.map((section) => {
                if (section.type == "code") {
                  return (
                    <pre>
                      <code className="language-javascript">
                        {section.content}
                      </code>
                    </pre>
                  );
                } else if (section.type == "image") {
                  return (
                    <>
                      <img className={styles.image} src={section.content} />,
                      <div className={styles.codeComment}>
                        {section.description}
                      </div>
                      ,
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className={styles[section.type]}>
                        {section.content}
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
