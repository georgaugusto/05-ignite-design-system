import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextInput, TextInputProps } from '@course-ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
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
    prefix: '',
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
    prefix: {
      name: 'prefix',
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
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Type your name',
  },
}

export const Error: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
    isErrored: true,
    errorMessage: 'Error',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
