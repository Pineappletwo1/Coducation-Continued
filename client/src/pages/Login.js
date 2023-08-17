import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useRef, useEffect } from "react";
import { functions } from "../security";
import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  useEffect(() => {
    functions.autoRedirect();
  }, []);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function submit(event) {
    event.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, email, password);

    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "/dashboard";
      alert("You have successfully logged in!");
    } else {
      alert(data.error);
    }
  }

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
      <form onSubmit={submit}>
        <div className={styles.loginContainer}>
          <div className={styles.loginSection}>
            <div className={styles.login}>
              <h1>Login</h1>
              <div className={styles.input}>
                <FontAwesomeIcon icon={faUser} style={{ flexGrow: 0 }} />
                <input type="text" placeholder="Username" ref={usernameRef} />
              </div>
              <div className={styles.input}>
                <FontAwesomeIcon icon={faEnvelope} style={{ flexGrow: 0 }} />
                <input type="text" placeholder="Email" ref={emailRef} />
              </div>
              <div className={styles.input}>
                <FontAwesomeIcon icon={faLock} style={{ flexGrow: 0 }} />
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
              <button type="submit" className={styles.loginButton}>
                Login
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
