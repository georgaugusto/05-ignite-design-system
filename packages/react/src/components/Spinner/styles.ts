import { styled, keyframes } from '../../styles'

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const SpinnerContainer = styled('div', {
  border: '2px solid $backgroundTertiary',
  borderTop: '2px solid $backgroundInverseSecondary',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,

  variants: {
    size: {
      sm: {
        width: '$4',
        height: '$4',
      },

      md: {
        width: '$6',
        height: '$6',
      },

      lg: {
        width: '$8',
        height: '$8',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
