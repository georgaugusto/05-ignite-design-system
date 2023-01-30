import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, ToastProvider } from '@course-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component:
          'Notification component sends various types of notification, with texts or descriptions and different status.',
      },
    },
  },
  args: {
    description: 'Toast description',
    variant: 'accent',
    open: false,
    icon: false,
  },
  argTypes: {
    description: {
      name: 'description',
      description: 'Toast description `string`',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'variant',
      description: 'Toast variant `string`',
      options: ['accent', 'positive', 'warning', 'negative', 'snackbars'],
      control: {
        type: 'select',
      },
    },
    open: {
      name: 'open',
      description: 'Show `Toast` component `boolean`',
      control: {
        type: 'boolean',
      },
    },
    icon: {
      name: 'icon',
      description: 'Change notification format to icon view `boolean`',
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [(Story) => <ToastProvider>{Story()}</ToastProvider>],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
