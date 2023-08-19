import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { functions } from "../security";
import styles from "../styles/Account.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faUser,
  faLock,
  faEnvelope,
  faBook,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

export default function Account() {
  function checkImage(url) {
    var img = new Image();
    img.src = url;
    console.log(img);
    img.onload = function () {
      setImage(url);
    };
    img.onerror = function () {
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      alert("Image could not be loaded.");
    };
  }
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const usernameInput = useRef();
  const passwordInput = useRef();
  const descriptionInput = useRef();
  const imageUrlInput = useRef();
  const [userInfo, setUserInfo] = useState({});
  async function getUserData() {
    const response = await fetch("/users/data");
    const data = await response.json();
    console.log(data);
    setUserInfo(() => ({
      username: data.message.username,
      email: data.message.email,
      password: data.message.password,
      desc: data.message.description,
      image: data.message.image,
    }));
    checkImage(data.message.image);
    setLoading(false);
  }
  useEffect(() => {
    (async () => {
      await functions.kickOut();
      getUserData();
    })();
  }, []);
  function update() {
    if (
      usernameInput.current.value !== "" &&
      passwordInput.current.value !== "" &&
      descriptionInput.current.value !== "" &&
      imageUrlInput.current.value !== ""
    ) {
      const requirment = window.confirm(
        "Are you sure you want to update your account?"
      );
      if (requirment === true) {
        fetch("/users/update", {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            description: descriptionInput.current.value,
            image: imageUrlInput.current.value,
          }),
        });
        alert("Updated!");
        window.location.reload();
        console.log("updated");
      } else {
        alert("Nothing happened.");
      }
    } else {
      alert("Please fill in all of the values!");
    }
  }
  return (
    <div>
      <Navbar
        one={{
          function: () => {
            document.cookie =
              "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie =
              "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location = "/login";
          },
          text: "Logout",
        }}
        two={{
          function: () => {
            window.location = "/dashboard";
          },
          text: "Dashboard",
        }}
      />
      {loading === true ? (
        <FontAwesomeIcon className="spinner" icon={faSpinner} spin />
      ) : (
        <>
          <div className={styles.accountContainer}>
            <div className={styles.profile}>
              <img
                src={image}
                alt="Image could not be loaded."
                className={styles.profileImage}
              />
              <div className={styles.profileInfo}>
                <h1>{userInfo.username}</h1>
                <h2>{userInfo.email}</h2>
                <h2>{userInfo.desc}</h2>
              </div>
            </div>
            <div className={styles.profileEdit}>
              <div className={styles.profileEditBox}>
                <h1 className={styles.profileEditHeader}>
                  Update new user info:
                </h1>
                <div className={styles.input}>
                  <FontAwesomeIcon icon={faUser} style={{ flexGrow: 0 }} />
                  <input
                    type="text"
                    placeholder="Username"
                    ref={usernameInput}
                    defaultValue={userInfo.username}
                  />
                </div>
                <div className={styles.input}>
                  <FontAwesomeIcon icon={faLock} style={{ flexGrow: 0 }} />
                  <input
                    type="password"
                    placeholder="Password"
                    ref={passwordInput}
                    defaultValue={userInfo.password}
                  />
                </div>
                <div className={styles.input}>
                  <FontAwesomeIcon icon={faBook} style={{ flexGrow: 0 }} />
                  <input
                    type="text"
                    placeholder="Description"
                    ref={descriptionInput}
                    defaultValue={userInfo.desc}
                  />
                </div>
                <div className={styles.input}>
                  <FontAwesomeIcon icon={faBook} style={{ flexGrow: 0 }} />
                  <input
                    type="text"
                    placeholder="Profile Picture (URL)"
                    ref={imageUrlInput}
                    defaultValue={userInfo.image}
                  />
                </div>
                <button className={styles.profileEditButton} onClick={update}>
                  Update
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
