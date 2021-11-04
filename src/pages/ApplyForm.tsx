import { useParams } from 'react-router-dom';

import { Button } from '../components';

const ApplyFormPage: React.FC = () => {
  const { identifier } = useParams();

  return (
    <>
      <h2>Apply Form Page</h2>
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
      <form>
        <p>
          <input name="name" placeholder="Name" />
        </p>
        <p>
          <input name="phone" placeholder="Phone" />
        </p>
        <p>
          <Button href={identifier ? `/workspaces/${identifier}` : undefined}>Cancel</Button>
          <Button href="/applies/11111">Submit</Button>
        </p>
      </form>
    </>
  );
};

export default ApplyFormPage;
