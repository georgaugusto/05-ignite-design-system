import { ComponentProps, Fragment, ReactNode, useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X, Info, Warning, CheckCircle, XCircle } from 'phosphor-react'

import {
  ToastContainer,
  ToastViewport,
  ToastClose,
  ToastDescription,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  icon: boolean
  description: string
}

type IconsEnum = 'accent' | 'positive' | 'warning' | 'negative' | 'snackbars'

function Icons(variant: IconsEnum) {
  switch (variant) {
    case 'accent':
      return <Info size={24} />
    case 'positive':
      return <CheckCircle size={24} />
    case 'warning':
      return <Warning size={24} />
    case 'negative':
      return <XCircle size={24} />
    case 'snackbars':
      return <CheckCircle size={24} />
    default:
      return undefined
  }
}

export function Toast({ description, icon, ...props }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ToastContainer open={open} onOpenChange={setOpen} {...props}>
        <ToastDescription>
          {icon && Icons(props.variant as IconsEnum)}
          <span>{description}</span>
        </ToastDescription>
        <ToastClose asChild aria-label="Close">
          <X size={16} aria-hidden onClick={() => setOpen(false)} />
        </ToastClose>
      </ToastContainer>
      <ToastViewport />
    </>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return <ToastPrimitive.Provider>{children}</ToastPrimitive.Provider>
}

Toast.displayName = 'Toast'
