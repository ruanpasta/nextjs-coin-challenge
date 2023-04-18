import { styled } from '..'
import { utils } from '../utils'

export const PageDividerContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  height: '15.375rem',
  position: 'relative',
  zIndex: -2,

  [utils.mediaBreaks.sm]: {
    marginTop: '-4rem'
  }
})

export const FullBackground = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100%',
  zIndex: -1,

  img: {
    width: '100%',
    objectFit: 'cover'
  },
})
