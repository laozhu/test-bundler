import { Outlet } from 'react-router-dom';

const WorkspaceLayout: React.FC = () => {
  return (
    <div>
      <p style={{ color: 'orange' }}>---- before workspace layout ----</p>
      <Outlet />
      <p style={{ color: 'orange' }}>---- after workspace layout ----</p>
    </div>
  );
};

export default WorkspaceLayout;
