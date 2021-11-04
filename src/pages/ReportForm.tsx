import { useParams } from 'react-router-dom';

import { Button } from '../components';

const ReportFormPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Report Form Page</h2>
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
      <form>
        <p>
          <input name="title" placeholder="Title" />
        </p>
        <p>
          <textarea name="content" placeholder="Content" />
        </p>
        <p>
          <Button href="/reports/228933">Create Report</Button>
        </p>
      </form>
    </>
  );
};

export default ReportFormPage;
