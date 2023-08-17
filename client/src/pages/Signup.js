import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
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
      <form action="/users/signup" method="post">
        <div className={styles.loginContainer}>
          <div className={styles.loginSection}>
            <div className={styles.login}>
              <h1>Signup</h1>
              <div className={styles.input}>
                <FontAwesomeIcon icon={faUser} style={{ flexGrow: 0 }} />
                <input type="text" placeholder="Username" name="username" />
              </div>
              <div className={styles.input}>
                <FontAwesomeIcon icon={faEnvelope} style={{ flexGrow: 0 }} />
                <input type="email" placeholder="Email" name="email" required />
              </div>
              <div className={styles.input}>
                <FontAwesomeIcon icon={faLock} style={{ flexGrow: 0 }} />
                <input type="password" placeholder="Password" name="password" />
              </div>
              <button type="submit" className={styles.loginButton}>
                Signup
              </button>
            </div>
          </div>
          <div className={styles.decoration} />
        </div>
      </form>
      <Footer style={{ marginTop: "0px" }} />
    </>
  );
}
