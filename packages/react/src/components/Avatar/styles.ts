import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',

  variants: {
    size: {
      xxs: {
        width: '$7',
        height: '$7',
      },

      xs: {
        width: '$10',
        height: '$10',
      },

      sm: {
        width: '$12',
        height: '$12',
      },

      md: {
        width: '$16',
        height: '$16',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$backgroundAccent',
  color: '$contentOnColor',

  fontWeight: '$bold',

  variants: {
    size: {
      xxs: {
        fontSize: '$xs',
        lineHeight: '$short',

        svg: {
          width: '$3',
          height: '$3',
        },
      },

      xs: {
        fontSize: '$md',
        lineHeight: '$shorter',

        svg: {
          width: '$4',
          height: '$4',
        },
      },

      sm: {
        fontSize: '$xl',
        lineHeight: '$short',

        svg: {
          width: '$5',
          height: '$5',
        },
      },

      md: {
        fontSize: '$2xl',
        lineHeight: '$shorter',

        svg: {
          width: '$6',
          height: '$6',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
