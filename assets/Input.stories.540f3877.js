var r=Object.defineProperty;var o=(e,p)=>r(e,"name",{value:p,configurable:!0});import{T as t,E as i}from"./index.4229dfe7.js";import{a as l,j as n}from"./jsx-runtime.1f476dd6.js";import"./IconBase.esm.db3ca65d.js";import"./index.module.46573ead.js";import"./index.5d6affec.js";import"./clsx.m.256e9345.js";import"./iframe.64dc5b25.js";const C={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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
}`,locationsMap:{default:{startLoc:{col:89,line:10},endLoc:{col:1,line:17},startBody:{col:89,line:10},endBody:{col:1,line:17}},"with-icon":{startLoc:{col:65,line:19},endLoc:{col:1,line:29},startBody:{col:65,line:19},endBody:{col:1,line:29}}}}},title:"Components/Input",component:t.Root},a=o(e=>l(t.Root,{children:[n(t.Title,{title:e.title}),n(t.Content,{children:n(t.Input,{placeholder:e.placeholder})})]}),"TemplateDefault"),c=o(e=>l(t.Root,{children:[n(t.Title,{title:e.title}),l(t.Content,{children:[n(t.Icon,{children:n(i,{})}),n(t.Input,{placeholder:e.placeholder})]})]}),"TemplateWithIcon"),s=a.bind({});s.args={title:"Email",placeholder:"Email Address"};const d=c.bind({});d.args={title:"Email",placeholder:"Email Address"};const E=["Default","WithIcon"];export{s as Default,d as WithIcon,E as __namedExportsOrder,C as default};
//# sourceMappingURL=Input.stories.540f3877.js.map
