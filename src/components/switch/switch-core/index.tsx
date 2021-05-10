import { FC, memo } from "react";
import { classNames } from "utils";
import { SwitchBox } from "../switch-box";

export const SwitchCore: FC<ISwitch> = memo(
  ({ className, onChange, size, disabled, withError, label, checked }) => {
    return (
      <div
        className={classNames(
          "flex items-center h-20 overflow-hidden",
          className
        )}
      >
        <div className="row-between mr-4">
          <SwitchBox
            onChange={onChange}
            size={size}
            disabled={disabled}
            withError={withError}
            checked={checked}
          />
        </div>
        <span
          className={classNames(
            size === "small" ? "text-xs" : "text-base",
            withError ? "text-red-700" : "text-gray-800"
          )}
        >
          {label}
        </span>
      </div>
    );
  }
);
