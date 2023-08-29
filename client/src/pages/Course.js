import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { functions } from "../security";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
import images from "../assets/courseImages/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Course.module.css";

export default function Course() {
  const { courseName } = useParams();
  const [courseInfo, setCourseInfo] = useState({});
  const [loading, setLoading] = useState(true);
  async function getCourseInfo() {
    const res = await fetch("/lessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ info: "courseInfo", course: courseName }),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
      return (window.location = "/dashboard");
    }
    setCourseInfo(data);
    setLoading(false);
  }
  useEffect(() => {
    (async () => {
      await functions.kickOut();
      getCourseInfo();
    })();
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
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>{courseInfo.title}</h1>
              <p>{courseInfo.description}</p>
            </div>
          </div>
          <div className={styles.courseContent}>
            <h1 className={styles.aboutTitle}>About our Course</h1>
            <h2 className={styles.about}>{courseInfo.about}</h2>
            {courseInfo.sections.map((section) => {
              console.log(section, images);
              return (
                <>
                  <div className={styles.section} key={section.ref}>
                    <div className={styles.sectionImage}>
                      <img
                        src={images[courseName].sectionImages[section.img]}
                      ></img>
                    </div>
                    <div className={styles.sectionDescription}>
                      <h1>{section.title}</h1>
                      <h2>{section.description}</h2>
                      <button
                        onClick={() => {
                          window.location = `/section/${courseName}/${section.ref}`;
                        }}
                      >
                        Go to section
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
