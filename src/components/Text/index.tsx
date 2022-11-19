import React from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
  children: React.ReactNode;
  asChildren?: boolean;

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'light' | 'dark' | 'primary';
  shadow?: boolean;
}

function Text({size = 'md', children, asChildren, color, shadow}: TextProps) {
  const Component = asChildren ? Slot : 'span'

  return(
    <Component 
      className={clsx(
        {
          'text-body-xs': size === 'xs',
          'text-body-sm': size === 'sm',
          'text-body-md': size === 'md',
          'text-body-lg': size === 'lg',
          'text-body-xl': size === 'xl',
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
export default Text;