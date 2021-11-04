import './GlobalHeader.css';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export interface GlobalHeaderProps {}

const menu = [
  '',
  'applies',
  'workspaces',
  '|',
  'login',
  'signup',
  'account',
  '|',
  'terms',
  'privacy',
  'faq',
];

export const GlobalHeader: React.FC<GlobalHeaderProps> = () => {
  return (
    <header className="header">
      <h1>App Name</h1>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item || 'home'}>
              {item === '|' ? (
                <span className="divider">|</span>
              ) : (
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) => clsx('navlink', { active: isActive })}
                >
                  {item || 'home'}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
