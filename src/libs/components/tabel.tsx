import {
  TableContainer,
  Table,
  TableHeadRow,
  TableBodyRow,
} from '@/styles/libs/components/table'
import { useEffect, useState } from 'react'

type Data = { [key: string]: any }

type Column = string

interface Props {
  data: Data[]
  columns: Column[]
  rows?: number // Number of rows displayed
}

export default function TableComponent({
  columns,
  data: values = [],
  rows = 10,
}: Props) {
  const [data, setData] = useState<Data[]>([])

  useEffect(() => setData(values.slice(0, rows)), [])

  const isShowingAllRows = values.length === data.length

  function handleNumberRows() {
    if (isShowingAllRows) setData(values.slice(0, rows))
    else setData(values)
  }

  return (
    <TableContainer>
      <Table cellPadding='0' cellSpacing='0'>
        <thead>
          <TableHeadRow>
            {columns.map((column: any) => (
              <th key={column}>{column}</th>
            ))}
          </TableHeadRow>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <TableBodyRow
              key={item.id}
              className={index % 2 === 0 ? 'row-even' : 'row-odd'}
            >
              {columns.map((column: any) => (
                <td key={column}>{item[column]}</td>
              ))}
            </TableBodyRow>
          ))}
        </tbody>
      </Table>

      <button onClick={handleNumberRows}>
        {isShowingAllRows ? 'View less -' : 'View more +'}
      </button>
    </TableContainer>
  )
}
