import { Navigate, useLocation } from 'react-router-dom';

import ForbiddenPage from './403';

interface HomePageProps {
  role?: 'PHYSICIAN' | 'SERVICE_CUSTOMER';
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { role } = props;
  const { state } = useLocation();

  switch (role) {
    case 'PHYSICIAN': {
      return <Navigate to="/applies" replace state={state} />;
    }

    case 'SERVICE_CUSTOMER': {
      return <Navigate to="/workspaces" replace state={state} />;
    }

    default: {
      return <ForbiddenPage />;
    }
  }
};

export default HomePage;
