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

InputRoot.displayName = 'TextInput.Root';

function InputTitle(props:InputTitleProps) {
  return(
    <Text size='lg' darkMode>
      {props.title}
    </Text>
  ) 
}

InputTitle.displayName = 'TextInput.Title';

function InputContent(props:InputContentProps) {
  return(
    <div className='flex gap-4 px-4 h-12 border-2 transition-colors duration-300 ease-in-out 
    border-light-300 dark:border-dark-100 rounded focus-within:border-primary-100'>
      {props.children}
    </div>
  ) 
}

InputContent.displayName = 'TextInput.Content';

function InputIcon(props:InputIconProps) {
  return(
    <Slot className='min-h-max min-w-max text-light-300 mt-auto mb-auto'>
      {props.children}
    </Slot>
  )
}

InputIcon.displayName = 'TextInput.Icon';

function InputElement(props:InputElementProps) {
  return(
    <input className='flex-1 w-full bg-transparent outline-none placeholder:text-light-300 text-dark-100' {...props}/>
  )
}

InputElement.displayName = 'TextInput.Input';

export const TextInput = {
  Root: InputRoot,
  Title: InputTitle,
  Content: InputContent,
  Input: InputElement,
  Icon: InputIcon,
}