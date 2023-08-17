import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { functions } from "../security";
import styles from "../styles/Home.module.css";

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
          <h1>Coducation - Learn the Full Stack</h1>
          <h2>
            Are you sick of going on these tutorials, listening to the person,
            thinking to yourself: "I get everything you're saying, but I don't
            UNDERSTAND what you're saying! I can't remember any of this and use
            it without following along!"
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
        <div className={styles.row}>
          <div className={`${styles["col-400"]} ${styles.centerer}`}>
            <div className={`${styles.reason} ${styles.left}`}>
              <h1>Why Coducation?</h1>
              <h2>
                Coducation knows that coding isn't easy, and learning to code
                isn't easy. Most people will go on YouTube aimlessly, following
                along with these tutorials that don't even make sense to them!
                Coducation provides you with many tools to make the learning
                process easier!
              </h2>
            </div>
          </div>
          <div className={`${styles["col-300"]} ${styles.centerer}`}>
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://static-00.iconduck.com/assets.00/freecodecamp-icon-1024x692-2v5atj80.png"
                alt="FreeCodeCamp Logo"
              />
              <h2 style={{ textAlign: "center" }}>
                Is Free Code Camp Holding you Back?
              </h2>
            </div>
          </div>
          <div className={styles.block} />
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor1"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://user-images.githubusercontent.com/5047891/94183711-290c0780-fea3-11ea-90e3-c88ff9d21bd6.png"
                alt=""
              />
              <h2 style={{ textAlign: "center" }}>
                Have a Live Editor to Follow Along with the Tutorials.
              </h2>
            </div>
          </div>
          <div className={`${styles["col-400"]} ${styles.centerer} `}>
            <div className={`${styles.reason} ${styles.right}`}>
              <h1>Interactive Tutorials</h1>
              <h2>
                All of our courses come with a live code editor with the code
                from the videos that you can run right away and tweak yourself.
                Secondly, we learned through YouTube and we know the good, the
                bad, and the ugly. Lastly, we are non-profit and our ultimate
                goal is to have more people learn to code and benefit from it.
              </h2>
            </div>
          </div>
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor2"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://user-images.githubusercontent.com/5047891/94183711-290c0780-fea3-11ea-90e3-c88ff9d21bd6.png"
                alt=""
              />
              <h2 style={{ textAlign: "center" }}>
                Have a Live Editor to Follow Along with the Tutorials.
              </h2>
            </div>
          </div>
          <div className={styles.block} />
          <h1 style={{ padding: "1rem", margin: "auto", textAlign: "center" }}>
            Coducation presents your free journey to learning full stack
            development.
          </h1>
        </div>
        <div className={styles.row}>
          <div
            className={`${styles["col-300"]} ${styles.centerer}`}
            style={{ textAlign: "center" }}
          >
            <img
              src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
              alt=""
              className={styles.lessonImg}
            />
          </div>
          <div
            className={`${styles["col-500"]}`}
            style={{ padding: "2rem", boxSizing: "border-box" }}
          >
            <h1>HTML</h1>
            <h2>
              HTML is short for Hyper Text Markup Language. All websites are
              displayed with HTML along with CSS to make it more visually
              pleasing. HTML itself doesn't have a lot of coding and is just a
              markup language with text. There are some ways to make HTML more
              interactive including:
            </h2>
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={`${styles["col-300"]} ${styles.centerer}`}
            style={{ textAlign: "center" }}
          >
            <img
              src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
              alt=""
              className={styles.lessonImg}
            />
          </div>
          <div
            className={`${styles["col-500"]}`}
            style={{ padding: "2rem", boxSizing: "border-box" }}
          >
            <h1>JavaScript</h1>
            <h2>
              Javascript is a coding language that can be used to make HTML more
              interactive. It is also of course a coding language with many
              functions. From Mobile Apps to AI, JavaScript's potential is
              growing. You will learn the basics of JavaScript that will not use
              other libraries.
            </h2>
          </div>
        </div>
        <div className={styles.row}>
          <div
            className={`${styles["col-300"]} ${styles.centerer}`}
            style={{ textAlign: "center" }}
          >
            <img
              src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
              alt=""
              className={styles.lessonImg}
            />
          </div>
          <div
            className={`${styles["col-500"]}`}
            style={{ padding: "2rem", boxSizing: "border-box" }}
          >
            <h1>Node.js</h1>
            <h2>
              Node.js is a back-end JavaScript runtime. This brings the amazing
              language of JavaScript to the server. Back-end is essential in
              creating applications, and you can't create a full-stack
              application without the backend. Node.js applications are coded in
              Javascript, commonly using Express.
            </h2>
          </div>
        </div>
        <h1
          style={{
            padding: "1rem",
            textAlign: "center",
            margin: "auto",
            marginTop: "1rem",
          }}
        >
          So what are you waiting for? IT'S FREE!
        </h1>
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
