import React from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
  children: React.ReactNode;
  asChildren?: boolean;

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'light' | 'dark' | 'primary';
  shadow?: boolean;
}

function Heading({size = 'md', children, asChildren, color, shadow}: HeadingProps) {
  const Component = asChildren ? Slot : 'h2'

  return(
    <Component 
      className={clsx('bg-transparent',
        {
          'text-heading-xs': size === 'xs',
          'text-heading-sm': size === 'sm',
          'text-heading-md': size === 'md',
          'text-heading-lg': size === 'lg',
          'text-heading-xl': size === 'xl',
          'drop-shadow-default': shadow,
          'text-dark-100': color === 'dark',
          'text-light-100': color === 'light',
          'text-primary-200': color === 'primary',
        }
    )}>

      {children}
    </Component>
  )
}
export default Heading;