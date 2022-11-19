import { Slot } from '@radix-ui/react-slot';
import React, { InputHTMLAttributes, ReactNode } from 'react'
import Text from '../Text'; 

export interface TestProps extends InputRootProps, InputTitleProps {

}

interface InputRootProps {
  children: ReactNode;
}

interface InputTitleProps {
  title: string | undefined;
}

interface InputContentProps {
  children: ReactNode;
}

interface InputIconProps {
  children: ReactNode;
}

interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputRoot(props:InputRootProps) {
  return (
    <label className='flex flex-col gap-4'>
      {props.children}
    </label>
  )
}

function InputTitle(props:InputTitleProps) {
  return(
    <Text color='dark' size='lg'>
      {props.title}
    </Text>
  ) 
}

function InputContent(props:InputContentProps) {
  return(
    <div className='flex gap-4 px-4 h-12 border-2 border-light-300 rounded focus-within:border-primary-100'>
      {props.children}
    </div>
  ) 
}

function InputIcon(props:InputIconProps) {
  return(
    <Slot className='w-6 h-6 text-light-300 mt-auto mb-auto'>
      {props.children}
    </Slot>
  )
}

function InputElement(props:InputElementProps) {
  return(
    <input className='flex-1 bg-transparent outline-none placeholder:text-light-300 text-dark-100' {...props}/>
  )
}

export const TextInput = {
  Root: InputRoot,
  Title: InputTitle,
  Content: InputContent,
  Input: InputElement,
  Icon: InputIcon,
}