import './GlobalHeader.css';

import { NavLink } from 'react-router-dom';

export interface GlobalHeaderProps {}

const menu = ['', 'login', 'signup', 'account', 'workspaces', 'terms', 'privacy', 'faq'];

export const GlobalHeader: React.FC<GlobalHeaderProps> = () => {
  return (
    <header className="header">
      <h1>App Name</h1>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item || 'home'}>
              <NavLink to={`/${item}`}>{item || 'home'}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
