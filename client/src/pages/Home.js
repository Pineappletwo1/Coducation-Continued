import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { functions } from "../security";
import styles from "../styles/Home.module.css";
import fullStack from "../assets/decorationImages/fullstack.png";

export default function Home() {
  useEffect(() => {
    functions.autoRedirect();
  }, []);

  return (
    <>
      <Navbar
        one={{
          function: () => {
            window.location = "/login";
          },
          text: "Login",
        }}
        two={{
          function: () => {
            window.location = "/signup";
          },
          text: "Sign Up",
        }}
      />
      <header className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1>
            Coducation - Your Ultimate Coding Companion for Middle and High
            Schoolers
          </h1>
          <h2>
            Embark on an exciting journey through the world of coding with
            Coducation! Tailored specifically for middle and high school
            students, Coducation offers an all-encompassing platform to guide
            and inspire your coding education adventure.
          </h2>
          <button
            className={styles.signUp}
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Sign Up Now
          </button>
        </div>
      </header>
      <main>
        <h1 className={styles.why}>Why Coducation?</h1>
        <div className={styles.row}>
          <div className={`${styles["col-400"]} ${styles.centerer}`}>
            <div className={`${styles.reason} ${styles.left}`}>
              <h1>Essential and Quality Resources</h1>
              <h2>
                Coducation provides you with a treasure trove of carefully
                curated resources, ensuring that you have access to top-notch
                materials that facilitate effective learning.
              </h2>
            </div>
          </div>
          <div className={`${styles["col-300"]} ${styles.centerer}`}>
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1189&q=80"
                alt="A Library of Books"
              />
            </div>
          </div>
          <div className={styles.block} />
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor1"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/01/15/03/04/idea-3083106_640.jpg"
                alt="An arrow with Success"
              />
            </div>
          </div>
          <div className={`${styles["col-400"]} ${styles.centerer} `}>
            <div className={`${styles.reason} ${styles.right}`}>
              <h1>Guided Path to Success:</h1>
              <h2>
                Navigating the coding landscape can be overwhelming, but not
                with Coducation. We offer a structured pathway that acts as your
                compass, leading you from your first lines of code to mastering
                the intricacies of full-stack development.
              </h2>
            </div>
          </div>
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor2"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://cdn.pixabay.com/photo/2018/01/15/03/04/idea-3083106_640.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.block} />
          <div className={`${styles["col-400"]} ${styles.centerer}`}>
            <div className={`${styles.reason} ${styles.left}`}>
              <h1>Track Your Progress</h1>
              <h2>
                Stay motivated by tracking your progress along the coding
                journey. Watch as you conquer challenges, learn new concepts,
                and witness your skills grow with every step.
              </h2>
            </div>
          </div>
          <div className={`${styles["col-300"]} ${styles.centerer}`}>
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Building a House"
              />
            </div>
          </div>
          <div className={styles.block} />
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor1"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://cdn.pixabay.com/photo/2021/03/08/09/56/assessment-6078645_1280.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${styles["col-400"]} ${styles.centerer} `}>
            <div className={`${styles.reason} ${styles.right}`}>
              <h1>Helpful Quizzes</h1>
              <h2>
                Reinforce your understanding with interactive quizzes that
                challenge your knowledge and help solidify your learning.
              </h2>
            </div>
          </div>
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor2"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://cdn.pixabay.com/photo/2021/03/08/09/56/assessment-6078645_1280.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.block} />
          <div className={`${styles["col-400"]} ${styles.centerer}`}>
            <div className={`${styles.reason} ${styles.left}`}>
              <h1>Unleash Creativity with Projects</h1>
              <h2>
                Coducation doesn't just teach coding; it encourages you to put
                your skills to use! Our platform is packed with inspiring
                project ideas that allow you to showcase your abilities while
                stretching the boundaries of your imagination.
              </h2>
            </div>
          </div>
          <div className={`${styles["col-300"]} ${styles.centerer}`}>
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png"
                alt="Coding a Project"
              />
            </div>
          </div>
          <div className={styles.block} />
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor1"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img src={fullStack} alt="" />
            </div>
          </div>
          <div className={`${styles["col-400"]} ${styles.centerer} `}>
            <div className={`${styles.reason} ${styles.right}`}>
              <h1>Full-Stack Development Journey</h1>
              <h2>
                Embark on a transformative journey from a coding novice to a
                full-stack developer. Coducation's comprehensive curriculum
                equips you with the skills needed to create both front-end and
                back-end solutions.
              </h2>
            </div>
          </div>
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor2"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img src={fullStack} alt="" />
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            textAlign: "center",
            margin: "auto",
            marginTop: "1rem",
            fontSize: "2rem",
            width: "80%",
            maxWidth: "800px",
          }}
        >
          Coducation isn't just a platform
          <div style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
            it's your partner in coding excellence. Join us and unlock the door
            to limitless possibilities in the world of coding. Start your
            journey with Coducation today!
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            className={styles.signUp}
            onClick={() => {
              window.location = "/signup";
            }}
            style={{ boxShadow: "5px 5px 10px grey" }}
          >
            Sign Up
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
