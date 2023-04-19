import { styled } from '..'
import { utils } from '../utils'

export const CryptosSectionContainer = styled('section', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const CryptosSectionContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: utils.sizes['5xl'],
  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',
  width: '100%',

  ...utils.px('5%'),
  ...utils.py('5xl'),

  [utils.mediaBreaks.sm]: {
    ...utils.px('2xl'),
  },
})

export const CryptosSectionContentLabel = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '0.5rem',
})

export const CryptosSectionContentPositiveChange = styled('span', {
  color: '$tertiary700'
})

export const CryptosSectionContentNegativeChange = styled('span', {
  color: '$quartenary700'
})

export const CryptosSectionContentButton = styled('button', {
  cursor: 'pointer',
  border: 0,
  borderRadius: 32,
  backgroundColor: '$tertiary700',
  color: '$white',

  ...utils.px('1.5rem'),
  ...utils.py('0.5rem'),

  '&:hover': {
    backgroundColor: '$tertiary600',
  },

  [utils.mediaBreaks.sm]: {
    cursor: 'pointer',
    border: 0,
    backgroundColor: 'transparent',
    width: 'fit-content',

    color: '$primary500',
    ...utils.fs('lg'),

    '&:hover': {
      color: '$primary300',
    },
  },
})
