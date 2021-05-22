import { FC, memo } from "react";
import { Pagination } from "components";
import { classNames } from "utils";

import { TableHead } from "./table-head";
import { TableRow } from "./table-row";
import { ICLoading } from "icons/loading";

export const Table: FC<ITable> = memo(
  ({
    className,
    columns,
    data,
    expand,
    onPaginate,
    loading,
    page,
  }) => {
    return (
      <div
        className={classNames("w-full flex flex-col items-center", className)}
        slot="wrapper"
      >
        <TableHead columns={columns} />
        {loading && !data ? (
          <ICLoading className="w-14 h-14 text-gray-400 self-center justify-self-center mt-14" />
        ) : (
          (data || []).map((item, index) => (
            <TableRow
              key={index}
              item={item}
              columns={columns}
              index={index}
              expand={expand}
              loading={loading}
            />
          ))
        )}
        {data && (
          <Pagination
            className="mt-10"
            total={data.length}
            page={page}
            onPaginate={onPaginate}
            disabled={loading}
          />
        )}
      </div>
    );
  }
);
