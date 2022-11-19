import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput } from './index'

export default {
	title: 'Components/Input',
	component: TextInput.Root,
} as ComponentMeta<typeof TextInput.Root>

const TemplateDefault: ComponentStory<typeof TextInput.Title & typeof TextInput.Input> = (args) =>(
  <TextInput.Root>
    <TextInput.Title title = {args.title} />
    <TextInput.Content>
      <TextInput.Input placeholder = {args.placeholder}/>
    </TextInput.Content>
  </TextInput.Root>
)

const TemplateWithIcon: ComponentStory<typeof TextInput.Input> = (args) =>(
  <TextInput.Root>
    <TextInput.Title title = {args.title} />
    <TextInput.Content>
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>
      <TextInput.Input placeholder = {args.placeholder}/>
    </TextInput.Content>
  </TextInput.Root>
)

export const Default = TemplateDefault.bind({});
Default.args = {
  title: 'Email',
  placeholder: 'Email Address'
}

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  title: 'Email',
  placeholder: 'Email Address'
}