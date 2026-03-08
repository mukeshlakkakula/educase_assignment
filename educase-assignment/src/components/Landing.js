import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#F7F8F9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 20px 75px 20px",
      }}
    >
      <h1
        style={{
          fontFamily: "Rubik, sans-serif",
          fontWeight: 500,
          fontSize: "28px",
          lineHeight: "36px",
          color: "#1D2226",
          marginBottom: "8px",
        }}
      >
        Welcome to PopX
      </h1>

      <p
        style={{
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "26px",
          color: "#1D2226",
          opacity: 0.6,
          marginBottom: "36px",
        }}
      >
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <button
        onClick={() => navigate("/signup")}
        style={{
          width: "100%",
          height: "46px",
          background: "#6C25FF",
          borderRadius: "6px",
          border: "none",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          color: "#FFFFFF",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        style={{
          width: "100%",
          height: "46px",
          background: "#6C25FF4B", // 29% opacity equivalent
          borderRadius: "6px",
          border: "none",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          color: "#1D2226",
          cursor: "pointer",
        }}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Landing;