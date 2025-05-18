import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Hosted on{" "}
        <a
          href="https://github.com/vish-krishna/graph-algo-visualizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , Developed by KKK (
        <a
          href="https://www.linkedin.com/in/karanipec22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karan Kohli
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/vish-krishna/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Krishna Kumar
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/kush-gupta-in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kush Gupta
        </a>
        )
      </p>
    </div>
  );
}
