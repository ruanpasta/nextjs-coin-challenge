import { styled } from '@/styles'
import { utils } from '@/styles/utils'

export const TableContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: utils.sizes.lg,

  button: {
    cursor: 'pointer',
    border: 0,
    backgroundColor: 'transparent',
    width: 'fit-content',

    color: '$primary500',
    ...utils.fs('lg'),

    '&:hover': {
      color: '$primary300',
    },
  },
})

export const Table = styled('table', {
  width: '100%',
  color: '$textBase',
  textAlign: 'left',
  ...utils.fs('lg'),

  th: {
    ...utils.px('sm'),
  },

  td: {
    padding: utils.sizes.sm,
  },
})

export const TableHead = styled('thead', {})
export const TableBody = styled('tbody', {})

export const TableHeadRow = styled('tr', {
  th: {
    paddingBottom: '0.5rem',
    color: '$secondary500',
    ...utils.fs('md'),
    fontWeight: 'normal',
  },
})

export const TableBodyRow = styled('tr', {
  '&.row-even': {
    backgroundColor: '$white',

    '&:hover': {
      backgroundColor: '$primary100',
    },
  },

  '&.row-odd': {
    backgroundColor: '$secondary100',

    '&:hover': {
      backgroundColor: '$primary100',
    },
  },
})

export const TableData = styled('td', {})
