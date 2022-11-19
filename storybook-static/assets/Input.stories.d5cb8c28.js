var d=Object.defineProperty;var o=(n,s)=>d(n,"name",{value:s,configurable:!0});import{a as u}from"./index.module.3b54f3bd.js";import{T as c}from"./index.c4933b06.js";import{b as r,F as l,j as e,r as k}from"./jsx-runtime.db3a2431.js";import{I as h,r as f}from"./IconBase.esm.515fb85c.js";import"./clsx.m.256e9345.js";import"./iframe.170a991c.js";var i=new Map;i.set("bold",function(n){return r(l,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});i.set("duotone",function(n){return r(l,{children:[e("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});i.set("fill",function(){return e(l,{children:e("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"})})});i.set("light",function(n){return r(l,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});i.set("thin",function(n){return r(l,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});i.set("regular",function(n){return r(l,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var x=o(function(s,p){return f(s,p,i)},"renderPath"),a=k.exports.forwardRef(function(n,s){return e(h,{...Object.assign({ref:s},n,{renderPath:x})})});a.displayName="Envelope";const m=a;function I(n){return e("label",{className:"flex flex-col gap-4",children:n.children})}o(I,"InputRoot");function L(n){return e(c,{color:"dark",size:"lg",children:n.title})}o(L,"InputTitle");function y(n){return e("div",{className:"flex gap-4 px-4 h-12 border-2 border-light-300 rounded focus-within:border-primary-100",children:n.children})}o(y,"InputContent");function T(n){return e(u,{className:"w-6 h-6 text-light-300 mt-auto mb-auto",children:n.children})}o(T,"InputIcon");function W(n){return e("input",{className:"flex-1 bg-transparent outline-none placeholder:text-light-300 text-dark-100",...n})}o(W,"InputElement");const t={Root:I,Title:L,Content:y,Input:W,Icon:T},Z={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Envelope } from 'phosphor-react';\r
import { TextInput } from './index'\r
\r
export default {\r
	title: 'Components/Input',\r
	component: TextInput.Root,\r
} as ComponentMeta<typeof TextInput.Root>\r
\r
const TemplateDefault: ComponentStory<typeof TextInput.Title & typeof TextInput.Input> = (args) =>(\r
  <TextInput.Root>\r
    <TextInput.Title title = {args.title} />\r
    <TextInput.Content>\r
      <TextInput.Input placeholder = {args.placeholder}/>\r
    </TextInput.Content>\r
  </TextInput.Root>\r
)\r
\r
const TemplateWithIcon: ComponentStory<typeof TextInput.Input> = (args) =>(\r
  <TextInput.Root>\r
    <TextInput.Title title = {args.title} />\r
    <TextInput.Content>\r
      <TextInput.Icon>\r
        <Envelope />\r
      </TextInput.Icon>\r
      <TextInput.Input placeholder = {args.placeholder}/>\r
    </TextInput.Content>\r
  </TextInput.Root>\r
)\r
\r
export const Default = TemplateDefault.bind({});\r
Default.args = {\r
  title: 'Email',\r
  placeholder: 'Email Address'\r
}\r
\r
export const WithIcon = TemplateWithIcon.bind({});\r
WithIcon.args = {\r
  title: 'Email',\r
  placeholder: 'Email Address'\r
}`,locationsMap:{default:{startLoc:{col:89,line:10},endLoc:{col:1,line:17},startBody:{col:89,line:10},endBody:{col:1,line:17}},"with-icon":{startLoc:{col:65,line:19},endLoc:{col:1,line:29},startBody:{col:65,line:19},endBody:{col:1,line:29}}}}},title:"Components/Input",component:t.Root},j=o(n=>r(t.Root,{children:[e(t.Title,{title:n.title}),e(t.Content,{children:e(t.Input,{placeholder:n.placeholder})})]}),"TemplateDefault"),g=o(n=>r(t.Root,{children:[e(t.Title,{title:n.title}),r(t.Content,{children:[e(t.Icon,{children:e(m,{})}),e(t.Input,{placeholder:n.placeholder})]})]}),"TemplateWithIcon"),C=j.bind({});C.args={title:"Email",placeholder:"Email Address"};const E=g.bind({});E.args={title:"Email",placeholder:"Email Address"};const D=["Default","WithIcon"];export{C as Default,E as WithIcon,D as __namedExportsOrder,Z as default};
//# sourceMappingURL=Input.stories.d5cb8c28.js.map
