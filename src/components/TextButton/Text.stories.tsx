import { Meta, StoryObj } from '@storybook/react';
import Text, { TextButtonProps } from './index';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
		size: 'md',
		color: 'primary',
		shadow: false,
  },
	argTypes: {
		size: {
			control: {
				type: 'inline-radio'
			}
		}
	}
} as Meta<TextButtonProps>

export const Default:StoryObj<TextButtonProps> = {};

export const ExtraSmall: StoryObj<TextButtonProps> = {
	args: {
		size: 'xs'
	}
}

export const Small: StoryObj<TextButtonProps> = {
	args: {
		size: 'sm'
	}
}

export const Large: StoryObj<TextButtonProps> = {
	args: {
		size: 'lg'
	}
}

export const ExtraLarge: StoryObj<TextButtonProps> = {
	args: {
		size: 'xl'
	}
}

export const ColorPrimary: StoryObj<TextButtonProps> = {
	args: {
		color: 'primary'
	}
}

export const WithShadow: StoryObj<TextButtonProps> = {
	args: {
		shadow: true
	}
}