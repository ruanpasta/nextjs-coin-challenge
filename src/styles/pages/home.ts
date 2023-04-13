import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > header': {
    width: '100%',
  },
})

export const LandingPage = styled('div', {
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',
})

export const LandingPageDivider = styled('div', {
  img: {
    top: '45rem',
    width: '100%',
    left: 0,
  },
})
