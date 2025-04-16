import { useState } from 'react';

function App() {
  const [secret, setSecret] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/admin/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ secret }),
    });

    const data = await response.json();
    console.log(data);
    localStorage.setItem('adminToken', data.token);
  };

  return (
    <div>
      <input
        type="text"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        placeholder="Enter secret"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
