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
  maxWidth: 'calc(100vw - ((100vw - 1216px) /2))',
  ...utils.py('1.375rem'),

  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: utils.sizesToRem['2xl'],
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
  marginLeft: utils.sizesToRem['2xl'],
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: utils.sizesToRem['2xl'],
})

export const CryptoSlider = styled('div', {
  position: 'relative',
  marginRight: utils.sizesToRem['5xl'],
  height: utils.sizesToRem['xl'],
  width: '22rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
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
    marginRight: utils.sizesToRem.md
  },

  '&:hover': {
    animationPlayState: 'paused'
  }
})
