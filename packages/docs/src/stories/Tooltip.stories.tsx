import type { Meta, StoryObj } from '@storybook/react'
import {
  Text,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@course-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          '`Tooltip` is a small piece of contextual information about an element on the screen, which is displayed when an user hovers or focuses on the element which is being described.',
      },
    },
  },
  args: {
    variant: 'primary',
    content: 'Tooltip content',
    delayDuration: 700,
    side: 'top',
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Tooltip variant',
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
    content: {
      name: 'content',
      description: 'Tooltip content',
      control: {
        type: 'text',
      },
    },
    side: {
      name: 'side',
      description:
        'The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.',
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'select',
      },
    },
    delayDuration: {
      name: 'delayDuration',
      description:
        'Override the duration given to the `Provider` to customise the open delay for a specific tooltip.',
      control: {
        type: 'number',
      },
    },
    trigger: {
      control: {
        type: null,
      },
    },
  },
  decorators: [(Story) => <TooltipProvider>{Story()}</TooltipProvider>],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    trigger: (
      <div style={{ width: 'fit-content' }}>
        <Text>Hover here</Text>
      </div>
    ),
  },
}
