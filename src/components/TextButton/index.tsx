import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx'

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'light' | 'dark' | 'primary' | 'gray';
  shadow?: boolean;
}

function TextButton({size = 'md', title, color, shadow, ...props}: TextButtonProps) {
  return(
    <button 
      className={clsx('hover:underline',
        {
          'text-body-xs': size === 'xs',
          'text-body-sm': size === 'sm',
          'text-body-md': size === 'md',
          'text-body-lg': size === 'lg',
          'text-body-xl': size === 'xl',
          'drop-shadow-default': shadow,
          'text-dark-100':color === 'dark',
          'text-light-100': color === 'light',
          'text-primary-200': !color || color === 'primary',
          'text-light-300': color === 'gray',
        }
  )} {...props}>
      {title}
    </button>
  )
}
export default TextButton;