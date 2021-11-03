import logo from '../assets/logo.svg';
import { Button } from '../components';

const PageA: React.FC = () => {
  return (
    <main>
      <h2>This is Page A</h2>
      <Button href="/page-b">Page B</Button>
      <img src={logo} alt="LOGO" width={128} height={128} />
    </main>
  );
};

export default PageA;
