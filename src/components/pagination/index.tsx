import { FC, memo, useMemo } from "react";
import { Button } from "components";
import { classNames } from "utils";
import { ICChevronLeft, ICChevronRight } from "icons";

export const Pagination: FC<IPagination> = memo(
  ({ className, total, page, onPaginate, disabled }) => {
    const pages = useMemo(
      () => Array.from(new Array(total)).slice(page, page + 5),
      [page, total]
    );

    return (
      <div className={`w-full row-between ${className}`} slot="wrapper">
        <div />
        {total / 10 > 1 && (
          <div className="row-items-center">
            {/* <ICChevronLeft
            className="w-4 h-4 text-gray-700 mr-3"
            role="left-arrow"
          /> */}
            {pages.map((item, index) => (
              <Button
                key={index}
                onClick={() => onPaginate(index + 1)}
                disabled={disabled}
                className={classNames(
                  "w-8 h-8  mr-2 disabled:opacity-30",
                  page === index + 1 && "bg-secondary text-white"
                )}
              >
                {index + 1}
              </Button>
            ))}
            {total > 5 && (
              <>
                <span className="mx-4">......</span>
                <Button
                  onClick={() => onPaginate(total)}
                  disabled={disabled}
                  className={classNames(
                    "w-8 h-8  ml-2 disabled:opacity-30",
                    page === total && "bg-secondary text-white"
                  )}
                >
                  {total}
                </Button>
              </>
            )}
            {/* <ICChevronRight
            className="w-4 h-4 text-gray-700 ml-2"
            role="right-arrow"
          /> */}
          </div>
        )}
      </div>
    );
  }
);
