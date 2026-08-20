import React, { useState } from 'react';
import '../style/form.scss';
import { Link } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>;
  }

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response= await handleLogin(username, password);
    alert(response.message)
    navigate('/');
  } catch (error) {
    alert(error);
  }

  e.target.reset();
};

  return (
    <main>
      <div onSubmit={handleSubmit} className="form-container">
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
