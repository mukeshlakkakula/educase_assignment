import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome to PopX</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button
        className="button button-primary"
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>

      <button
        className="button button-secondary"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Welcome;
