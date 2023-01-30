import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled, keyframes } from '@stitches/react'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipRoot = styled(TooltipPrimitive.Root, {})

export const TooltipTrigger = styled(TooltipPrimitive.Trigger, {})

export const TooltipPortal = styled(TooltipPrimitive.Portal, {})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: 8,
  padding: 16,

  fontSize: '$sm',
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,

  variants: {
    variant: {
      primary: {
        color: '$contentInversePrimary',
        backgroundColor: '$backgroundInverseSecondary',
      },

      secondary: {
        color: '$contentPrimary',
        backgroundColor: '$backgroundSecondary',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },

  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  variants: {
    color: {
      primary: { fill: '$backgroundInverseSecondary' },
      secondary: { fill: '$backgroundSecondary' },
    },
  },

  defaultVariants: {
    color: 'primary',
  },
})
