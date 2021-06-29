import { FC, memo } from 'react'

import { classNames } from 'utils'

export const TableCell: FC<ITableCell> = memo(
  ({ column, index, item, columns }) => {
    return (
      <div
        slot="wrapper"
        className={classNames(
          'flex items-center',
          index === columns.length - 1 ? ' justify-end' : 'justify-start',
          column.width
        )}
      >
        {column.render ? (
          column.render(item)
        ) : (
          <span className="text-gray-600 text-lg"> {item[column.key]}</span>
        )}
      </div>
    )
  }
)
