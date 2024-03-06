import { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WithAuth from '../components/WithAuth';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== verifyPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/register', { username, password });
      const token = response.data.token;
      if (token) {
        window.location.href = '/login';
      } else {
        throw new Error('No Token received form server!');
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="page">
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup className="register-form">
          <Input type="email" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <Input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <Input type={showPassword ? 'text' : 'password'} name="verifyPassword" placeholder="Verify Password" value={verifyPassword} onChange={e => setVerifyPassword(e.target.value)} />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <Button className="service-button" color="primary" type="submit">
            Register
          </Button>
        </FormGroup>
      </form>
      <div>
        <input type="checkbox" id="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
        <label htmlFor="showPassword">Show Password</label>
      </div>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

const RegisterWithAuth = WithAuth(Register);

export default RegisterWithAuth;
