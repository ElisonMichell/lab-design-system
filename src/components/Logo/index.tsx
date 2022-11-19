import React from 'react';
import Heading from '../Heading';
import LogoIlustration from '../../assets/logo.svg';

export interface LogoProps {
  variant: 'light' | 'dark';
}

function Logo({variant}:LogoProps) {
  return(
    <div className='flex gap-4 items-center'>
      <img src={LogoIlustration} alt="LabDesign System Logo" />
      <Heading size='sm' shadow color={variant === 'light' ? 'light' : 'dark'}>Lab Design System</Heading>
    </div>
  )
}
export default Logo;