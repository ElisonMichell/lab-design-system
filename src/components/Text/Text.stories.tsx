import { Meta, StoryObj } from '@storybook/react';
import Text, { TextProps } from './index';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text',
		asChildren: false,

		size: 'md',
		color: 'dark',
		shadow: false,
		darkMode: false,
  },
	argTypes: {
		size: {
			control: {
				type: 'inline-radio'
			}
		},
		asChildren: {
			table: {
				disable: true
			}
		},
		darkMode: {
			table: {
				disable: true
			}
		}
	}
} as Meta<TextProps>

export const Default:StoryObj<TextProps> = {};

export const ExtraSmall: StoryObj<TextProps> = {
	args: {
		size: 'xs'
	}
}

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'sm'
	}
}

export const Large: StoryObj<TextProps> = {
	args: {
		size: 'lg'
	}
}

export const ExtraLarge: StoryObj<TextProps> = {
	args: {
		size: 'xl'
	}
}

export const ColorPrimary: StoryObj<TextProps> = {
	args: {
		color: 'primary'
	}
}

export const WithShadow: StoryObj<TextProps> = {
	args: {
		shadow: true
	}
}

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChildren: true,
		children: <p>Text</p>
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	}
}