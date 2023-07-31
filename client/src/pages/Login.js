import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useRef, useEffect } from "react";
import { autoRedirect } from "../security";

export default function Login() {
  useEffect(() => {
    autoRedirect();
  }, []);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const loginRef = useRef();
  async function submit(event) {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    console.log(username, password, email);
    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    });
    const data = await response.json();
    if (response.ok) {
      window.location.href = "/dashboard";
      alert("You have successfully logged in!");
    } else {
      alert(data.error);
      window.location.href = "/fail.html";
    }
  }
  return (
    <>
      <div className="section1">
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
        <h1 style={{ margin: "2rem" }}>Login</h1>
        <form onSubmit={submit}>
          <div className="login">
            <div className="loginSection">
              <label htmlFor="username" className="loginLabel">
                Username:
              </label>
              <br />
              <input
                type="text"
                ref={usernameRef}
                name="username"
                required
                className="loginInput"
              />
            </div>
            <div className="loginSection">
              <label htmlFor="password" className="loginLabel">
                Password:
              </label>
              <br />
              <input
                type="password"
                ref={passwordRef}
                name="password"
                required
                className="loginInput"
              />
            </div>
            <div className="loginSection">
              <label htmlFor="email" className="loginLabel">
                Email:
              </label>
              <br />
              <input
                type="email"
                ref={emailRef}
                name="email"
                required
                className="loginInput"
              />
            </div>
            <br />
            <button
              className="loginSubmit hoverable"
              type="submit"
              id="margin"
              ref={loginRef}
            >
              Login
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
}
