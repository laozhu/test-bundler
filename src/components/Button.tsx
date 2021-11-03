import './Button.css';

import clsx from 'clsx';
import React from 'react';
import { useHistory } from 'react-router-dom';

export interface ButtonProps {
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const defaultProps = {
  disabled: false,
};

type DefaultProps = typeof defaultProps;
type PropsWithDefault = ButtonProps & DefaultProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const { href, onClick, disabled, className, children } = props as PropsWithDefault;
  const history = useHistory();

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) {
      return;
    }

    if (typeof onClick === 'function') {
      onClick(event);
      return;
    }

    if (href && href.startsWith('/')) {
      history.push(href);
    }
  };

  return (
    <button disabled={disabled} onClick={handleClick} className={clsx('button', className)}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
