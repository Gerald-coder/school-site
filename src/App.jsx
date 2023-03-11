import { useState } from "react";
import "./App.css";
import Header from "./Components/COmmon/Heading/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CourseHome from "./Components/allCourses/CourseHome";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseHome />} />
      </Routes>
    </>
  );
}

export default App;
