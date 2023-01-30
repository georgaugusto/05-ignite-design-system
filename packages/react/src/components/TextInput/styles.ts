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

  padding: '$3 $4',
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
  fontSize: '$sm',
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
