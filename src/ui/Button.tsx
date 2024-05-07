import classNames from 'classnames';
import React from 'react';
import { useSound } from '../hooks/useSound';
import clickSound from '../assets/music/zvuki_tamagochi_5Ie.mp3';


interface IButtonProps {
  type: 'seed' | 'nav' | 'gameAction';
  children: React.ReactNode;
  onClick?: () => void;
  img?: string;
  disabled?: boolean;
}

const buttonStyles = {
  seed: 'px-[35px] text-red-custom  border-2 border-red-custom bg-custom-white justify-between',
  nav: 'bg-button-bg  border-2 border-red-custom justify-center text-white',
  gameAction: 'bg-custom-white border-2 border-red-custom justify-between px-[6px] disabled:bg-pressed-color disabled:text-opacity-50 !h-[48px]' ,
};

const Button = ({ children, type, onClick, img, disabled}: IButtonProps) => {

  const [playClickSound] = useSound(clickSound);

  const handleClick = () => {
    playClickSound();
    onClick && onClick();
  };

  return (
    <button
      className={classNames('w-full h-full flex items-center shadow-default text-red-custom', buttonStyles[type])}
      onClick={handleClick} disabled={disabled}>
      {children}

      {img && <img src={img} alt={''} className="w-[90px]" />}
    </button>
  );
};

export default Button;
