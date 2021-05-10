import { FC, memo } from "react";
import { classNames } from "utils";

export const SwitchBox: FC<ISwitch> = memo(
  ({ onChange, toggle, open, size, disabled, withError }) => (
    <div slot="wrapper">
      <div
        slot="toggle-wrapper"
        className={classNames(
          "flex items-center   px-1 rounded-full cursor-pointer drop-shadow-lg",
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
  )
);
