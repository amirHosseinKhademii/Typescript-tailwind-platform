import { FC, memo, useMemo } from "react";
import { Button } from "components";
import { classNames } from "utils";

export const Pagination: FC<IPagination> = memo(
  ({ className, total, page, onPaginate, disabled }) => {
    const pages = useMemo(
      () =>
        Array.from(new Array(total))
          .map((item, index) => index)
          .slice(page === 1 ? 0 : page - 2, page === 1 ? 5 : page + 3)
          .filter((item) => item !== total - 1),
      [page, total]
    );

    return (
      <div className={`w-full row-between ${className}`} slot="wrapper">
        <div />
        {total > 1 && (
          <div className="row-items-center">
            {page > 2 && (
              <>
                <Button
                  onClick={() => onPaginate(1)}
                  disabled={disabled}
                  className={classNames(
                    "w-8 h-8  disabled:opacity-30",
                    page === 1 && "bg-secondary text-white"
                  )}
                >
                  1
                </Button>
                <span className="mx-4">...</span>
              </>
            )}

            {pages.map((item, index) => (
              <Button
                key={index}
                onClick={() => onPaginate(item + 1)}
                disabled={disabled}
                className={classNames(
                  "w-8 h-8  mr-2 disabled:opacity-30",
                  page === item + 1 && "bg-secondary text-white"
                )}
              >
                {item + 1}
              </Button>
            ))}

            {total > 2 && (
              <>
                <span className="mx-4">...</span>
                <Button
                  onClick={() => onPaginate(total)}
                  disabled={disabled}
                  className={classNames(
                    "w-8 h-8  disabled:opacity-30",
                    page === total && "bg-secondary text-white"
                  )}
                >
                  {total}
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
);
