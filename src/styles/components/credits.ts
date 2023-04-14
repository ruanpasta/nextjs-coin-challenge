import { styled } from '..'
import { utils } from '../utils'

export const CreditsContainer = styled('footer', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',
  ...utils.py('2xl'),
  ...utils.px('lg'),
})
