import "../App.css";
import logo from "../assets/decorationImages/logo.png";

export default function Navbar(props) {
  function revealNavMenu() {
    if (document.getElementById("asdf").style.display == "") {
      document.getElementById("asdf").style.display = "flex";
    } else {
      document.getElementById("asdf").style.display = "";
    }
  }
  return (
    <>
      <nav className="nav">
        <img src={logo} className="navbarImg navItem" />
        <div
          className="navItem"
          onClick={() => {
            window.location = "/info";
          }}
        >
          Coducation
        </div>
        <div
          className="navItem navRight"
          style={{ marginLeft: "auto" }}
          onClick={props.one.function}
        >
          {props.one.text}
        </div>
        <div className="navItem navRight" onClick={props.two.function}>
          {props.two.text}
        </div>
        <div className="navMenuIcon" onClick={revealNavMenu}>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
        </div>
      </nav>
      <div className="navMenu" id="asdf">
        <div className="navMenuItem" onClick={props.one.function}>
          {props.one.text}
        </div>
        <div className="navMenuItem" onClick={props.two.function}>
          {props.two.text}
        </div>
      </div>
    </>
  );
}
