import React from "react";
import "./App.css";

import Courses from "./components/Courses";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App">
      <Courses />
      <AboutSection />
    </div>
  );
}

export default App;
