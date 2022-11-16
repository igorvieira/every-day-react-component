import {  ComponentMeta, ComponentStory } from '@storybook/react'

import Avatar from '.'

export default {
  title: 'Components/Avatar',
  args: {
    imageURL: '',
  },
  component: Avatar
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />