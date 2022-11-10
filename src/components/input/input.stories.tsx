import {  ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '.'

export default {
  title: 'Components/Input',
  component: Input
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => <Input {...args} />