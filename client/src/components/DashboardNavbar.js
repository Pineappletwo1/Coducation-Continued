import logo from "../assets/decorationImages/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function DashboardNavbar(props) {
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

        <div className="navItem">Courses</div>
        <div className="navSearchContainer">
          <div className="navSearch">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div
          className="navItem navRight"
          style={{ marginLeft: "auto" }}
          onClick={props.one.function}
        >
          {props.one.text}
        </div>
        <div
          className="navItem navRight"
          style={{ marginLeft: "1rem" }}
          onClick={props.two.function}
        >
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
