import React, { useState } from 'react';
import '../style/form.scss';
import { Link } from 'react-router';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          username,
          password,
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
      <div onSubmit={handleLogin} className="form-container">
        <h1>Login</h1>
        <div className="form">
          <form>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              placeholder="Enter username"
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              name="password"
              placeholder="Enter password"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="toggleAuthForm">
          <h2>Or</h2>
          <p>
            Don't have an account? <Link to="/register">Create account</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
