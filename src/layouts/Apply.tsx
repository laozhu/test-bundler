import { Outlet } from 'react-router-dom';

const ApplyLayout: React.FC = () => {
  return (
    <div>
      <p style={{ color: 'blue' }}>---- before apply layout ----</p>
      <Outlet />
      <p style={{ color: 'blue' }}>---- after apply layout ----</p>
    </div>
  );
};

export default ApplyLayout;
