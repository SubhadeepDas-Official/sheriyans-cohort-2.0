import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  return (
    <main>
      <div className="form-container">
        <h1>Register User</h1>
        <form>
          <input type="text" name="username" placeholder="Enter Username" />
          <input type="text" name="email" placeholder="Enter email" />
          <input type="text" name="password" placeholder="Enter password" />
          <input type="text" name="bio" placeholder="Enter user bio" />
          <button type="submit">Submit</button>
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
