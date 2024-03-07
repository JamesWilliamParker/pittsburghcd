import { Button, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function LogIn() {
  // TODO: Actually implement login functionality with limitations
  return (
    <div className="page">
      <h2>LOG IN</h2>
      <FormGroup className="login-form">
        <Input type="email" name="username" placeholder="Username" />
        <Input type="password" name="password" placeholder="Password" />
        <Link to="/blog-configuration">
          <Button className="service-button" color="primary" type="submit">
            Log In
          </Button>
        </Link>
      </FormGroup>
    </div>
  );
}
