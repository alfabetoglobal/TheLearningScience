import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Footer.css";

function Footer() {
  const [counter, setCounter] = useState(0);
  const isFirstRender = React.useRef(true);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const currentCount = localStorage.getItem("pageCount");
    if (currentCount) {
      const updatedCount = parseInt(currentCount, 10) + 1;
      setCounter(updatedCount);
      localStorage.setItem("pageCount", updatedCount);
    } else {
      setCounter(1);
      localStorage.setItem("pageCount", 1);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    try {
      const response = await axios.post(
        "https://3aq7mrmnog.execute-api.ap-northeast-1.amazonaws.com/v1/feedbackTLS",
        feedback
      );
      if (response.status === 201) {
        setMessage("Feedback submitted successfully!");
        setFeedback({
          name: "",
          email: "",
          description: "",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage("Feedback with this email already exists.");
      } else if (error.response && error.response.status === 400) {
        setMessage("Invalid input. Please fill in all fields.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <footer className="footer-1">
      <div className="row1 row">
        <div className="col-md-3">
          <h4 className="mt-5 fs-3 p-2">Important Links</h4>
          <ul style={{ textDecoration: "none" }}>
            <li className="mb-1">
              <a href="/link1">Programming Languages</a>
            </li>
            <li className="mb-1">
              <a href="/link2">Database Management System</a>
            </li>
            <li className="mb-1">
              <a href="/link3">Mern Stack Course</a>
            </li>
            <li className="mb-1">
              <a href="/link3">Foreign Language Courses</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4 className="mt-5 fs-3 p-2">Quick Links</h4>
          <ul>
            <li className="mb-1">
              <a href="/">Home</a>
            </li>
            <li className="mb-1">
              <a href="/Courses">Courses</a>
            </li>
            <li className="mb-1">
              <a href="/Blog">Blog</a>
            </li>
            <li className="mb-1">
              <a href="/Contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 p-5">
          <h4 className=" fs-3 p-2">Feedback and Suggestions</h4>
          <form
            className="border p-3 shadow"
            style={{
              backgroundColor: "#808de1",
              border: "solid #73799d",
              borderRadius: "10px",
            }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                value={feedback.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
                value={feedback.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description (500 words):</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Feedback"
                name="description"
                value={feedback.description}
                onChange={handleChange}
                maxLength="500"
                required
              ></textarea>
            </div>
            <br />
            <button type="submit" className="btn-sub">
              Submit
            </button>
          </form>
          {message && <p className="mt-3">{message}</p>}
        </div>
      </div>
      <div className="column-2">
        <div className="mt-2 text-center p-2" style={{ flexDirection: "row" }}>
          <p>
            © Copyright | The Learning Science - Admin | Designed & Managed by -
            Alfabeto Global
          </p>
          <div className="countt text-center" style={{ width: "150px" }}>
            <span>{counter.toString().padStart(7, "0")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
