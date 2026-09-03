import { useState } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';

import '../style/form.scss';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const { handleRegister, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handleRegister(username, email, password, bio);
      alert(response);
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
    e.target.reset();
  };

  return (
    <main className='auth-page'>
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
