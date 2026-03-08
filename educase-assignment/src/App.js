import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import AccountSettings from './components/AccountSettings';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <div className="mobile-frame">
            <div className="mobile-content">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<AccountSettings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;