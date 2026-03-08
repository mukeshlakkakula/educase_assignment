// components/Account.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="account-container">
      <button className="back-button" onClick={() => navigate('/')}>←</button>
      
      <div className="account-header">
        <h1>Account Settings</h1>
      </div>

      <div className="profile-card">
        <div className="avatar">
          {user.name.charAt(0)}
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <p className="bio">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, 
            Sed Diam Nonummy Eirmod Tempor Invidunt Ut Labore Et Dolore 
            Magna Aliquyam Erat. Sed Diam
          </p>
        </div>
      </div>

      {user.company && (
        <div className="company-info">
          <p><strong>Company:</strong> {user.company}</p>
          <p><strong>Agency:</strong> {user.isAgency ? 'Yes' : 'No'}</p>
        </div>
      )}

      <button 
        className="button button-secondary logout-btn"
        onClick={() => {
          localStorage.removeItem('user');
          navigate('/');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Account;