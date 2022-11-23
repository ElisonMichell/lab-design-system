import React from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
  children?: React.ReactNode;
  asChildren?: boolean;

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'light' | 'dark' | 'primary' | 'gray';
  shadow?: boolean;
  darkMode?: boolean;
}

function Heading({size = 'md', color = 'dark', children, asChildren, shadow, darkMode}: HeadingProps) {
  const Component = asChildren ? Slot : 'h2'

  return(
    <Component 
      className={clsx('bg-transparent text-heading-xs',
        {
          'sm:text-heading-sm': size === 'sm',
          'sm:text-heading-sm md:text-heading-md': size === 'md',
          'sm:text-heading-md md:text-heading-lg': size === 'lg',
          'sm:text-heading-md md:text-heading-lg lg:text-heading-xl': size === 'xl',
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
export default Heading;