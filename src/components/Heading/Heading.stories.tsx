import { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from './index';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
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
} as Meta<HeadingProps>

export const Default:StoryObj<HeadingProps> = {};

export const ExtraSmall: StoryObj<HeadingProps> = {
	args: {
		size: 'xs'
	}
}

export const Small: StoryObj<HeadingProps> = {
	args: {
		size: 'sm'
	}
}

export const Large: StoryObj<HeadingProps> = {
	args: {
		size: 'lg'
	}
}

export const ExtraLarge: StoryObj<HeadingProps> = {
	args: {
		size: 'xl'
	}
}

export const ColorPrimary: StoryObj<HeadingProps> = {
	args: {
		color: 'primary'
	}
}

export const WithShadow: StoryObj<HeadingProps> = {
	args: {
		shadow: true
	}
}

export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChildren: true,
		children: <h1>Heading</h1>
	},
	argTypes: {
		asChildren: {
			table: {
				disable: true
			}
		}
	}
}