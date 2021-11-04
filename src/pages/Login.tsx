import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from '../components';
import { saveToken } from '../utilities';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleLogin = () => {
    const redirect = searchParams.get('redirect') ?? '/';

    saveToken('your_token_here');
    navigate(redirect, { replace: true });
  };

  return (
    <>
      <h2>Login Page</h2>
      <form>
        <p>
          <input name="username" placeholder="Username" />
        </p>
        <p>
          <input name="password" type="password" placeholder="Password" />
        </p>
        <p>
          <Button onClick={handleLogin}>Login</Button>
        </p>
        <p>
          <Link to="/signup">I dont have an account, signup</Link>
        </p>
      </form>
    </>
  );
};

export default LoginPage;
