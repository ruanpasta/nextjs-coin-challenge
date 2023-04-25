import { styled } from '..'
import { utils } from '../utils'

export const DashboardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > header': {
    width: '100%',
  },
})

export const DashboardNavbar = styled('nav', {
  backgroundColor: '$white',
  boxShadow: '0 8px 8px -2px rgba(0, 0, 0, 0.1)',
  padding: utils.sizes.md,
  marginBottom: utils.sizes.sm
})
