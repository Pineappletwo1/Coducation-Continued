import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Nicetry() {
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
      <div style={{ textAlign: "center" }}>
        <h1>
          Well It looks like you tried to make multiple accounts with the same
          email!
        </h1>
        <h2>
          Try not to get around loopholes and just deal with it. If this was a
          server error and you have not signed up with this email yet, then
          that's a skill issue!
        </h2>
        <img
          style={{ width: "50%", aspectRatio: "4/3" }}
          src="https://media1.giphy.com/media/lgcUUCXgC8mEo/200w.gif?cid=6c09b9524lh97dedo44m3n0s0g0o176hvrzz42fj3qzyk4f7&ep=v1_gifs_search&rid=200w.gif&ct=g"
          alt=""
        />
        <Footer />
      </div>
    </div>
  );
}
