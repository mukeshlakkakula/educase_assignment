import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const FloatingField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div style={{ position: "relative", marginBottom: "22px" }}>
      <label
        style={{
          position: "absolute",
          top: "-9px",
          left: "12px",
          background: "#F7F8F9",
          padding: "0 4px",
          fontFamily: "Rubik, sans-serif",
          fontSize: "13px",
          color: "#6C25FF",
          zIndex: 1,
        }}
      >
        {label}
        {required && <span style={{ color: "#DD4A3D" }}> *</span>}
      </label>
      <input
        type={type}
        placeholder={focused ? "" : placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          height: "48px",
          background: "#FFFFFF",
          border: `1px solid ${focused ? "#6C25FF" : "#CBCBCB"}`,
          borderRadius: "6px",
          padding: "0 14px",
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
          color: "#1D2226",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: null,
  });

  const handleChange = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleAgencySelect = (value) => {
    setForm({ ...form, isAgency: value });
  };

  const isValid = form.fullName && form.phone && form.email && form.password && form.isAgency !== null;

  const handleSubmit = () => {
    if (!isValid) return;
    register(form);
    navigate("/account");
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        background: "#F7F8F9",
        padding: "24px 20px 32px",
      }}
    >
      <p
        onClick={() => navigate("/")}
        style={{
          fontFamily: "Rubik, sans-serif",
          fontSize: "18px",
          color: "#6C25FF",
          cursor: "pointer",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        ← Back
      </p>
      
      <h1
        style={{
          fontFamily: "Rubik, sans-serif",
          fontWeight: 500,
          fontSize: "28px",
          lineHeight: "36px",
          color: "#1D2226",
          marginBottom: "24px",
        }}
      >
        Create your
        <br />
        PopX account
      </h1>

      <FloatingField
        label="Full Name"
        placeholder="Enter Full Name"
        value={form.fullName}
        onChange={handleChange("fullName")}
        required
      />
      
      <FloatingField
        label="Phone number"
        type="tel"
        placeholder="Enter Phone Number"
        value={form.phone}
        onChange={handleChange("phone")}
        required
      />
      
      <FloatingField
        label="Email address"
        type="email"
        placeholder="Enter your Email"
        value={form.email}
        onChange={handleChange("email")}
        required
      />
      
      <FloatingField
        label="Password"
        type="password"
        placeholder="Enter Password"
        value={form.password}
        onChange={handleChange("password")}
        required
      />
      
      <FloatingField
        label="Company name"
        placeholder="Enter Company Name"
        value={form.company}
        onChange={handleChange("company")}
      />

      <div style={{ marginBottom: "28px" }}>
        <p
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
            color: "#1D2226",
            marginBottom: "10px",
          }}
        >
          Are you an Agency?<span style={{ color: "#DD4A3D" }}> *</span>
        </p>
        
        <div style={{ display: "flex", gap: "28px" }}>
          <label
            onClick={() => handleAgencySelect(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
              color: "#1D2226",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                border: `2px solid ${form.isAgency === true ? "#6C25FF" : "#CBCBCB"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {form.isAgency === true && (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#6C25FF",
                  }}
                />
              )}
            </div>
            Yes
          </label>
          
          <label
            onClick={() => handleAgencySelect(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontFamily: "Rubik, sans-serif",
              fontSize: "14px",
              color: "#1D2226",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                border: `2px solid ${form.isAgency === false ? "#6C25FF" : "#CBCBCB"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {form.isAgency === false && (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#6C25FF",
                  }}
                />
              )}
            </div>
            No
          </label>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!isValid}
        style={{
          width: "100%",
          height: "46px",
          background: isValid ? "#6C25FF" : "#CBCBCB",
          borderRadius: "6px",
          border: "none",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          color: "#FFFFFF",
          cursor: isValid ? "pointer" : "not-allowed",
          marginTop: "8px",
        }}
      >
        Create Account
      </button>

      <p
        style={{
          fontFamily: "Rubik, sans-serif",
          fontSize: "14px",
          color: "#919191",
          textAlign: "center",
          marginTop: "18px",
        }}
      >
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{ color: "#6C25FF", fontWeight: 500, cursor: "pointer" }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;