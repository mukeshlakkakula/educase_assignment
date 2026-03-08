import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const CameraIcon = () => (
  <svg width="14" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AccountSettings = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };


  const getInitialsAvatar = () => {
    if (currentUser?.fullName) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.fullName)}&background=6C25FF&color=fff&size=128`;
    }
    return "https://ui-avatars.com/api/?name=Marry+Doe&background=6C25FF&color=fff&size=128";
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        background: "#F7F8F9",
        display: "flex",
        flexDirection: "column",
      }}
    >
    
      <div
        style={{
          width: "100%",
          padding: "24px 20px 18px",
          background: "#FFFFFF",
          borderBottom: "1px solid #EFEFEF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            fontSize: "18px",
            color: "#1D2226",
          }}
        >
          Account Settings
        </p>
        <button
          onClick={handleLogout}
          style={{
            fontFamily: "Rubik, sans-serif",
            fontSize: "14px",
            color: "#DD4A3D",
            fontWeight: 500,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 8px",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "24px 20px",
          background: "#FFFFFF",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
       
        <div
          style={{
            position: "relative",
            width: "72px",
            height: "72px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#6C25FF",
            }}
          >
            <img
              src={getInitialsAvatar()}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "0px",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "#6C25FF",
              border: "2px solid #FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <CameraIcon />
          </div>
        </div>

    
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <p
            style={{
              fontFamily: "Rubik, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              color: "#1D2226",
            }}
          >
            {currentUser?.fullName || "Marry Doe"}
          </p>
          <p
            style={{
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#1D2226",
              opacity: 0.6,
            }}
          >
            {currentUser?.email || "Marry@Gmail.Com"}
          </p>
        </div>
      </div>

   
      <div
        style={{
          padding: "20px",
          background: "#FFFFFF",
        }}
      >
        <p
          style={{
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "#1D2226",
          }}
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;