import { FC, memo } from "react";
import { classNames } from "utils";

export const TableRowLoading: FC<ITable> = memo(({ columns }) => {
  return (
    <div className="w-full row-start h-[60px] px-6 py-4">
      {columns.map((column, index) => (
        <div
          key={index}
          className={classNames(
            "h-8 rounded bg-gray-200 animate-pulse",
            column.width
          )}
        />
      ))}
    </div>
  );
});
