import { ComponentProps } from 'react'
import { Text } from '../Text'
import { TextAreaContainer, TextAreaInput, ErrorMessage } from './styles'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  label?: string
  variant?: 'primary'
  isErrored?: any
  errorMessage?: string
}

export function TextArea({
  label,
  variant,
  isErrored,
  errorMessage,
  ...props
}: TextAreaProps) {
  return (
    <TextAreaContainer>
      {label && (
        <Text size="sm" as="label">
          {label}
        </Text>
      )}

      <TextAreaInput isErrored={!!isErrored} {...props} />

      <ErrorMessage isErrored={!props.disabled && !!isErrored}>
        {!!isErrored && <span>{errorMessage}</span>}
      </ErrorMessage>
    </TextAreaContainer>
  )
}

TextArea.displayName = 'TextArea'
