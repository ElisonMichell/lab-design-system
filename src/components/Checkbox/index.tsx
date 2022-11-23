import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckboxProps {
  disabled?: boolean
  title?: string
}

function Checkbox(props:CheckboxProps) {
  return(
    <CheckboxPrimitive.Root 
      className='rounded h-4 w-4 flex items-center justify-center 
      bg-primary-200 hover:bg-primary-100 disabled:bg-light-300'
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check size={16} weight="bold" className='text-light-100'/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
export default Checkbox;