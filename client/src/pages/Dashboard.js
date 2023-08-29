import React, { useEffect, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { functions } from "../security";
import styles from "../styles/Dashboard.module.css";
import images from "../assets/courseImages/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faSpinner, faGear } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [content, setContent] = useState(
    <FontAwesomeIcon className={styles.spinner} icon={faSpinner} spin />
  );
  const [loading, setLoading] = useState(true);
  const [beginner, setBeginner] = useState(false);
  const [user, setUser] = useState({});
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [lessonData, setLessonData] = useState();
  function checkImage(url) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
      setImage(url);
      console.log("Image loaded successfully");
    };
    img.onerror = function () {
      console.log("fail");
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      alert("Image could not be loaded.");
    };
  }
  async function loadData() {
    const response = await fetch("/users/data");
    const data = await response.json();
    const user = data.message;
    const lessonsRef = await fetch("/lessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ info: "lessonTitles" }),
    });
    const lessonDataFetch = await lessonsRef.json();
    lessonDataFetch.lessons.length = 3;
    setLessonData(lessonDataFetch);
    setUser(user);
    console.log(user);
    setBeginner(user.beginner);
    checkImage(user.image);
    setLoading(false);
  }

  async function close() {
    setBeginner(false);
    alert(
      'You can always visit this course later at "home.coducation.tech/full-stack" '
    );
    fetch("/users/beginner");
  }
  useEffect(() => {
    (async () => {
      await functions.kickOut();
      loadData();
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
            window.location = "/account";
          },
          text: "Account",
        }}
      />
      {loading === true ? (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin />
      ) : (
        <>
          <div className={styles.content}>
            <div className={styles.sidebar}>
              <div className={styles.sidebarItem}>Courses</div>
              <div className={styles.sidebarItem}>Account</div>
              <div className={styles.sidebarItem}>Settings</div>
              <div className={styles.sidebarItem}>Progress</div>
            </div>
            <div className={styles.main}>
              {beginner === true && (
                <>
                  <div className={styles.hero}>
                    <div className={styles.heroTitle}>
                      Welcome to Coducation!
                    </div>
                    <div className={styles.heroSubtitle}>
                      Your full-stack journey starts here. Coducation's
                      full-stack journey will teach you the HTML essentials, CSS
                      fundamentals, all the JavaScript you'll need to start, and
                      Node.js to start working on the back-end.
                    </div>
                    <button className={styles.startJourney}>
                      Start Journey
                    </button>
                    <div className={styles.heroClose} onClick={close}>
                      <FontAwesomeIcon
                        icon={faX}
                        style={{ color: "#f5f5f5" }}
                      />
                    </div>
                  </div>
                </>
              )}
              <div
                className={styles.profile}
                style={{ display: beginner === true ? "none" : "flex" }}
              >
                <div className={styles.profileImage}>
                  <img src={image} alt="Profile Picture" />
                </div>
                <h1>{user.username}</h1>
                <FontAwesomeIcon
                  icon={faGear}
                  className={styles.profileSettings}
                  onClick={() => {
                    window.location = "/account";
                  }}
                />
              </div>
              {user.currentCourses.length !== 0 ? (
                <h1>Continue with Learning</h1>
              ) : (
                <>
                  <h1 className={styles.discoverTitle}>Discover courses</h1>
                  <div className={styles.discover}>
                    {lessonData.lessons.map((lesson) => {
                      return (
                        <div className={styles.discoverCourse} key={lesson.ref}>
                          <img
                            alt="Course"
                            src={images[lesson.img].titleImage}
                          />
                          <h1>{lesson.title}</h1>
                          <p>{lesson.description}</p>
                          <button
                            onClick={() => {
                              window.location = `/course/${lesson.ref}`;
                            }}
                          >
                            Learn more
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
