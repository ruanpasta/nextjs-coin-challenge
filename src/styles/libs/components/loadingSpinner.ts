import { keyframes, styled } from '@/styles'
import { utils } from '@/styles/utils'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const LoadingSpinnerContainer = styled('div', {
  display: 'inline-block',
  width: utils.sizes['3xl'],
  height: utils.sizes['3xl'],
  borderRadius: '50%',
  border: '2px solid $secondary300',
  borderTopColor: '$primary500',
  animation: `${spin} 1s linear infinite`,
})
