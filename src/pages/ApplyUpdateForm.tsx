import { useParams } from 'react-router-dom';

import { Button } from '../components';

const ApplyUpdateFormPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Apply Update Form</h2>
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
          <input name="name" placeholder="Name" />
        </p>
        <p>
          <input name="phone" placeholder="Phone" />
        </p>
        <p>
          <Button href={id ? `/applies/${id}` : undefined}>Save</Button>
        </p>
      </form>
    </>
  );
};

export default ApplyUpdateFormPage;
