import React, { useState } from 'react';
import { Monitor } from 'lucide-react';
import '../styles/auth.css';

const Signup = ({ onSignup }: { onSignup: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and create account here
    if (email && password && name) {
      onSignup();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <Monitor />
      </div>
      <div className="auth-box">
        <h1 className="auth-title">Sign Up</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="auth-input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <div className="auth-switch">
          Already have an account?
          <a href="#login">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;