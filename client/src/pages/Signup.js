import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  return (
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
      <h1 style={{ margin: "2rem" }}>Signup</h1>
      <form action="/users/signup" method="post">
        <div className="login">
          <div className="loginSection">
            <label htmlFor="username" className="loginLabel">
              Username:
            </label>
            <br />
            <input
              type="text"
              id="username"
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
              id="password"
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
              id="email"
              name="email"
              required
              className="loginInput"
            />
          </div>
          <br />
          <button className="loginSubmit hoverable" type="submit" id="margin">
            Signup
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
