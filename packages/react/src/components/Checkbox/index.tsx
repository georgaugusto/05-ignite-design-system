import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { CheckboxContainer, CheckboxRoot, CheckboxIndicator } from './styles'

export interface CheckboxProps extends ComponentProps<typeof CheckboxRoot> {
  label?: string
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <CheckboxContainer isDisabled={props.disabled}>
      <CheckboxRoot isDisabled={props.disabled} {...props}>
        <CheckboxIndicator isDisabled={props.disabled} asChild>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxRoot>

      {label && (
        <Text size="sm" as="label">
          {label}
        </Text>
      )}
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
