import useWindowSize from '@/hooks/useWindowSize'
import {
  TableContainer,
  Table,
  TableHeadRow,
  TableBodyRow,
  TableBodyRowExpandedColumn,
  TableBodyRowExpandedColumnKey,
  TableBodyRowExpandedColumnValue,
} from '@/styles/libs/components/table'
import { useEffect, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

type Data = { [key: string]: any }

interface Props {
  data: Data[]
  rows?: number // Number of rows displayed
  mainRow?: string
  expandableColumn?: string
  expandedColumns?: string[]
}

export default function TableComponent({
  data: values = [],
  rows = 10,
  mainRow = '',
  expandableColumn = '',
  expandedColumns = [],
}: Props) {
  const [data, setData] = useState<Data[]>([])
  const [columns, setColumns] = useState<String[]>([])

  const isShowingAllRows = values.length === data.length
  const size = useWindowSize()
  const isMobile = size.width < 321

  useEffect(() => {
    const nextData = values.slice(0, rows)

    if (isMobile && mainRow) {
      const mobileColumns = [mainRow, expandableColumn]
      const mobileData = nextData.map((item) => ({ expanded: false, ...item }))

      setColumns(mobileColumns)
      setData(mobileData)
    } else {
      setData(nextData)
      setColumns(Object.keys(values[0]))
    }
  }, [isMobile])

  function handleNumberRows() {
    if (isShowingAllRows) setData(values.slice(0, rows))
    else setData(values)
  }

  function handleExpandColumn(itemId: string) {
    const nextData = data.map((item) => {
      if (item.id === itemId) return { ...item, expanded: !item.expanded }
      return item
    })

    setData(nextData)
  }

  function getTableBodyRow(item: any) {
    return columns.map((column: any) => {
      if (isMobile && column === expandableColumn) {
        return item.expanded ? (
          <td
            key={`${item.id}-${column}`}
            onClick={() => handleExpandColumn(item.id)}
            className='table-body-row--arrow'
          >
            <AiOutlineArrowUp />
          </td>
        ) : (
          <td
            key={`${item.id}-${column}`}
            onClick={() => handleExpandColumn(item.id)}
            className='table-body-row--arrow'
          >
            <AiOutlineArrowDown />
          </td>
        )
      }
      return <td key={`${item.id}-${column}`}>{item[column]}</td>
    })
  }

  function getTableBodyExpandedRow(item = []) {
    console.log(item)
    return Object.entries(item)
      .filter(([key]) => expandedColumns.includes(key))
      .map(([key, value]: any) => {
        return (
          <div>
            <TableBodyRowExpandedColumnKey>{key}</TableBodyRowExpandedColumnKey>
            <TableBodyRowExpandedColumnValue>
              {value}
            </TableBodyRowExpandedColumnValue>
          </div>
        )
      })
  }

  function setClass(index: number): string {
    console.log(columns.length, index )
    const canSetClass = columns.length === (index + 1) && isMobile
    return canSetClass ? 'table-head-row--mobile-last-item' : ''
  }

  return (
    <TableContainer>
      <Table cellPadding='0' cellSpacing='0'>
        <thead>
          <TableHeadRow>
            {columns.map((column: any, index: number) => (
              <th key={column} className={setClass(index)}>
                {column}
              </th>
            ))}
          </TableHeadRow>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <>
              <TableBodyRow
                key={item.id}
                className={index % 2 === 0 ? 'row-even' : 'row-odd'}
              >
                {getTableBodyRow(item)}
              </TableBodyRow>
              {item.expanded && (
                <TableBodyRow key={`${item.id}-expanded`}>
                  <TableBodyRowExpandedColumn colSpan={expandedColumns.length}>
                    {getTableBodyExpandedRow(item)}
                  </TableBodyRowExpandedColumn>
                </TableBodyRow>
              )}
            </>
          ))}
        </tbody>
      </Table>

      <button onClick={handleNumberRows}>
        {isShowingAllRows ? 'View less -' : 'View more +'}
      </button>
    </TableContainer>
  )
}
