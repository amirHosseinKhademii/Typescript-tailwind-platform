import { FC, memo } from "react";
import { classNames } from "utils";

export const Error: FC<IError> = memo(({ error, className }) => {
  if (error && error.message)
    return (
      <p
        className={classNames(" text-xs mt-2 text-red-700", className)}
        slot="wrapper"
      >
        {error.message}
      </p>
    );
  else return null;
});
