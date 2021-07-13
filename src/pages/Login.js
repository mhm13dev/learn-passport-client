import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function login() {
    setError(null);
    setUser(null);
    try {
      const res = await axios.post(
        `https://${process.env.REACT_APP_API_HOST}/api/auth/login`,
        {
          username,
          password,
        }
      );
      setUser(res.data.user);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="button" value="Login" onClick={login} />
        </div>
        {error !== null ? <p>{JSON.stringify(error)}</p> : null}
      </form>

      {user !== null ? (
        <div>
          <div>User:</div>
          <p>{JSON.stringify(user)}</p>
        </div>
      ) : null}
    </>
  );
};

export default Login;
