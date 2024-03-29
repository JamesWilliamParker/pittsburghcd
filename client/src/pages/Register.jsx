import { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WithAuth from '../components/WithAuth';
import AdminNav from '../components/AdminNav';

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
      const token = localStorage.getItem('token');

      const response = await axios.post(
        '/api/register',
        { username, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newToken = response.data.token;

      if (newToken) {
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
      <AdminNav />
      <h2>REGISTER</h2>
      <div className="spacer"></div>
      <form onSubmit={handleSubmit}>
        <FormGroup className="register-form">
          <Input type="email" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <div className="spacer"></div>
          <Input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <div className="spacer"></div>
          <Input type={showPassword ? 'text' : 'password'} name="verifyPassword" placeholder="Verify Password" value={verifyPassword} onChange={e => setVerifyPassword(e.target.value)} />
          <div className="spacer"></div>
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
