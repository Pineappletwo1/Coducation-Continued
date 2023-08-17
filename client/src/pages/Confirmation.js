import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Confirmation.module.css";
export default function Confirmation() {
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
      <div className={styles.confirmation}>
        <div className={styles.confirmationContent}>
          <h1 className="hoverable" style={{ textAlign: "center" }}>
            <b>You're almost done!</b>
          </h1>
          <h2
            className="hoverable"
            style={{
              maxWidth: "1500px",
              width: "95%",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <b>
              All you need now is to confirm that this is a real email adress by
              checking your email and clicking the confirmation link! After
              doing that you will be all set and be an official Coducation user!
            </b>
          </h2>
        </div>
      </div>
      <Footer style={{ marginTop: "0px" }} />
    </>
  );
}
