import { ComponentProps, ElementRef, forwardRef } from 'react'
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

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ label, variant, prefix, isErrored, errorMessage, ...props }, ref) => (
    <TextInputContainer>
      {label && (
        <Text size="sm" as="label">
          {label}
        </Text>
      )}

      <InputContainer variant={variant} isErrored={!!isErrored}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </InputContainer>

      <ErrorMessage isErrored={!props.disabled && !!isErrored}>
        {!!isErrored && <span>{errorMessage}</span>}
      </ErrorMessage>
    </TextInputContainer>
  ),
)

TextInput.displayName = 'TextInput'
