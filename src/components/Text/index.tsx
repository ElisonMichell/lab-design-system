import React from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
  children?: React.ReactNode;
  asChildren?: boolean;

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'light' | 'dark' | 'primary' | 'gray';
  darkMode?: boolean;
  shadow?: boolean;
}

function Text({size = 'md', color = 'dark', children, asChildren, shadow, darkMode}: TextProps) {
  const Component = asChildren ? Slot : 'span'

  return(
    <Component 
      className={clsx('text-body-xs',
        {
          'sm:text-heading-sm': size === 'sm',
          'sm:text-body-sm md:text-body-md': size === 'md',
          'sm:text-body-md md:text-body-lg': size === 'lg',
          'sm:text-body-md md:text-body-lg lg:text-body-xl': size === 'xl',
          'drop-shadow-default': shadow,
          'text-dark-100': color === 'dark',
          'text-light-100': color === 'light',
          'text-primary-200': color === 'primary',
          'text-light-300': color === 'gray',
          'transition-colors duration-300 ease-in-out': darkMode,
          'dark:text-light-100': darkMode && color === 'dark',
          'dark:text-dark-100': darkMode && color === 'light',
        }
  )}>
      {children}
    </Component>
  )
}
export default Text;