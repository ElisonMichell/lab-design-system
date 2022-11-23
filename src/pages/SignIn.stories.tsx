import { Meta, StoryObj } from '@storybook/react';
import SignIn from './SignIn';
import { within, userEvent } from '@storybook/testing-library'
import { rest } from 'msw'

export default {
	title: 'Pages/Sign In',
	component: SignIn,
	parameters: {
		msw: {
			handlers: [
				rest.post('/sessions', (req, res, ctx) => {
					return res(ctx.json({
						message: "Login realizado!"
					}))
				})
			]
		}
	}
} as Meta

export const Default: StoryObj = {
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement)

		userEvent.type(canvas.getByPlaceholderText('email@example.com'), 'dev.elisonmichell@gmail.com')
		userEvent.type(canvas.getByPlaceholderText('**********'), '12345678')

		userEvent.click(canvas.getByTitle('Enter'))
	}
}