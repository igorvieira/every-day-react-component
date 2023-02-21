import { ComponentMeta, ComponentStory } from '@storybook/react'

import Table from '.'

export default {
  title: 'Components/TableToggle',
  args: {
    columns: [
      { id: 'name', name: 'Name' },
      { id: 'email', name: 'Email' },
      { id: 'address', name: 'Address' },
      { id: 'phone', name: 'Phone' },
      { id: 'company', name: 'Company' },
      { id: 'is_active', name: 'Actions' }
    ],
    rows: [
      {
        id: '1',
        values: {
          name: 'John Doe',
          email: 'email@email.com',
          address: '123 Main St',
          phone: '123-456-7890',
          company: 'Company',
          is_active: true
        }
      },
      {
        id: '2',
        values: {
          name: 'Jane Doe',
          email: 'email@email.com',
          address: '123 Main St',
          phone: '123-456-7890',
          company: 'Company',
          is_active: false
        }
      },
      {
        id: '3',
        values: {
          name: 'John Doe',
          email: 'email@email.com',
          address: '123 Main St',
          phone: '123-456-7890',
          company: 'Company',
          is_active: true
        }
      }
    ]
  },
  component: Table
}
export const Default: ComponentStory<typeof Table> = (args) => (
  <Table {...args} />
)
