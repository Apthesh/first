import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Netflix from './components/Netflix';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <Netflix onLogout={handleLogout} />;
  }

  return showSignup ? (
    <Signup onSignup={handleSignup} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export default App;