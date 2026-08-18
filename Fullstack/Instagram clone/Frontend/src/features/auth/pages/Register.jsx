import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/register',
        {
          username,
          email,
          password,
          bio,
        },
        {
          withCredentials: true,
        },
      );
      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
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
