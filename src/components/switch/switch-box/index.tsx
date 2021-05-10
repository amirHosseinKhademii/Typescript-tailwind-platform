import { FC, memo } from "react";
import { useToggle } from "hooks";
import { classNames } from "utils";

export const SwitchBox: FC<ISwitch> = memo(
  ({ onChange, size, disabled, withError, checked }) => {
    const { open, toggle } = useToggle(checked);
    return (
      <div slot="wrapper">
        <div
          slot="toggle-wrapper"
          className={classNames(
            "flex items-center  rounded-full cursor-pointer px-1",
            open
              ? "bg-indigo-400 justify-end"
              : withError
              ? "bg-red-400 justify-start"
              : "bg-gray-400 justify-start",
            size === "small" ? " h-7 w-12" : " h-8 w-14"
          )}
          onClick={() => {
            if (!disabled && onChange) {
              onChange(!open);
              toggle();
            }
          }}
        >
          <div
            slot="toggle"
            className={classNames(
              " rounded-full border  ",
              open
                ? "bg-secondary border-indigo-700"
                : withError
                ? "bg-red-600 border-red-700"
                : "bg-gray-600 border-gray-700",
              size === "small" ? "w-5 h-5 " : "w-6 h-6 "
            )}
          />
        </div>
      </div>
    );
  }
);
