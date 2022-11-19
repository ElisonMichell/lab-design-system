import React from 'react';
import Heading from '../Heading';

export interface LogoProps {
  variant: 'light' | 'dark';
}

function Logo({variant}:LogoProps) {
  return(
    <div className='flex gap-4 items-center'>
      <img src="/src/assets/logo.svg" alt="LabDesign System Logo" />
      <Heading size='sm' shadow color={variant === 'light' ? 'light' : 'dark'}>Lab Design System</Heading>
    </div>
  )
}
export default Logo;