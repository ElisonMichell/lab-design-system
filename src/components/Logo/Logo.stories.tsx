import { Meta, StoryObj } from '@storybook/react';
import Logo, { LogoProps } from './index'

export default {
	title: 'Components/Logo',
	component: Logo,
  args: {
    variant: 'light'
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<LogoProps>

export const Default: StoryObj<LogoProps> = {}

export const Dark: StoryObj<LogoProps> = {
  args: {
    variant: 'dark'
  }
}