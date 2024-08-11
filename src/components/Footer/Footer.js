import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [counter, setCounter] = useState(0);
  const isFirstRender = React.useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Get the current count from localStorage
    const currentCount = localStorage.getItem("pageCount");

    // If there's already a count stored, increment it by 1
    if (currentCount) {
      const updatedCount = parseInt(currentCount, 10) + 1;
      setCounter(updatedCount);
      localStorage.setItem("pageCount", updatedCount);
    } else {
      // If no count is found, initialize it to 1
      setCounter(1);
      localStorage.setItem("pageCount", 1);
    }
  }, []);

  return (
    <footer className="footer-1">
      <p>
        © Copyright | The Learning Science - Admin | Designed & Managed by -
        Alfabeto Global
      </p>
      <div className="countt">
        <span>{counter.toString().padStart(7, "0")}</span>
      </div>
    </footer>
  );
}

export default Footer;
