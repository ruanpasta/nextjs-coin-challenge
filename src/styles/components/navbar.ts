import { keyframes, styled } from '..'
import { utils } from '../utils'


export const NavbarContainer = styled('nav', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  boxShadow: '0 8px 8px -2px rgba(0, 0, 0, 0.1)',
})

export const NavbarElements = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',
  ...utils.py('1.375rem'),
  ...utils.px('lg'),

  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: utils.sizes['2xl'],
    flexWrap: 'wrap',
  },

  a: {
    textDecoration: 'none',
    color: '$textBase',
    ...utils.fs('md'),

    '&:hover': {
      color: '$secondary500'
    }
  },

  button: {
    cursor: 'pointer',
    border: 0,
    borderRadius: 32,
    backgroundColor: '$primary500',
    color: '$white',
    ...utils.py('0.5rem'),
    ...utils.px('2xl'),
    ...utils.fs('md'),

    '&:hover': {
      backgroundColor: '$primary400'
    }
  }
})

export const PagesMenus = styled('div', {
  marginLeft: utils.sizes['2xl'],
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: utils.sizes['2xl'],
})

export const CryptoSlider = styled('div', {
  position: 'relative',
  marginRight: utils.sizes['5xl'],
  height: utils.sizes['xl'],
  width: '20rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
    display: 'block',

  ...utils.media(['sm', 'md', 'lg'], {
    display: 'none'
  }),

  ...utils.media('xl', {
    display: 'block'
  }),
})

const slide = keyframes({
  '0%': { transform: 'translateX(40%)' },
  '100%': { transform: 'translateX(-100%)' }
})

export const CryptoContent = styled('div', {
  position: 'absolute',
  left: 0,
  animation: `${slide} 15s infinite linear`,

  '& > span': {
    marginRight: utils.sizes.md
  },

  '&:hover': {
    animationPlayState: 'paused'
  }
})
