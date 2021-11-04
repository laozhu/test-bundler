import { Outlet } from 'react-router-dom';

const ReportLayout: React.FC = () => {
  return (
    <div>
      <p style={{ color: 'green' }}>---- before report layout ----</p>
      <Outlet />
      <p style={{ color: 'green' }}>---- after report layout ----</p>
    </div>
  );
};

export default ReportLayout;
