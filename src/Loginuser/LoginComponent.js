import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from './actions';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const { isLoading, user, error } = useSelector((state) => state);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(credentials));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {user && <div>Welcome, {user[0].title}!</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default LoginComponent;
