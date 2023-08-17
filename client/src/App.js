import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info.js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Fail from "./pages/Fail";
import Confirmation from "./pages/Confirmation";
import Account from "./pages/Account";
import Nicetry from "./pages/Nicetry";
import Course from "./pages/Course";
import Lesson from "./pages/Lesson";
import Section from "./pages/Section";
import Unit from "./pages/Unit";
import React, { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}
