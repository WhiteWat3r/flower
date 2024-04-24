import classNames from 'classnames';
import React from 'react';

interface IButtonProps {
  type: 'primary' | 'secondary' | 'modal';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonStyles = {
  primary: 'bg-yellow-eats',
  secondary: 'bg-[#F0F0F0]',
  modal: '!rounded-[5px] bg-secondary-button text-text-button mt-[15px]'
};

const Button = ({ children, type, onClick }: IButtonProps) => {
  return (
    <button
      className={classNames('py-[11px] rounded-[15px] w-full font-semibold', buttonStyles[type])}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
