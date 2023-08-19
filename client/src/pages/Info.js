import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/decorationImages/logo.png";
import fullstack from "../assets/decorationImages/fullstack.png";
import tutorialHell from "../assets/decorationImages/tutorialhell.png";
import styles from "../styles/Home.module.css";

export default function Info() {
  return (
    <div>
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
            Are you ready to embark on an exciting journey into the world of
            coding and programming? At Coducation, we are passionate about
            providing you with a comprehensive and enriching learning experience
            that will empower you to master the art of coding. Whether you're a
            complete beginner or an aspiring developer looking to enhance your
            skills, our platform is designed to cater to learners of all levels.
          </h2>
        </div>
      </header>
      <main>
        <div className={styles.row}>
          <div className={`${styles["col-400"]} ${styles.centerer}`}>
            <div className={`${styles.reason} ${styles.left}`}>
              <h1>Structured Learning Paths</h1>
              <h2>
                Our thoughtfully designed learning paths guide you step by step
                through your coding education. From foundational concepts to
                advanced techniques, you'll follow a logical progression that
                ensures a solid understanding of programming principles.
              </h2>
            </div>
          </div>
          <div className={`${styles["col-300"]} ${styles.centerer}`}>
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img src={logo} alt="Our Logo" />
            </div>
          </div>
          <div className={styles.block}></div>
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor1"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
                alt="JavaScript Logo"
              />
            </div>
          </div>
          <div className={`${styles["col-400"]} ${styles.centerer} `}>
            <div className={`${styles.reason} ${styles.right}`}>
              <h1>One language, full-stack</h1>
              <h2>
                Coducation co-founder Max Locke strongly believes that you don't
                need to learn that many coding languages to become a full-stack
                developer. That's why we focus on teaching you JavaScript, an
                extremely powerful language that runs both in the front-end and
                back-end.
              </h2>
            </div>
          </div>
          <div
            className={`${styles["col-300"]} ${styles.centerer} ${styles["editor2"]}`}
          >
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
                alt="JavaScript Logo"
              />
            </div>
          </div>
          <div className={styles.block}></div>
          <div className={`${styles["col-400"]} ${styles.centerer}`}>
            <div className={`${styles.reason} ${styles.left}`}>
              <h1>Hands-On Projects</h1>
              <h2>
                Theory comes to life through hands-on projects that allow you to
                apply what you've learned in real-world scenarios. Create your
                own web applications, games, and software to build a strong
                portfolio.
              </h2>
            </div>
          </div>
          <div className={`${styles["col-300"]} ${styles.centerer}`}>
            <div className={styles.reason} style={{ textAlign: "center" }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwaHRtbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt="Coding a project from Coducation"
              />
            </div>
          </div>
        </div>
        <h1 className={styles.featuresTitle}>
          Some more Coducation features and perks.
        </h1>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <h1>Interactive Coding Challenges</h1>
            <p>
              Strengthen your problem-solving skills with interactive coding
              challenges and exercises. Challenge yourself and track your
              progress as you master each concept.
            </p>
          </div>
          <div className={styles.feature}>
            <h1>Progress Tracking and Course Recommendation</h1>
            <p>
              Our platform tracks your progress and recommends courses based on
              your skill level and interests. You'll always know what to learn
              next.
            </p>
          </div>
          <div className={styles.feature}>
            <h1>Not paying a Dime</h1>
            <p>
              Coducation is completely free. We believe that education should be
              accessible to everyone, and that it's one of the greatest perks of
              the Internet. That obviously includes coding.
            </p>
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
          Join Coducation Today!
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            textAlign: "center",
            margin: "auto",
            width: "80%",
            maxWidth: "800px",
            marginBottom: "1rem",
          }}
        >
          Coducation isn't interested in your money. We're interested in helping
          you learn how to code. We're always happy to have more people join the
          wonderful world of coding.
        </p>
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
    </div>
  );
}
