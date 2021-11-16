import React from 'react';

interface IButton {
  children: React.ReactNode;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
}

const Button = ({ children, handleClick }: IButton) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
