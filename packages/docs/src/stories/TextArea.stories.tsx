import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextArea, TextAreaProps } from '@course-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  args: {
    label: 'Label name',
    disabled: false,
    variant: 'primary',
    isErrored: false,
    errorMessage: 'Error',
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: '`string`',
      options: ['primary'],
      control: {
        type: 'select',
      },
    },
    label: {
      name: 'label',
      description: '`string`',
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'isDisabled',
      description: '`boolean`',
      control: {
        type: 'boolean',
      },
    },
    isErrored: {
      name: 'isErrored',
      description: '`boolean`',
      control: {
        type: 'boolean',
      },
    },
    errorMessage: {
      name: 'errorMessage',
      description: '`string`',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      name: 'placeholder',
      description: '`string`',
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
    disabled: true,
  },
}

export const Error: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your name',
    isErrored: true,
    errorMessage: 'Error',
  },
}
