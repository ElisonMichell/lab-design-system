import { Meta, StoryObj } from '@storybook/react';
import { InputHTMLAttributes } from 'react';
import Text from '../Text';
import Checkbox from './index'

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
  args: {
    disabled: false,
    title: "Remember me"
  },
  decorators: [
    (Story) => {
      return(
        <label className='flex gap-4 items-center'>
          {Story()}
          <Text>Remember me</Text>
        </label>
      )
    }
  ]
} as Meta<InputHTMLAttributes<HTMLInputElement>>

export const Default: StoryObj<InputHTMLAttributes<HTMLInputElement>> = {}

export const Disabled: StoryObj<InputHTMLAttributes<HTMLInputElement>> = {
  args: {
    disabled: true
  }
}