import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/decorationImages/logo.png";
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

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="loading">
            <img src={logo} />
            <h1>Loading assets...</h1>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/nicetry" element={<Nicetry />} />
          <Route path="/course/:courseName" element={<Course />} />
          <Route
            path="/lesson/:courseName/:sectionName/:unitName/:lessonName"
            element={<Lesson />}
          />
          <Route
            path="/section/:courseName/:sectionName/"
            element={<Section />}
          />
          <Route
            path="/unit/:courseName/:sectionName/:unitName"
            element={<Unit />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
