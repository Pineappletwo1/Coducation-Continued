import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fccLogo from "../assets/decorationImages/fcc.png";
import pythonLogo from "../assets/decorationImages/pythonlogo.png";
import React, { useEffect, useState } from "react";
import { autoRedirect } from "../security";

export default function Home() {
  useEffect(() => {
    autoRedirect();
  }, []);
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
        <div className="hero">
          <div className="col">
            <img
              src="https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png"
              className="hero-img"
              alt=""
            />
          </div>
          <div className="col" style={{ marginTop: "2rem" }}>
            <h1 className="hoverable">Coducation</h1>
            <h2 className="hoverable">
              Are you sick of going on these tutorials, listening to the person,
              thinking to yourself: "I get everything you're saying, but I don't
              UNDERSTAND what you're saying! I can't remember any of this and
              use it without following along!"
            </h2>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="main">
          <div className="col2">
            <h1 className=" hoverable">Why Coducation?</h1>
            <h2 className=" hoverable">
              Coducation knows that coding isn't easy, and learning to code
              isn't easy. Most people will go on YouTube aimlessly, following
              along with these tutorials that don't even make sense to them!
              Coducation provides you with many tools to make the learning
              process easier! First, all of our courses come with a live code
              editor with the code from the videos that you can run right away
              and tweak yourself. Secondly, we learned through YouTube and we
              know the good, the bad, and the ugly. Lastly, we are non-profit
              and are ultimate goal is to have more people learn to code and
              benefit from it.
            </h2>
          </div>
          <div className="col2" style={{ textAlign: "center" }}>
            <img
              src={fccLogo}
              alt="free code camp logo"
              className="fcc hoverable"
            />
            <h1 className="hoverable">Am I holding you back?</h1>
          </div>
        </div>
      </div>
      <div className="section1">
        <h1 style={{ margin: "0px", padding: "1rem" }} className="hoverable">
          These lessons are designed so when you are finished you can become a
          full-stack developer.
        </h1>
        <div className="lesson">
          <div className="lessonCol1">
            <img
              src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
              className="htmlLogo hoverable"
            />
          </div>
          <div className="lessonCol2">
            <h1 className="hoverable">HTML</h1>
            <h2 className="hoverable">
              HTML is short for Hyper Text Markup Language. All websites are
              displayed with HTML along with CSS to make it more visually
              pleasing. HTML itself doesn't have a lot of coding and is just a
              markup language with text. There are some ways to make HTML more
              interactive including:
            </h2>
          </div>
        </div>
        <div className="lesson">
          <div className="lessonCol1">
            <img
              src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
              className="jsLogo hoverable"
            />
          </div>
          <div className="lessonCol2">
            <h1 className="hoverable">Javascript</h1>
            <h2 className="hoverable">
              Javascript is a coding language that can be used to make HTML more
              interactive. It is also of course a coding language with many
              functions. From Mobile Apps to AI, JavaScript's potential is
              growing. You will learn the basics of JavaScript that will not use
              other libraries.
            </h2>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="lesson">
          <div className="lessonCol1">
            <img
              src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
              className="jsLogo hoverable"
            />
          </div>
          <div className="lessonCol2">
            <h1 className="hoverable">NodeJS</h1>
            <h2 className="hoverable">
              NodeJS is a back-end JavaScript runtime. This brings the amazing
              language of JavaScript to the server. Back-end is essential in
              creating applications, and you can't create a full-stack
              application without the backend. NodeJS applications are coded in
              Javascript, making it the equivallent to Flask for Python.
            </h2>
          </div>
        </div>
        <div className="lesson">
          <div className="lessonCol1">
            <img src={pythonLogo} className="jsLogo hoverable" />
          </div>{" "}
          <div className="lessonCol2">
            <h1 className="hoverable">Python</h1>
            <h2 className="hoverable">
              Python is a general-purpose programming language that can be used
              for processing text, numbers, images, scientific data and more. It
              is an interpreted, object-oriented, high-level programming
              language with dynamic semantics. Python is used for web
              development (server-side), software development, mathematics,
              system scripting and more.
            </h2>
          </div>
        </div>
      </div>
      <div className="section1">
        <h1
          style={{ margin: "0px", padding: "1rem", textAlign: "center" }}
          className="hoverable"
        >
          So what are you waiting for? IT'S FREE!
        </h1>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => (window.location = "/signup")}
            className="signUpNow"
          >
            Sign up now
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
