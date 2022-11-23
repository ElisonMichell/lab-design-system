import React from 'react';
import Heading from '../Heading';
import logoIlustration from '../../assets/logo.svg';

export interface LogoProps {
  variant: 'light' | 'dark';
}

function Logo({variant}:LogoProps) {
  return(
    <div className='flex gap-4 items-center drop-shadow-default'>
      <img src={logoIlustration} alt="LabDesign System Logo" />
      <Heading size='sm' color={variant === 'light' ? 'light' : 'dark'}>Lab Design System</Heading>
    </div>
  )
}
export default Logo;