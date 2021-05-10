import { FC, memo } from "react";
import { Controller } from "react-hook-form";
import { useToggle } from "hooks";
import { classNames } from "utils";

import { SwitchBox } from "./switch-box";

export const Switch: FC<ISwitch> = memo(
  ({ label, checked, control, name, className, size, disabled, withError }) => {
    const { open, toggle } = useToggle(checked);

    if (control)
      return (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => (
            <div
              className={classNames(
                "flex items-center h-20 overflow-hidden",
                className
              )}
            >
              <div className="row-between mr-4">
                <SwitchBox
                  onChange={onChange}
                  open={open}
                  toggle={toggle}
                  size={size}
                  disabled={disabled}
                  withError={withError}
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
          )}
        />
      );
    else
      return (
        <div
          className={classNames(
            "flex items-center h-20 overflow-hidden",
            className
          )}
        >
          <div className="row-between mr-4">
            <SwitchBox
              open={open}
              toggle={toggle}
              size={size}
              disabled={disabled}
              withError={withError}
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
