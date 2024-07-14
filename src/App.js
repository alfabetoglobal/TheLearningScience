import React from "react";
import "./App.css";

import Courses from "./components/Courses";
import AboutUs from "./components/AboutUs";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Courses />
      <AboutUs />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
