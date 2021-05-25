import { FC, memo } from "react";
import { classNames } from "utils";
import { useToggle } from "hooks";

import { TableCell } from "../table-cell";

export const TableRow: FC<ITableRow> = memo(
  ({ item, columns, expand, loading }) => {
    const { open, toggle } = useToggle();

    return (
      <div
        className={classNames(
          "w-full flex flex-col border-b border-gray-200 bg-white ",
          loading && "opacity-70"
        )}
      >
        {item ? (
          <div
            onClick={() => (expand ? toggle() : {})}
            className={classNames(
              "w-full row-start py-4 px-6 ",
              open ? "bg-primary" : "hover:bg-cyan-100",
              expand && "cursor-pointer"
            )}
          >
            {(columns || []).map((column, index) => (
              <TableCell
                key={index}
                item={item}
                index={index}
                column={column}
                columns={columns}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-[60px] grid grid-cols-4 gap-x-64 px-6 py-4">
            <div className="h-8 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-8 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-8 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-8 w-full rounded bg-gray-200 animate-pulse" />
          </div>
        )}
        {open && expand ? (
          <div className="w-full row-start p-4 bg-primary">{expand(item)}</div>
        ) : null}
      </div>
    );
  }
);
