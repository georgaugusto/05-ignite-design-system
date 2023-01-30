import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@course-ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: '',
    defaultChecked: false,
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'label',
      description: '`string`',
      control: {
        type: 'text',
      },
    },
    defaultChecked: {
      name: 'defaultChecked',
      description: '`boolean`',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'disabled',
      description: '`boolean`',
      control: {
        type: 'boolean',
      },
    },
    required: {
      name: 'required',
      description: '`boolean`',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const PrimaryWithLabel: StoryObj<CheckboxProps> = {
  args: {
    label: 'Label',
  },
}

export const Selected: StoryObj<CheckboxProps> = {
  args: {
    defaultChecked: true,
    checked: true,
  },
}

export const disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
