import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

export const ToastProvider = styled(ToastPrimitive.Provider, {})

export const ToastContainer = styled(ToastPrimitive.Root, {
  borderRadius: 12,
  padding: 16,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  variants: {
    variant: {
      accent: {
        span: {
          color: '$contentOnColor',
        },

        svg: {
          color: '$contentOnColor',
        },

        backgroundColor: '$backgroundAccent',
      },

      positive: {
        span: {
          color: '$contentOnColor',
        },

        svg: {
          color: '$contentOnColor',
        },

        backgroundColor: '$backgroundPositive',
      },

      warning: {
        backgroundColor: '$backgroundWarning',

        span: {
          color: '$contentOnColorInverse',
        },

        svg: {
          color: '$contentOnColorInverse',
        },
      },

      negative: {
        span: {
          color: '$contentOnColor',
        },

        svg: {
          color: '$contentOnColor',
        },

        backgroundColor: '$backgroundNegative',
      },

      snackbars: {
        span: {
          color: '$contentOnColor',
        },

        svg: {
          color: '$contentOnColor',
        },

        backgroundColor: '$backgroundInverseSecondary',
      },
    },
  },

  defaultVariants: {
    variant: 'accent',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',

  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,

  display: 'flex',
  alignItems: 'center',

  svg: {
    paddingRight: 16,
  },
})

export const ToastClose = styled(ToastPrimitive.Close, {
  gridArea: 'action',
  cursor: 'pointer',
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  top: 0,
  right: 0,
  padding: 25,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
