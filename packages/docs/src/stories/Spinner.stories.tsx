import type { Meta, StoryObj } from '@storybook/react'
import { Spinner, SpinnerProps } from '@course-ignite-ui/react'

export default {
  title: 'Surfaces/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'Loading spinners are used when retrieving data or performing slow computations, and help to notify users that loading is underway.',
      },
    },
  },
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      name: 'size',
      description: 'Size',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<SpinnerProps>

export const Primary: StoryObj<SpinnerProps> = {}
