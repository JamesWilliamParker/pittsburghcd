import { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import axios from 'axios';

export default function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      const token = response.data.token;
      // Store the token in localStorage or sessionStorage
      localStorage.setItem('token', token);
      window.location.href = '/blog-configuration';
    } catch (err) {
      console.error(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="page-container">
      <div className="page">
        <div className="spacer"></div>
        <h2>LOG IN</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup className="login-form">
            <Input type="email" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <Input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Button className="service-button" color="primary" type="submit">
              Log In
            </Button>
          </FormGroup>
        </form>
        <p>{`Don't have an account? Ask your administrator to Create one for you.`}</p>
      </div>
    </div>
  );
}
