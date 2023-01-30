import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@course-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'Boxs or simple content box, used to divide content elements on page.',
      },
    },
  },
  args: {
    children: <Text>Testing the Box element</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
