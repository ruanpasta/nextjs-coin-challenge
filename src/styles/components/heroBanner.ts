import { styled } from '..'
import { utils } from '../utils'

export const HeroBannerContainer = styled('section', {
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',
})

export const HeroBannerContent = styled('div', {
  minHeight: '38rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  ...utils.pFull('lg'),

  [utils.mediaBreaks.md]: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: utils.sizes['5xl'],
  },

  [utils.mediaBreaks.sm]: {
    minHeight: '20rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export const HeroBannerCallToAction = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  maxWidth: '36.875rem',

  h1: {
    color: '$primary500',
    ...utils.fs('5xl'),
  },

  p: {
    marginTop: utils.sizes['lg'],
    color: '$textBase',
    ...utils.fs('xl'),
  },

  '& > button': {
    cursor: 'pointer',
    border: 0,
    borderRadius: 32,
    backgroundColor: '$primary500',
    color: '$white',
    maxWidth: '278px',

    textTransform: 'uppercase',

    fontWeight: 'bold',
    paddingLeft: '4.8rem',
    marginTop: utils.sizes['3xl'],
    ...utils.py('md'),
    ...utils.fs('lg'),

    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    '&:hover': {
      backgroundColor: '$primary400',
    },
  },
  
  [utils.mediaBreaks.sm]: {
    justifyContent: 'center',
    alignItems: 'center',

    h1: {
      marginTop: utils.sizes['3xl'],
      ...utils.fs('xl'),
      lineHeight: '32px'
    },

    p: {
      ...utils.fs('md'),
      lineHeight: '24px'
    },

    '& > button': {
      fontWeight: 'normal',
      marginTop: utils.sizes['2xl'],
      gap: '0.25rem',
      ...utils.fs('md'),
      ...utils.py('0.5rem'),
      ...utils.px('2.25rem'),
    }
  }
})

export const HeroBannerCTASessionButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: utils.sizes['2xl'],
  marginTop: '5rem',

  '& > button': {
    cursor: 'pointer',
    border: 0,
    borderRadius: 4,
    backgroundColor: '$primary100',
    color: '$primary500',

    ...utils.py('0.5rem'),
    ...utils.px('lg'),
    ...utils.fs('xl'),

    '&:hover': {
      backgroundColor: '$primary200',
    },
  },

  [utils.mediaBreaks.sm]: {
    marginTop: utils.sizes['2xl'],
    gap: utils.sizes.lg,

    '& > button': {
      ...utils.fs('sm'),
      ...utils.py('0.25rem'),
    }
  }
})

export const HeroBannerIllustrations = styled('aside', {
  maxWidth: '400px',
  display: 'flex',
  overflow: 'hidden',

  [utils.mediaBreaks.sm]: {
    display: 'none !important',
  },
})
