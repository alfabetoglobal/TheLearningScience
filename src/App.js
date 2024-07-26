import React from "react";
import "./App.css";

import Sec1 from "./components/Sec1";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import AboutUs from "./components/AboutUs";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CourseGrid from "./components/CourseGrid";

function App() {
  return (
    <div className="App">
      <Sec1 />
      <Sec2 />
      <Sec3/>
      <CourseGrid/>
      <AboutUs />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
