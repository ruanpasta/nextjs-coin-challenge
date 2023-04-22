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

export const SignUpModalFooter = styled('div', {})

export const SignUpModal = styled('div', {})
