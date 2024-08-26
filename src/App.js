import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
// import Blog from "./components/Blog/Blog";
// import Contact from "./components/Contact/Contact";
import ForgotPassword from "./components/ForgetPassword/ForgotPassword";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

const App = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (credentials) => {
    console.log("Login details:", credentials);
    navigate("/dashboard");
  };

  const handleResetPassword = (email) => {
    console.log("Reset password for:", email);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword onResetPassword={handleResetPassword} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default App;
