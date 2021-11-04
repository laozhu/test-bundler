import { Button } from '../components';

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <h2>Forgot Password Page</h2>
      <p>We will send your a reset password link.</p>
      <form>
        <p>
          <input name="name" placeholder="Phone" />
        </p>
        <p>
          <Button href="/reset-password">Reset your password</Button>
        </p>
      </form>
    </>
  );
};

export default ForgotPasswordPage;
