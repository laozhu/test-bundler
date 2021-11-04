import { Link } from 'react-router-dom';

const applies = ['1111111111', '222222222', '33333333'];

const ApplyListPage: React.FC = () => {
  return (
    <>
      <h2>Apply List Page</h2>
      <ul>
        {applies.map((apply) => (
          <li key={apply}>
            <Link to={`/applies/${apply}`}>{apply}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ApplyListPage;
