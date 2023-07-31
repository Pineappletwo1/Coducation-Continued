import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { kickOut } from "../security";

export default function Account() {
  useEffect(() => {
    kickOut();
  }, []);
  function checkImage(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    let fdsa = request;
    request.onload = function () {
      if (request.status == 200) {
        document.querySelectorAll("img")[1].src = url;
      } else {
        document.querySelectorAll("img")[1].src =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        alert("Image cannot be found!");
      }
    };
  }
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
  }
  useEffect(() => {
    getUserData();
  }, []);
  function update() {
    if (
      usernameInput.current.value != "" &&
      passwordInput.current.value != "" &&
      descriptionInput.current.value != "" &&
      imageUrlInput.current.value != ""
    ) {
      const requirment = window.confirm(
        "Are you sure you want to update your account?"
      );
      if (requirment == true) {
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
    <div className="section1">
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
      <div style={{ margin: "1rem" }}>
        <h1 className="hoverable">Welcome to your account page.</h1>
        <h3 className="hoverable">
          Here you can view your account settings and alter your profile.
        </h3>
      </div>
      <div className="hero">
        <div style={{ flex: "1 1 250px" }}>
          <img
            src={
              typeof userInfo.image == "string"
                ? userInfo.image
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="No image has been provided"
            style={{
              maxWidth: "600px",
              maxHeight: "600px",
              width: "100%",
              borderRadius: "10%",
            }}
            className="hoverable"
          />
        </div>
        <div style={{ margin: "1rem", flex: "1 1 250px" }}>
          <h1 className="hoverable">{userInfo.username}</h1>
          <h2 style={{ color: "grey" }} className="hoverable">
            {userInfo.email}
          </h2>
          <h2 className="hoverable" style={{ width: "90%" }}>
            {userInfo.desc}
          </h2>
        </div>
      </div>
      <div style={{ margin: "1rem" }}>
        <h1>Update new user info:</h1>
        <div className="loginSection">
          <label htmlFor="usernameInput" className="loginLabel">
            Username
          </label>
          <input
            defaultValue={userInfo.username}
            type="text"
            className="loginInput"
            ref={usernameInput}
            placeholder={userInfo.username}
          />
        </div>
        <div className="loginSection">
          <label htmlFor="passwordInput" className="loginLabel">
            Password
          </label>
          <input
            defaultValue={userInfo.password}
            type="password"
            ref={passwordInput}
            placeholder={userInfo.password}
            className="loginInput"
          />
        </div>
        <div className="loginSection">
          <label htmlFor="descriptionInput" className="loginLabel">
            Description
          </label>
          <input
            defaultValue={userInfo.desc}
            type="text"
            ref={descriptionInput}
            className="loginInput"
            placeholder={userInfo.desc}
          />
        </div>
        <div className="loginSection">
          <label htmlFor="imageUrl" className="loginLabel">
            Image
          </label>
          <input
            defaultValue={userInfo.image}
            type="text"
            className="loginInput"
            ref={imageUrlInput}
            placeholder={userInfo.image}
          />
        </div>
        <button className="loginSubmit" onClick={update}>
          Update
        </button>
      </div>
      <Footer />
    </div>
  );
}
