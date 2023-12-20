import React from 'react';
import classes from "./style.components/UIButton.module.scss"

interface IUIButton {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
}

const UIButton = ({ type, children, onClick }: IUIButton) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={
        type === 'string'
          ? classes['UIButton'] + ' ' + classes['string']
          : type === 'number'
          ? classes['UIButton'] + ' ' + classes['number']
          : type ==='active'
          ? classes['UIButton'] + ' ' + classes['active']
          : classes['UIButton'] + ' ' + classes['radio']
      }
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default UIButton;