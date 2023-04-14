import { styled } from '..'
import { utils } from '../utils'

export const EmailSubscribeContainer = styled('section', {
  backgroundColor: '$primary600',
  color: '$white',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  zIndex: -2,
})

export const FullBackground = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100%',
  backgroundColor: '$primary600',
  zIndex: -1
})

export const Spacer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '60rem',
  width: '100%',
  ...utils.py('7.5rem'),
})

export const Info = styled('div', {
  maxWidth: '23.75rem',

  span: {
    color: '$primary200',
    marginTop: '0.25rem',
    ...utils.fs('2xl'),
  },

  p: {
    marginTop: utils.sizes.lg,
    ...utils.fs('lg'),
  },
})

export const SubscribeForm = styled('div', {
  maxWidth: '23.75rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  label: {
    paddingBottom: '0.5rem',
    ...utils.fs('sm'),
  },

  input: {
    border: 0,
    padding: utils.sizes.lg,
    paddingRight: utils.sizes['4xl'],
    borderRadius: 8,

    '&::placeholder': {
      color: '$secondary400',
    },
  },

  button: {
    cursor: 'pointer',
    border: 0,
    borderRadius: 32,
    backgroundColor: '$primary500',
    color: '$white',

    marginTop: utils.sizes['3xl'],
    ...utils.py('sm'),
    ...utils.fs('lg'),

    '&:hover': {
      backgroundColor: '$primary400',
    },
  },
})
