import { Outlet } from 'react-router-dom';

const ArticleLayout: React.FC = () => {
  return (
    <div>
      <p style={{ color: 'pink' }}>---- before article layout ----</p>
      <Outlet />
      <p style={{ color: 'pink' }}>---- after article layout ----</p>
    </div>
  );
};

export default ArticleLayout;
