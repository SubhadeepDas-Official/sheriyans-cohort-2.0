import React from 'react';
import '../style/form.scss';
import { Link } from 'react-router';

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <div className="form">
          <form>
            <input type="text" name="username" placeholder="Enter username" />
            <input type="text" name="password" placeholder="Enter password" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="toggleAuthForm">
          <h2>Or</h2>
          <p>Don't have an account? <Link to='/register'>Create account</Link></p>
        </div>
      </div>
    </main>
  );
};

export default Login;
