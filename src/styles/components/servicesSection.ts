import { styled } from '..'
import { utils } from '../utils'

export const ServicesSectionContainer = styled('section', {
  width: '100%',
  backgroundImage: 'linear-gradient(white, #f7f7f7)',
  display: 'flex',
  justifyContent: 'center',
})

export const ServicesSectionContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: utils.sizes['2xl'],
  paddingBottom: '8rem',
  flexWrap: 'wrap',
  alignItems: 'center',

  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',

  ...utils.px('lg'),

  ...utils.media(['sm', 'md'], {
    flexDirection: 'column-reverse',
    paddingBottom: '4rem',
  }),
})

export const ServicesSectionItems = styled('div', {
  marginTop: '5rem',

  ...utils.media(['sm', 'md'], {
    marginTop: 0,
    maxWidth: '272px',
  }),
})

export const ServicesSectionSolutions = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  gap: utils.sizes['4xl'],
  maxWidth: '40rem',
  height: 'auto',
  marginTop: utils.sizes['4xl'],

  [utils.mediaBreaks.sm]: {
    display: 'none',
  },
})

export const ServicesSectionSolutionsBelow = styled(ServicesSectionSolutions, {
  marginLeft: '5rem',

  ...utils.media(['sm', 'md'], {
    marginLeft: 0,
  }),
})

export const ServicesSectionSolutionsMobile = styled('div', {
  [utils.mediaBreaks.sm]: {
    marginTop: 0,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: 0,
    flexWrap: 'nowrap',
    overflow: 'hidden',
    maxWidth: '320px',
  },

  ...utils.media(['md', 'lg', 'xl'], {
    // Important nescessario para sobrescrever o keen-slider
    display: 'none !important',
  }),
})

export const ServicesSectionSolutionCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  borderRadius: 6,
  padding: utils.sizes['2xl'],
  backgroundColor: '$white',
  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.05)',

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
    ...utils.fs('md'),
  },

  [utils.mediaBreaks.sm]: {
    // Importants nescessarios para sobrescrever o keen-slider
    minWidth: '250px !important',
    maxWidth: '250px !important',
  },
})

export const ServicesSectionSolutionsCTA = styled('div', {
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

  [utils.mediaBreaks.sm]: {
    h4: {
      ...utils.fs('lg'),
      marginBottom: '0.25rem',
    },

    h2: {
      ...utils.fs('2xl'),
    },

    p: {
      fontSize: utils.sizes.md,
      marginTop: utils.sizes.lg,
    },

    button: {
      display: 'none',
    },
  },
})
