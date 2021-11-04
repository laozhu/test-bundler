import { useLocation, useParams } from 'react-router';

import { Button } from '../components';

const WorkspaceDetailPage: React.FC = () => {
  const { identifier } = useParams();
  const { pathname } = useLocation();

  return (
    <>
      <h2>Workspace Detail Page</h2>
      <p
        style={{
          display: 'inline-block',
          color: 'white',
          backgroundColor: 'green',
          padding: 8,
        }}
      >
        {identifier}
      </p>
      <p>
        <Button href="/workspaces">Apply List</Button>
        <Button href={`${pathname}/apply`}>Create Apply</Button>
      </p>
    </>
  );
};

export default WorkspaceDetailPage;
