import { styled } from '..'
import { utils } from '../utils'

export const ServicesSectionContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  gap: utils.sizes['2xl'],
  paddingBottom: '8rem',

  backgroundImage: 'linear-gradient(white, #f7f7f7)',

  position: 'relative',
  zIndex: -2
})

export const FullBackground = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100%',
  backgroundImage: 'linear-gradient(white, #f7f7f7)',
  zIndex: -1
})

export const ServicesSectionItems = styled('div', {
  marginTop: '5rem'
})

export const Solutions = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexWrap: 'wrap',
  gap: utils.sizes['4xl'],
  maxWidth: '40rem',
  height: 'auto',
  marginTop: '2.5rem'
})

export const SolutionsBelow = styled(Solutions, {
  marginLeft: '5rem',
})

export const SolutionCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  borderRadius: 6,
  padding: utils.sizes['2xl'],
  backgroundColor: '$white',
  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.05)',
  maxHeight: '16.75rem',
  minWidth: '15.5rem',
  maxWidth: '15.5rem',

  '& > *': {
    maxWidth: '11.25rem',
  },

  span: {
    marginTop: utils.sizes['2xl'],
    color: '$primary500',
    fontWeight: 'bold',
  },

  h4: {
    marginTop: '0.25rem',
  },

  p: {
    marginTop: utils.sizes.sm,
    ...utils.fs('md')
  },
})

export const SolutionsCTA = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '25.375rem',

  h4: {
    color: '$primary500',
    marginBottom: utils.sizes.md,
  },

  p: {
    fontSize: 'lg',
    lineHeight: utils.sizes.xl,
    marginTop: utils.sizes.lg,
  },

  button: {
    cursor: 'pointer',
    border: 0,
    borderRadius: 32,
    backgroundColor: '$primary500',
    color: '$white',
    maxWidth: '11rem',

    marginTop: utils.sizes['3xl'],
    ...utils.py('md'),
    ...utils.fs('lg'),

    '&:hover': {
      backgroundColor: '$primary400',
    },
  },
})
