import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ username, password });

    setUsername('');
    setPassword('');
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
