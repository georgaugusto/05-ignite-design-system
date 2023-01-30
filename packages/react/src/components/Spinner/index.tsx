import { ComponentProps } from 'react'
import { SpinnerContainer } from './styles'

export interface SpinnerProps extends ComponentProps<typeof SpinnerContainer> {}

export function Spinner({ ...props }: SpinnerProps) {
  return <SpinnerContainer {...props} />
}

Spinner.displayName = 'Spinner'
