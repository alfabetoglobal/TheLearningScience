import React, { useState } from "react";
import "./forgotPassword.css";

const ForgotPassword = ({ onResetPassword }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      onResetPassword(email);
      setMessage("If your email is registered, you will receive a reset link.");
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-password-container">
        <div className="forgot-password-form">
          <h2>Reset Password</h2>
          {error && <div className="forgot-password-error">{error}</div>}
          {message && <div className="forgot-password-message">{message}</div>}
          <form onSubmit={handleResetPassword}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <button type="submit">Send Reset Link</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
