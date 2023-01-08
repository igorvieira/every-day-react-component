import { ComponentStory } from '@storybook/react'

import CheckboxGroup from '.'

export default {
  title: 'Components/CheckboxGroup',
  args: {
    title: 'Checkbox Group',
    subtitle: 'Select your favorite color',
    options: [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Blue',
        value: 'blue'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ]
  },
  component: CheckboxGroup
}

export const Default: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />