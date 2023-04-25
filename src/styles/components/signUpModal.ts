import { styled } from '..'
import { utils } from '../utils'

export const SignUpModalContainer = styled('div', {
  maxWidth: 272,
})

export const SignUpModalHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  marginBottom: utils.sizes.lg,

  ...utils.fs('lg'),

  '& > span': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    margin: '0 auto'
  }
})

export const SignUpModalMain = styled('div', {
  marginBottom: utils.sizes.lg,

  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: utils.sizes['2xl'],
  },
})

export const SignUpModalMainCheckbox = styled('div', {
  '& > label': {
    userSelect: 'none'
  }
})

export const SignUpModalFooter = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontWeight: 'bold',

  ...utils.fs('md')
})

export const SignUpModalCoin = styled('span', {
  color: '$primary500',
  fontWeight: 'bold'
})

export const SignUpModalSynch = styled('span', {
  color: '$secondary500',
  fontWeight: 'bold'
})
