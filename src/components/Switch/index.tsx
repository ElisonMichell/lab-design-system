import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

function Switch(props:ButtonHTMLAttributes<HTMLButtonElement>) {
  return(
    <button 
      className='relative h-6 w-12 rounded-full bg-light-200 border-light-100 drop-shadow-3d-light
      transition-all duration-300 ease-in-out dark:bg-dark-200 dark:border-dark-100 dark:drop-shadow-3d-dark'
      {...props}
    >
      <div 
        className='w-4 h-4 rounded-full transition-all duration-300 ease-in-out translate-x-7 bg-dark-100 
        dark:translate-x-1 dark:bg-light-200'
      />
    </button>
  )
}
export default Switch;