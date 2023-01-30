import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@course-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diego3g.png',
    alt: 'Diego Fernandes',
    delayMs: 600,
    size: 'md',
    fallback: 'DF',
  },
  argTypes: {
    src: {
      name: 'src',
      description: 'Path to image `string`',
      control: {
        type: 'text',
      },
    },
    alt: {
      name: 'alt',
      description: 'Attribute describing the image',
      control: {
        type: 'text',
      },
    },
    delayMs: {
      name: 'delayMs',
      description:
        'Useful for delaying rendering so it only appears for those with slower connections.',
      control: {
        type: 'number',
      },
    },
    size: {
      name: 'size',
      description: 'Size of the Avatar `string`',
      options: ['xxs', 'xs', 'sm', 'md'],
      control: {
        type: 'select',
      },
    },
    fallback: {
      name: 'fallback',
      description: 'Fallback',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    fallback: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When the image is not available, the component will be show a fallback avatar',
      },
    },
  },
}

export const WithInitials: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When you do not use the `src` attribute, the component will use the `name` attribute to show the initials to name',
      },
    },
  },
}
