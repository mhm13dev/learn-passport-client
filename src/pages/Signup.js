import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function signup() {
    setError(null);
    setUser(null);
    try {
      const res = await axios.post(
        `https://${process.env.REACT_APP_API_HOST}/api/users`,
        {
          username,
          password,
          confirmPassword,
        }
      );
      setUser(res.data.user);
    } catch (error) {
      if (error.message) {
        setError(error);
      } else {
        setError(error.response.data);
      }
    }
  }

  return (
    <>
      <h1>Signup</h1>
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
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="button" value="Signup" onClick={signup} />
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

export default Signup;
