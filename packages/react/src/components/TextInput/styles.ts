import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const InputContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'baseline',

  borderRadius: '$sm',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$backgroundTertiary',
        border: '2px solid $backgroundTertiary',

        '&:has(input:focus)': {
          borderColor: '$borderSelected',
        },

        '&:has(input:disabled)': {
          backgroundColor: '$backgroundStateDisabled',
          border: '2px solid $backgroundStateDisabled',
          cursor: 'not-allowed',
        },
      },
    },

    size: {
      sm: {
        padding: '0.375rem $4',
      },

      md: {
        padding: '0.625rem $4',
      },

      lg: {
        padding: '$3 $4',
      },
    },

    isErrored: {
      true: {
        backgroundColor: '$backgroundLightNegative',
        border: '2px solid $borderNegative',

        transition: 'background-color, border 0.3s cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    isErrored: false,
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'medium',

  color: '$contentPrimary',
})

export const Input = styled('input', {
  width: '100%',

  background: 'transparent',
  color: '$contentPrimary',
  border: 0,

  fontFamily: '$default',
  fontWeight: 'regular',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    color: '$contentStateDisabled',
    cursor: 'not-allowed',
  },

  '&:disabled::placeholder': {
    color: '$contentStateDisabled',
  },

  '&:placeholder': {
    color: '$contentTertiary',
  },

  variants: {
    size: {
      sm: {
        height: '$5',
        fontSize: '0.875rem',
        lineHeight: '$5',

        padding: 0,
      },

      md: {
        height: '$6',
        fontSize: '$4',
        lineHeight: '$6',

        padding: 0,
      },

      lg: {
        height: '$7',
        fontSize: '1.125rem',
        lineHeight: '$7',

        padding: 0,
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})

export const ErrorMessage = styled('div', {
  display: 'flex',
  opacity: 0,

  span: {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: 'regular',

    color: '$contentNegative',

    cursor: 'default',
  },

  variants: {
    isErrored: {
      true: {
        opacity: 1,
        paddingBottom: '$3',

        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },

  defaultVariants: {
    isErrored: false,
  },
})
