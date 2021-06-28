import { FC, memo } from "react";
import { classNames } from "utils";

export const InputLabel: FC<IInput> = memo(({ label, size }) => {
  if (label)
    return (
      <label
        className={classNames(
          "text-gray-800 mb-2",
          size === "small" ? "text-xs" : "text-base"
        )}
      >
        {label}
      </label>
    );
  else return null;
});
