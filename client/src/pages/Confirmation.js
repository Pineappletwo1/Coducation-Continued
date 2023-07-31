import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Confirmation() {
  useEffect(() => {
    document.querySelector("footer").classList.add("footerAbsolute");
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
          checking your email and clicking the confirmation link! After doing
          that you will be all set and be an official Coducation user!
        </b>
      </h2>
      <Footer />
    </>
  );
}
