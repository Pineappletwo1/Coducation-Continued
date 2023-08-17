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
  const [beginner, setBeginner] = useState(false);
  const [user, setUser] = useState({});
  async function loadData() {
    const response = await fetch("/users/data");
    const data = await response.json();
    const user = data.message;
    setUser(user);
    console.log(user);
    setBeginner(user.beginner);
    setContent(
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
                  <div className={styles.heroTitle}>Welcome to Coducation!</div>
                  <div className={styles.heroSubtitle}>
                    Your full-stack journey starts here. Coducation's full-stack
                    journey will teach you the HTML essentials, CSS
                    fundamentals, all the JavaScript you'll need to start, and
                    Node.js to start working on the back-end.
                  </div>
                  <button className={styles.startJourney}>Start Journey</button>
                  <div className={styles.heroClose} onClick={close}>
                    <FontAwesomeIcon icon={faX} style={{ color: "#f5f5f5" }} />
                  </div>
                </div>
              </>
            )}
            <div
              className={styles.profile}
              style={{ display: beginner === true ? "none" : "flex" }}
            >
              <div className={styles.profileImage}>
                <img src={user.image} alt="Profile Picture" />
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
            {user.currentCourses.length === 0 ? (
              <>
                <h1 className={styles.discoverTitle}>Discover courses</h1>
                <div className={styles.discover}>
                  <div className={styles.discoverCourse}>
                    <img src={images.htmlessentials.titleImage} alt="Course" />
                    <h1>Html essentials</h1>
                    <p>
                      Learn the basics of HTML, the language that powers the
                      web.
                    </p>
                    <button
                      onClick={() => {
                        window.location = "/full-stack/html-essentials";
                      }}
                    >
                      Learn more
                    </button>
                  </div>
                  <div className={styles.discoverCourse}>asdfasdfasdf</div>
                  <div className={styles.discoverCourse}>asdfasdfasdfasf</div>
                </div>
              </>
            ) : (
              <div>
                <h1>Continue your Learning</h1>
              </div>
            )}
          </div>
        </div>
      </>
    );
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
      {content}
    </>
  );
}
