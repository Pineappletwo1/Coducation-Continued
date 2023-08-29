import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { functions } from "../security";
import DashboardNavbar from "../components/DashboardNavbar";
import Footer from "../components/Footer";
import images from "../assets/courseImages/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Section.module.css";

export default function Section() {
  const { courseName, sectionName } = useParams();
  const [sectionInfo, setSectionInfo] = useState({});
  const [loading, setLoading] = useState(true);
  async function getSectionInfo() {
    const res = await fetch("/lessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        info: "sectionInfo",
        section: sectionName,
        courseName: courseName,
      }),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
      return (window.location = "/dashboard");
    }
    setSectionInfo(data.info);
    setLoading(false);
  }
  useEffect(() => {
    functions.kickOut();
    getSectionInfo();
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
              <div className={styles.introImage}>
                <img
                  src={images[courseName].sectionImages[sectionInfo.image]}
                  alt=""
                />
              </div>
              <div className={styles.introText}>
                <h1>{sectionInfo.title}</h1>
                <p>{sectionInfo.intro.description}</p>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h1>What You Will Learn in this Course</h1>
            {sectionInfo.intro.whatYouWillLearn.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
            <div className={styles.units}>
              {sectionInfo.units.map((item, index) => {
                return (
                  <div className={styles.unit} key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button
                      onClick={() => {
                        window.location = `/unit/${courseName}/${sectionName}/${item.ref}`;
                      }}
                    >
                      Start
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
