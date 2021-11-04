import { useParams } from 'react-router-dom';

import { Button } from '../components';

const ReportDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Report Detail Page</h2>
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
        <Button href={id ? `/applies/${id}/report` : undefined}>Edit Report</Button>
      </p>
    </>
  );
};

export default ReportDetailPage;
