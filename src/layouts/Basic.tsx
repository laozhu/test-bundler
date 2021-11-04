import './Basic.css';

import { Outlet } from 'react-router-dom';

import { GlobalFooter, GlobalHeader } from '../components';

const BasicLayout: React.FC = () => {
  return (
    <main className="main">
      <GlobalHeader />
      <div className="grow">
        <Outlet />
      </div>
      <GlobalFooter />
    </main>
  );
};

export default BasicLayout;
