import { FC, memo } from "react";
import { classNames } from "utils";
import { SwitchBox } from "../switch-box";

export const SwitchCore: FC<ISwitch> = memo(
  ({ className, onChange, size, disabled, withError, label, checked }) => {
    return (
      <div
        className={classNames(
          "flex items-center overflow-hidden",
          className,
          size === "small" ? "h-12" : "h-20"
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
            size === "small" ? "text-[11px] md:text-xs" : "text-base",
            withError ? "text-red-700" : "text-gray-800"
          )}
        >
          {label}
        </span>
      </div>
    );
  }
);
