import {  ComponentStory } from '@storybook/react'
import { useState } from 'react'

import Toggle from '.'

export default {
  title: 'Components/Toggle',
  component: Toggle
}

const Template = () => {
  const [checked, setChecked] = useState(false)
  console.log('checked', checked)
  return (
    <Toggle
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}

export const Default: ComponentStory<typeof Toggle> = Template.bind({})
