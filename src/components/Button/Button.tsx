import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <button type="button" className={cls.button} {...otherProps}>
      {children}
    </button>
  );
};
