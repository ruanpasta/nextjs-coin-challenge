import { styled } from '..'

export const PageDividerContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  height: '15.375rem',
  position: 'relative',
  zIndex: -2,
})

export const FullBackground = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100%',
  zIndex: -1,

  img: {
    width: '100%',
  },
})
