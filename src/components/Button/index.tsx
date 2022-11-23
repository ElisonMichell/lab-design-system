import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button(props: ButtonProps) {
  return(
    <button className='h-14 w-full text-light-100 text-body-xl rounded disabled:brightness-75 disabled:text-[#3DC8FF]
      bg-gradient-to-r from-[#7200B8] via-[#0084B8] to-[#3DC8FF] hover:brightness-125 transition-all' 
    {...props}>
      {props.title}
    </button>
  )
}
export default Button;