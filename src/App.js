import React from "react";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home"; // Ensure you have a Home component
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
=======
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
>>>>>>> 2b4fa4130b34c78ce29c43c292c05c310a97a74d

export default App;
