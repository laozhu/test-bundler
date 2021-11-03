import { Button } from '../components';

const PageB: React.FC = () => {
  return (
    <main>
      <h2>This is Page B</h2>
      <Button href="/page-a">Page A</Button>
    </main>
  );
};

export default PageB;
