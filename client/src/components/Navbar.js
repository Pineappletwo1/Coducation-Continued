import logo from "../assets/decorationImages/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        <img src={logo} className="navbarImg" />
        <div className="navLink">
          <div
            onClick={() => {
              window.location = "/info";
            }}
          >
            Coducation
          </div>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h8L4 8 0 0z"
              stroke="#f0f0f0"
              strokeWidth="1"
              fill="#f0f0f0"
            />
          </svg>
          <div className="list">
            <div className="listItem">About</div>
            <div className="listItem">Contact</div>
            <div className="listItem">Our Curriculum</div>
            <div className="listItem">Signup</div>
          </div>
        </div>
        <div
          className="navItem navRight"
          style={{ marginLeft: "auto", marginRight: "1rem" }}
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
