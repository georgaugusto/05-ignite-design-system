import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  TextInputContainer,
  InputContainer,
  Input,
  Prefix,
  ErrorMessage,
} from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label: string
  prefix?: string
  variant: 'primary'
  isErrored?: any
  errorMessage?: string
}

export function TextInput({
  label,
  variant,
  prefix,
  isErrored,
  errorMessage,
  ...props
}: TextInputProps) {
  return (
    <TextInputContainer>
      {label && (
        <Text size="sm" as="label">
          {label}
        </Text>
      )}

      <InputContainer variant={variant} isErrored={!!isErrored}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </InputContainer>

      <ErrorMessage isErrored={!props.disabled && !!isErrored}>
        {!!isErrored && <span>{errorMessage}</span>}
      </ErrorMessage>
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
