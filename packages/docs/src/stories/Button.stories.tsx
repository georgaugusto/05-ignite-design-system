import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, ButtonProps } from '@course-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Buttons are interface elements that allow the user to initiate a specific action. They are identified by a label that indicates what action will be performed when the user clicks or taps the button.',
      },
    },
  },
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    auto: false,
    loading: false,
    disabled: false,
    colors: 'white',
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: '`Button` variant',
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select',
      },
    },
    size: {
      name: 'size',
      description: 'Size',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    colors: {
      name: 'colors',
      description: 'Button colors',
      options: ['white', 'black', 'red', 'yellow', 'green', 'blue'],
      control: {
        type: 'select',
      },
    },
    auto: {
      name: 'auto',
      description: 'Expand button to 100% width',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'isDisabled',
      description: 'Disable button',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      name: 'loading',
      description: 'Show a loading',
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
  decorators: [(Story) => <Box css={{ gap: '$2' }}>{Story()}</Box>],
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'For secondary actions on each page, these can only be used in conjunction with a primary button.',
      },
    },
  },
}

export const Trimary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'For less prominent actions, tertiary buttons can be used in isolation or paired with a primary button when there are multiple calls to action.',
      },
    },
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'One way to add an icon, but we can add any component to `children`.',
      },
    },
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    auto: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When you define the button as `isFullWidth`, it will be expanded to full width to fill its parent container.',
      },
    },
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Types of buttons with loading',
      },
    },
  },
}
