import { styled } from "@/styles"
import { utils } from "@/styles/utils"

export const SignInModalContainer = styled('div', {
  maxWidth: 272,
})

export const SignInModalHeader = styled('div', {
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

export const SignInModalMain = styled('div', {
  marginBottom: utils.sizes.lg,

  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: utils.sizes['2xl'],
  },
})

export const SignInModalFooter = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontWeight: 'bold',

  ...utils.fs('md')
})

export const SignInModalCoin = styled('span', {
  color: '$primary500',
  fontWeight: 'bold'
})

export const SignInModalSynch = styled('span', {
  color: '$secondary500',
  fontWeight: 'bold'
})
