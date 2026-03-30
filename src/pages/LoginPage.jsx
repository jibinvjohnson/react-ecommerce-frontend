import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './LoginPage.css';

const LoginPage = ({ isRegister = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 800);
  };

  return (
    <div className="container auth-page">
      <div className="auth-card">
        <h1 className="auth-title">{isRegister ? 'Create an Account' : 'Welcome Back'}</h1>
        <p className="auth-subtitle">
          {isRegister 
            ? 'Sign up to start shopping premium products' 
            : 'Enter your details to access your account'}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={isRegister}
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder="you@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="••••••••"
              minLength={6}
            />
          </div>

          <Button 
            variant="primary" 
            size="lg" 
            fullWidth 
            type="submit" 
            disabled={isLoading}
            className="auth-submit-btn"
          >
            {isLoading ? 'Processing...' : (isRegister ? 'Sign Up' : 'Sign In')}
          </Button>
        </form>

        <div className="auth-footer">
          {isRegister ? (
            <p>Already have an account? <Link to="/login" className="auth-link">Sign In</Link></p>
          ) : (
            <p>Don't have an account? <Link to="/register" className="auth-link">Create one</Link></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
