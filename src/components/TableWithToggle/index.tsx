import { useState } from 'react'
import Toggle from '../Toggle'
import './styles.css'

export type Column = {
  id: string
  name: string
  email: string
  address: string
  phone: string
  company: string
  is_active: boolean
}

export type Row = {
  id: string
  values: Record<string, string | boolean>
}

export type TableProps = {
  columns: Column[]
  rows: Row[]
}

const Table = ({ columns, rows }: TableProps) => {
  const [list, setList] = useState<Row[]>(rows)

  const handleToggle = (id: string) => {
    console.log(id)
    const newList = list.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          values: {
            ...row.values,
            is_active: !row.values.is_active
          }
        }
      }
      return row
    })
    setList(newList)
  }

  const handleSpan = (id: string) => {
    console.log(id)
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th className="th-item" key={column.id}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map((row) => (
            <>
              <tr className="tr-item">
                {columns.map((column) => (
                  <td className="td-item" key={column.id}>
                    {column.id === 'is_active' ? (
                      <>
                        <Toggle
                          id={row.id}
                          checked={row.values.is_active as boolean}
                          onChange={() => handleToggle(row.id)}
                        />
                      </>
                    ) : (
                      row.values[column.id]
                    )}
                  </td>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
