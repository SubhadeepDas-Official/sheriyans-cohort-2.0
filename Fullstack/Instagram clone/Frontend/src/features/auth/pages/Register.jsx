import React from 'react';
import { Link } from 'react-router';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const { handleRegister } = useAuth();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleRegister(username, email, password, bio)
    .then((res) => {
      alert(res.data.message);
    });
    e.target.reset();
  };

  return (
    <main>
      <div className="form-container">
        <h1>Register User</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter Username"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            placeholder="Enter email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            name="password"
            placeholder="Enter password"
          />
          <input
            onChange={(e) => {
              setBio(e.target.value);
            }}
            type="text"
            name="bio"
            placeholder="Enter user bio"
          />
          <button type="submit">Register</button>
        </form>
        <div className="toggleAuthForm">
          <h2>Or</h2>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
