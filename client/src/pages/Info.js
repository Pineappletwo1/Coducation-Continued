import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/decorationImages/logo.png";
import fullstack from "../assets/decorationImages/fullstack.png";
import tutorialHell from "../assets/decorationImages/tutorialhell.png";

export default function Info() {
  return (
    <div>
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
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="Our logo"
              style={{
                maxWidth: "380px",
                maxHeight: "380px",
                width: "100%",
                boxShadow: "none !important",
                margin: "2rem",
              }}
              className="hoverable"
            />
            <div className="col" style={{ padding: "1rem" }}>
              <h1 className="hoverable">
                Coducation: We teach coding the right way.
              </h1>
              <h2 className="hoverable">
                {" "}
                While teaching coding the "right" way is very objective, the
                reason why that's our slogan, is because our way can teach you
                to become a full-stack developer and get paid at a job like
                Google.{" "}
              </h2>
              <img
                src={fullstack}
                alt=""
                style={{ maxWidth: "600px", maxHeight: "400px", width: "100%" }}
                className="hoverable"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="hero">
          <div className="col">
            <div style={{ width: "100%", textAlign: "center" }}>
              <h1 className="hoverable">Our Goal:</h1>
              <img
                src="https://images.emojiterra.com/google/android-12l/512px/1f3af.png"
                alt=""
                style={{
                  maxWidth: "300px",
                  maxHeight: "300px",
                  width: "100%",
                  filter: "brightness(70%)",
                }}
                className="hoverable"
              />
            </div>
          </div>
          <div className="col">
            <h1 className="hoverable">
              Our goal is to teach people how to become full-stack developers.
            </h1>
            <h2 className="hoverable">
              While front-end development and back-end development alone are
              good, putting them together is even better. Coducation wants it so
              you can create full-stack applications. Once you've grasped
              front-end and back-end, there's really nothing stopping you,
              except for:
            </h2>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="main">
          <div className="col">
            <h1 className="hoverable">Tutorial Hell</h1>
            <h2 className="hoverable">
              I think we've all been there. Endlessly going through these
              YouTube videos and mindlessly copy-pasting code hoping that it
              will work. Going on Stackoverflow to fix those bugs that were then
              created. And I think you can guess how you can avoid that.
            </h2>
          </div>
          <div className="col">
            <img
              src={tutorialHell}
              alt=""
              style={{
                maxWidth: "600px",
                maxHeight: "400px",
                width: "100%",
                borderRadius: "10px",
              }}
              className="hoverable"
            />
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="hero">
          <div className="col">
            <div style={{ width: "100%", textAlign: "center" }}>
              <h1 className="hoverable">Our Goal Again:</h1>
              <img
                src="https://images.emojiterra.com/google/android-12l/512px/1f3af.png"
                alt=""
                style={{
                  maxWidth: "300px",
                  maxHeight: "300px",
                  width: "100%",
                  filter: "brightness(70%)",
                }}
                className="hoverable"
              />
            </div>
          </div>
          <div className="col">
            <h1 className="hoverable">
              Our goal is also to create a good learning experience by escaping
              Tutorial Hell
            </h1>
            <h2 className="hoverable">
              Some reasons why always going on tutorials is bad is because you
              don't understand them, you don't remember the skills, they aren't
              high quality, they don't help with real life scenarios and
              development.
              <br />
              Coducation has quality lessons along with quality videos that we
              picked out. We also have a lot of exercises and a live code editor
              to reuse these skills and not forget them right away.
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
