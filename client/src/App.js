import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import DashboardNavbar from "./components/DashboardNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const Home = React.lazy(() => import("./pages/Home"));
const Info = React.lazy(() => import("./pages/Info"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Fail = React.lazy(() => import("./pages/Fail"));
const Confirmation = React.lazy(() => import("./pages/Confirmation"));
const Account = React.lazy(() => import("./pages/Account"));
const Nicetry = React.lazy(() => import("./pages/Nicetry"));
const Course = React.lazy(() => import("./pages/Course"));
const Lesson = React.lazy(() => import("./pages/Lesson"));
const Section = React.lazy(() => import("./pages/Section"));
const Unit = React.lazy(() => import("./pages/Unit"));

export default function App() {
  const [message, setMessage] = useState("");
  const loggedOut = (
    <>
      <DashboardNavbar
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
      <FontAwesomeIcon className="spinner" icon={faSpinner} spin />
    </>
  );

  const loggedIn = (
    <>
      <Navbar
        one={{
          function: () => {
            window.location = "/login";
          },
          text: "Login",
        }}
        two={{
          function: () => {
            window.location = "/signUp";
          },
          text: "Sign Up",
        }}
      />
      <FontAwesomeIcon className="spinner" icon={faSpinner} spin />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={loggedOut}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={loggedOut}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/info"
          element={
            <Suspense fallback={loggedOut}>
              <Info />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={loggedOut}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signUp"
          element={
            <Suspense fallback={loggedOut}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={loggedIn}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/account"
          element={
            <Suspense fallback={loggedIn}>
              <Account />
            </Suspense>
          }
        />
        <Route
          path="/fail"
          element={
            <Suspense fallback={loggedOut}>
              <Fail />
            </Suspense>
          }
        />
        <Route
          path="/confirmation"
          element={
            <Suspense fallback={loggedOut}>
              <Confirmation />
            </Suspense>
          }
        />
        <Route
          path="/nicetry"
          element={
            <Suspense fallback={loggedOut}>
              <Nicetry />
            </Suspense>
          }
        />
        <Route
          path="/course/:courseName"
          element={
            <Suspense fallback={loggedIn}>
              <Course />
            </Suspense>
          }
        />
        <Route
          path="/lesson/:courseName/:sectionName/:unitName/:lessonName"
          element={
            <Suspense fallback={loggedIn}>
              <Lesson />
            </Suspense>
          }
        />
        <Route
          path="/section/:courseName/:sectionName/"
          element={
            <Suspense fallback={loggedIn}>
              <Section />
            </Suspense>
          }
        />
        <Route
          path="/unit/:courseName/:sectionName/:unitName"
          element={
            <Suspense fallback={loggedIn}>
              <Unit />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={loggedOut}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
