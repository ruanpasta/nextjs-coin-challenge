import { ButtonContainer } from '@/styles/libs/components/button'

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success' 
  size?: 'small' | 'medium' | 'large' | 'extraLarge'
  format?: 'rounded' | 'square'
  variant?: 'link' | 'contained'

  children: React.ReactNode

  // Rest props
  [propName: string]: any
}

export default function Button(props: ButtonProps) {
  const { color, size, format, variant, children, ...rest } = props
  return (
    <ButtonContainer
      color={color}
      size={size}
      format={format}
      variant={variant}
      {...rest}
    >
      {children}
    </ButtonContainer>
  )
}
