import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import PageA from './pages/A';
import PageB from './pages/B';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Redirect path="/" to="/page-a" exact />
        <Route path="/page-a" component={PageA} exact />
        <Route path="/page-b" component={PageB} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
