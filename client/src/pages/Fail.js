import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Fail() {
  useEffect(() => {
    document.querySelector("footer").classList.add("footerAbsolute");
  }, []);
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
      <div style={{ padding: "1rem" }}>
        <h1>Well It looks like you have failed to sign up/log in:</h1>
        <h2>
          Try entering in values for username, email, and password for a
          confirmed account next time. If you did and you got this, you just
          have extreme skill issue like bad Wi-fi.
        </h2>
      </div>
      <Footer />
    </div>
  );
}
