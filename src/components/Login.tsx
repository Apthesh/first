import React, { useState } from 'react';
import { Monitor } from 'lucide-react';
import '../styles/auth.css';

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate here
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <Monitor />
      </div>
      <div className="auth-box">
        <h1 className="auth-title">Sign In</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
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
            Sign In
          </button>
        </form>
        <div className="auth-switch">
          New to Netflix?
          <a href="#signup">Sign up now</a>
        </div>
      </div>
    </div>
  );
};

export default Login;