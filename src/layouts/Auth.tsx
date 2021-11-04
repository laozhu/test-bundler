import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div>
      <p style={{ color: 'purple' }}>---- before auth layout ----</p>
      <Outlet />
      <p style={{ color: 'purple' }}>---- after auth layout ----</p>
    </div>
  );
};

export default AuthLayout;
