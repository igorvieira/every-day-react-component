import {  ComponentMeta, ComponentStory } from '@storybook/react'

import Accordion from '.'

export default {
  title: 'Components/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

export const Default: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />