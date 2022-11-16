import {  ComponentMeta, ComponentStory } from '@storybook/react'

import Modal from '.'

export default {
  title: 'Components/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => <Modal {...args} />