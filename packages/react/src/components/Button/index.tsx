import { ComponentProps, ElementType, ReactNode } from 'react'
import { Spinner } from '../Spinner'
import { ButtonContainer } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType
  children?: ReactNode
  loading?: boolean
}

export function Button({ children, loading, ...props }: ButtonProps) {
  return (
    <ButtonContainer disabled={props.disabled} {...props}>
      {loading ? <Spinner size={props.size} /> : children}
    </ButtonContainer>
  )
}

Button.displayName = 'Button'
