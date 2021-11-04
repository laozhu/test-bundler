import { useLocation, useParams } from 'react-router-dom';

import { Button } from '../components';

const ApplyDetailPage: React.FC = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <>
      <h2>Apply Detail Page</h2>
      <p
        style={{
          display: 'inline-block',
          color: 'white',
          backgroundColor: 'green',
          padding: 8,
        }}
      >
        {id}
      </p>
      <p>
        <Button href={`${pathname}/assign`}>Assign Apply</Button>
        <Button href={`${pathname}/report`}>Create Report</Button>
        <Button href={`${pathname}/update`}>Update Apply</Button>
      </p>
    </>
  );
};

export default ApplyDetailPage;
