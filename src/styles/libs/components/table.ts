import { styled } from '@/styles'
import { utils } from '@/styles/utils'

export const TableContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: utils.sizes.lg,
  textTransform: 'capitalize',

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

  [utils.mediaBreaks.sm]: {
    ...utils.fs('sm'),
    lineHeight: utils.sizes.md,
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

    '&.table-head-row--mobile-last-item': {
      textAlign: 'right',
      
    }
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

  '& > .table-body-row--arrow': {
    color: '$primary500',
    textAlign: 'right',
    ...utils.fs('lg')
  }
})

export const TableBodyRowExpandedColumn = styled('td', {
  borderTop: '1px solid $secondary100',
  borderBottom: '1px solid $secondary100',

  '& > div': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '0.5rem',
  },

  '&:hover': {
    backgroundColor: '$primary100',
  },
})

export const TableBodyRowExpandedColumnKey = styled('span', {
  color: '$secondary500',
})

export const TableBodyRowExpandedColumnValue = styled('span', {
  ...utils.fs('md'),
})

export const TableData = styled('td', {})
