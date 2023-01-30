import { styled } from '../../styles'

export const TextAreaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const TextAreaInput = styled('textarea', {
  width: '100%',
  minHeight: 80,
  resize: 'vertical',
  boxSizing: 'border-box',

  color: '$contentTertiary',
  backgroundColor: '$backgroundTertiary',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',

  borderRadius: '$sm',
  border: '2px solid $backgroundTertiary',

  padding: '$3 $4',

  variants: {
    variant: {
      primary: {
        '&:focus': {
          outline: 0,
          borderColor: '$borderSelected',
        },

        '&:disabled': {
          backgroundColor: '$backgroundStateDisabled',
          color: '$contentStateDisabled',
          border: '2px solid $backgroundStateDisabled',
          cursor: 'not-allowed',
        },

        '&:disabled::placeholder': {
          color: '$contentStateDisabled',
        },

        '&:placeholder': {
          color: '$contentTertiary',
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
