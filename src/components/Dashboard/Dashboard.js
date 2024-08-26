import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Dashboard.css";
import ForgetPassword from "../ForgetPassword/ForgotPassword";
import Profile from "../Profile/Profile";
import { FaHome, FaUser, FaCog, FaKey, FaBars, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
        <button
          className="toggle-button "
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard/home">
                <FaHome />
                {isExpanded && <span className="text">Home</span>}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile">
                <FaUser />
                {isExpanded && <span className="text">Profile</span>}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings">
                <FaCog />
                {isExpanded && <span className="text">Settings</span>}
              </Link>
            </li>
            <li>
              <Link to="/forgot-password">
                <FaKey />
                {isExpanded && <span className="text">Forgot Password</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="dashboard-content">
        <Routes>
          <Route path="home" element={<div>Home Content</div>} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<div>Settings Content</div>} />
          <Route path="forgot-password" element={<ForgetPassword />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
