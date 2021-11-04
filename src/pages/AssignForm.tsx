import { useParams } from 'react-router-dom';

import { Button } from '../components';

const AssignFormPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Assign Apply Form</h2>
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
          <input name="doctor" placeholder="Doctor" />
        </p>
        <p>
          <input name="reviewDoctor" placeholder="Review Doctor" />
        </p>
        <p>
          <Button href={id ? `/applies/${id}` : undefined}>Assign</Button>
        </p>
      </form>
    </>
  );
};

export default AssignFormPage;
