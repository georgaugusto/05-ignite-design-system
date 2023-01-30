import { styled } from '@stitches/react'

export const ButtonContainer = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
    },

    auto: {
      true: {
        width: '100%',
      },
    },

    loading: {
      true: {
        cursor: 'not-allowed',
      },
    },

    size: {
      sm: {
        height: 36,
      },

      md: {
        height: 48,
      },

      lg: {
        height: 56,
      },
    },

    colors: {
      white: {},
      black: {},
      red: {},
      yellow: {},
      green: {},
      blue: {},
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      colors: 'white',
      css: {
        color: '$contentPrimary',
        background: '$backgroundTertiary',

        '&:not(:disabled):hover': {
          background: '$backgroundTertiary',

          $$shadowColor: '$colors-primaryATransparence8',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
          backgroundColor: '$backgroundStateDisabled',
        },
      },
    },
    {
      variant: 'primary',
      colors: 'black',
      css: {
        color: '$contentInversePrimary',
        background: '$backgroundInversePrimary',

        '&:not(:disabled):hover': {
          background: '$backgroundInversePrimary',

          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
          backgroundColor: '$backgroundStateDisabled',
        },
      },
    },
    {
      variant: 'primary',
      colors: 'red',
      css: {
        color: '$contentInversePrimary',
        background: '$backgroundNegative',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },
      },
    },
    {
      variant: 'primary',
      colors: 'yellow',
      css: {
        color: '$contentPrimary',
        background: '$backgroundWarning',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },
      },
    },
    {
      variant: 'primary',
      colors: 'green',
      css: {
        color: '$contentInversePrimary',
        background: '$backgroundPositive',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },
      },
    },
    {
      variant: 'primary',
      colors: 'blue',
      css: {
        color: '$contentInversePrimary',
        background: '$backgroundAccent',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          $$shadowColor: '$colors-primaryBTransparence20',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },
      },
    },
    {
      variant: 'secondary',
      colors: 'white',
      css: {
        color: '$contentTertiary',
        border: '2px solid $borderOpaque',

        '&:not(:disabled):hover': {
          background: '$backgroundTertiary',

          $$shadowColor: '$colors-primaryATransparence8',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
          backgroundColor: '$backgroundStateDisabled',
        },
      },
    },
    {
      variant: 'secondary',
      colors: 'black',
      css: {
        color: '$primaryA',
        border: '2px solid $primaryA',

        '&:not(:disabled):hover': {
          color: '$primaryA',
          background: '$backgroundStateDisabled',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
          backgroundColor: '$backgroundStateDisabled',

          border: '2px solid $borderOpaque',
        },
      },
    },
    {
      variant: 'secondary',
      colors: 'red',
      css: {
        color: '$contentNegative',
        border: '2px solid $contentNegative',

        '&:not(:disabled):hover': {
          color: '$contentInversePrimary',
          background: '$backgroundNegative',

          border: '2px solid $borderNegative',
        },

        '&:disabled': {
          color: '$borderNegative',
          borderColor: '$borderNegative',
        },
      },
    },
    {
      variant: 'secondary',
      colors: 'yellow',
      css: {
        color: '$contentWarning',
        border: '2px solid $contentWarning',

        '&:not(:disabled):hover': {
          color: '$contentInversePrimary',
          background: '$backgroundWarning',

          border: '2px solid $borderWarning',
        },

        '&:disabled': {
          color: '$borderWarning',
          borderColor: '$borderWarning',
        },
      },
    },
    {
      variant: 'secondary',
      colors: 'green',
      css: {
        color: '$contentPositive',
        border: '2px solid $contentPositive',

        '&:not(:disabled):hover': {
          color: '$contentInversePrimary',
          background: '$backgroundPositive',

          border: '2px solid $borderPositive',
        },

        '&:disabled': {
          color: '$borderPositive',
          borderColor: '$borderPositive',
        },
      },
    },
    {
      variant: 'secondary',
      colors: 'blue',
      css: {
        color: '$contentAccent',
        border: '2px solid $contentAccent',

        '&:not(:disabled):hover': {
          color: '$contentInversePrimary',
          background: '$backgroundAccent',

          border: '2px solid $borderAccentLight',
        },

        '&:disabled': {
          color: '$borderAccentLight',
          borderColor: '$borderAccentLight',
        },
      },
    },
    {
      variant: 'tertiary',
      colors: 'white',
      css: {
        color: '$backgroundTertiary',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-backgroundOverlayLight',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
        },
      },
    },
    {
      variant: 'tertiary',
      colors: 'black',
      css: {
        color: '$backgroundInversePrimary',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-backgroundOverlayLight',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
        },
      },
    },
    {
      variant: 'tertiary',
      colors: 'red',
      css: {
        color: '$backgroundNegative',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-backgroundOverlayLight',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
        },
      },
    },
    {
      variant: 'tertiary',
      colors: 'yellow',
      css: {
        color: '$backgroundWarning',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-backgroundOverlayLight',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
        },
      },
    },
    {
      variant: 'tertiary',
      colors: 'green',
      css: {
        color: '$backgroundPositive',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-backgroundOverlayLight',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
        },
      },
    },
    {
      variant: 'tertiary',
      colors: 'blue',
      css: {
        color: '$backgroundAccent',

        '&:not(:disabled):hover': {
          $$shadowColor: '$colors-backgroundOverlayLight',
          boxShadow: 'inset 999px 999px 0px $$shadowColor',
        },

        '&:disabled': {
          color: '$contentStateDisabled',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    auto: false,
    loading: false,
    colors: 'white',
  },
})
