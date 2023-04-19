import { keyframes, styled } from '..'
import { utils } from '../utils'

export const NavbarContainer = styled('nav', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  boxShadow: '0 8px 8px -2px rgba(0, 0, 0, 0.1)',

  ...utils.media(['sm', 'md', 'lg'], {
    flexDirection: 'column',
  }),
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
      color: '$secondary500',
    },
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
      backgroundColor: '$primary400',
    },
  },
})

export const NavbarItem = styled('div', {})

export const PagesMenus = styled('div', {
  marginLeft: utils.sizes['2xl'],
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: utils.sizes['2xl'],

  [utils.mediaBreaks.sm]: {
    display: 'none',
  },
})

export const CryptoSlider = styled('div', {
  position: 'relative',
  marginRight: utils.sizes['5xl'],
  height: utils.sizes['xl'],
  width: '20rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  ...utils.media(['sm', 'md', 'lg'], {
    borderTop: '1px solid $secondary100',
    height: utils.sizes['3xl'],
    width: '100%',
    ...utils.py('0.25rem'),
  }),
})

const slide = (startTranslate: number) =>
  keyframes({
    '0%': { transform: `translateX(${startTranslate}%)` },
    '100%': { transform: 'translateX(-100%)' },
  })

export const CryptoContent = styled('div', {
  position: 'absolute',
  display: 'flex',
  gap: '1rem',
  left: 0,
  animation: `${slide(50)} 20s infinite linear`,

  '& > span': {
    marginRight: utils.sizes.md,
  },

  '&:hover': {
    animationPlayState: 'paused',
  },

  [utils.mediaBreaks.sm]: {
    top: '0.5rem',
  },

  ...utils.media(['md', 'lg'], {
    animation: `${slide(50)} 20s infinite linear`,
  }),
})

export const CryptoContentItem = styled('span', {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',

  '& .crypto-content__change--positive': {
    color: '$tertiary700',
  },

  '& .crypto-content__change--negative': {
    color: '$quartenary700',
  },
})
