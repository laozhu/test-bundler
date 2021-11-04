import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AccountLayout: React.FC = () => {
  const { pathname, state } = useLocation();

  if (pathname === '/account') {
    return <Navigate to="/account/profile" replace state={state} />;
  }

  return (
    <div>
      <p style={{ color: 'red' }}>---- before account layout ----</p>
      <Outlet />
      <p style={{ color: 'red' }}>---- after account layout ----</p>
    </div>
  );
};

export default AccountLayout;
