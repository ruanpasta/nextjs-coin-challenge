import { ButtonContainer } from '@/styles/libs/components/button'
import LoadingSpinner from './loadingSpinner'

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success'
  size?: 'small' | 'medium' | 'large' | 'extraLarge'
  format?: 'rounded' | 'square'
  variant?: 'link' | 'contained'
  isLoading?: boolean

  children: React.ReactNode

  // Rest props
  [propName: string]: any
}

export default function Button(props: ButtonProps) {
  const { color, size, format, variant, isLoading, children, ...rest } = props

  return (
    <ButtonContainer
      color={color}
      size={size}
      format={format}
      variant={variant}
      {...rest}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </ButtonContainer>
  )
}
