import { FC, memo } from "react";
import { classNames } from "utils";

export const Error: FC<IError> = memo(({ error, className }) => {
  if (error && typeof error === "string")
    return (
      <p
        className={classNames(" text-xs mt-2 text-red-700", className)}
        slot="wrapper"
      >
        {error}
      </p>
    );
  else return null;
});
