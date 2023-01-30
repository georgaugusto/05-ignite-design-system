import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  delayMs: number
  size: 'xxs' | 'xs' | 'sm' | 'md'
  fallback?: string
}

export function Avatar({ delayMs, size, fallback, ...props }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={delayMs} size={size}>
        {fallback ? fallback.toUpperCase() : <User />}
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
