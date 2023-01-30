import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@course-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'Children (inner test)',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      description: 'Size',
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the header will always be an `h2`, but we can change this with the `as` property.',
      },
    },
  },
}
