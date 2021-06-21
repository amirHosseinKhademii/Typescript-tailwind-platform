import { FC, memo } from "react";
import { classNames } from "utils";

export const InputInteractive: FC<IInput> = memo(
  ({ interactive, placeholder, open, label, error, withError }) => {
    if (interactive && placeholder)
      return (
        <span
          className={classNames(
            "absolute top-0 left-0 ml-2  z-50 px-1 rounded trans font-semibold  bg-white ",
            open ? "transform -translate-y-6 scale-105" : "hidden",
            label ? "mt-[37px]" : "mt-[7px]",
            error || withError ? "text-red-600" : "text-indigo-800"
          )}
        >
          {placeholder.substring(0, 40)}
        </span>
      );
    else return null;
  }
);
