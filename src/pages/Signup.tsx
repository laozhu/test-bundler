import { Link } from 'react-router-dom';

import { Button } from '../components';

const SignupPage: React.FC = () => {
  return (
    <>
      <h2>Signup Page</h2>
      <form>
        <p>
          <input name="name" placeholder="Name" />
        </p>
        <p>
          <input name="username" placeholder="Username" />
        </p>
        <p>
          <input name="password" type="password" placeholder="Password" />
        </p>
        <p>
          <Button href="/login">Signup</Button>
        </p>
        <p>
          <Link to="/login">I have an account, login</Link>
        </p>
      </form>
    </>
  );
};

export default SignupPage;
