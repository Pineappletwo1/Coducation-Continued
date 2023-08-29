import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { functions } from "../security";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Section.module.css";

export default function Unit() {
  const { courseName, sectionName, unitName } = useParams();
  const [unitInfo, setUnitInfo] = useState({});
  const [loading, setLoading] = useState(true);
  async function getUnitInfo() {
    const res = await fetch("/lessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        info: "unitInfo",
        section: sectionName,
        courseName: courseName,
        unitName: unitName,
      }),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
      return (window.location = "/dashboard");
    }
    setUnitInfo(data.info);
    setLoading(false);
  }
  useEffect(() => {
    functions.kickOut();
    getUnitInfo();
  }, []);
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
          <div className={styles.introContainer}>
            <div className={styles.intro}>
              <h1 style={{ marginBottom: "0.5rem" }}>{unitInfo.title}</h1>
              <h2>{unitInfo.intro.description}</h2>
              <ul>
                {unitInfo.intro.whatYouWillLearn.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className={`${styles.units} ${styles.content}`}>
            {unitInfo.lessons.map((lesson) => {
              return (
                <div key={lesson.ref} className={styles.unit}>
                  <h1>{lesson.title}</h1>
                  <p>{lesson.description}</p>
                  <button
                    onClick={() => {
                      window.location = `/lesson/${courseName}/${sectionName}/${unitName}/${lesson.ref}`;
                    }}
                  >
                    Go to Lesson
                  </button>
                </div>
              );
            })}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
