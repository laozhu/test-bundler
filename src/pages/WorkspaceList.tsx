import { Link } from 'react-router-dom';

const workspaces = ['easynm', 'chenfeng', 'yinhe'];

const WorkspaceListPage: React.FC = () => {
  return (
    <>
      <h2>Workspace List Page</h2>
      <ul>
        {workspaces.map((workspace) => (
          <li key={workspace}>
            <Link to={`/workspaces/${workspace}`}>{workspace}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkspaceListPage;
