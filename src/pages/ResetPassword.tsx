import { Button } from '../components';

const ResetPasswordPage: React.FC = () => {
  return (
    <>
      <h2>Reset Password Page</h2>
      <form>
        <p>
          <input name="name" placeholder="Name" />
        </p>
        <p>
          <input name="phone" placeholder="Phone" />
        </p>
        <p>
          <Button href="/login">Submit</Button>
        </p>
      </form>
    </>
  );
};

export default ResetPasswordPage;
