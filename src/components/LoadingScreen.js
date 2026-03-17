import React from "react";
import "./LoadingScreen.css";
import logo from "../assets/images/logo1.webp"; // Adjust path if needed

const LoadingScreen = ({ text = "Loading, please wait..." }) => (
  <div className="loader-center">
    <div className="loader-stack">
      <div className="loadingio-spinner-eclipse">
        <div className="ldio-eclipse">
          <div></div>
          <img src={logo} alt="Logo" className="loader-logo" />
        </div>
      </div>
      <p className="loader-text">{text}</p>
    </div>
  </div>
);

export default LoadingScreen;
