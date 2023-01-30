import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const CheckboxContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '$4',

  variants: {
    isDisabled: {
      true: {
        label: {
          color: '$contentStateDisabled',
        },
      },
    },
  },

  defaultVariants: {
    isDisabled: false,
  },
})

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',

  width: '$6',
  height: '$6',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  boxSizing: 'border-box',
  lineHeight: 0,

  cursor: 'pointer',

  backgroundColor: 'contentPrimary',
  borderRadius: '$xs',
  border: '2px solid $contentTertiary',

  '&[data-state="checked"]': {
    backgroundColor: '$contentPrimary',
    border: '2px solid $contentPrimary',

    animation: `background ${fadeIn} 200ms ease-out`,
  },

  '&:focus': {
    border: '2px solid $contentPrimary',
  },

  '&[data-state="unchecked"]': {
    animation: `background ${fadeOut} 200ms ease-out`,
  },

  variants: {
    isDisabled: {
      true: {
        '&[data-state="checked"]': {
          backgroundColor: '$contentStateDisabled',
          border: '2px solid $contentStateDisabled',

          cursor: 'not-allowed',
        },

        '&[data-state="unchecked"]': {
          backgroundColor: 'contentPrimary',
          border: '2px solid $contentStateDisabled',

          cursor: 'not-allowed',
        },
      },
    },
  },

  defaultVariants: {
    isDisabled: false,
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$contentInversePrimary',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${fadeIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${fadeOut} 200ms ease-out`,
  },

  variants: {
    isDisabled: {
      true: {
        color: '$contentPrimary',
      },
    },
  },

  defaultVariants: {
    isDisabled: false,
  },
})
