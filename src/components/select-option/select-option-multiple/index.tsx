import { FC, memo } from "react";
import { Check } from "components";
import { classNames } from "utils";
import { useSelectOption } from "../use-select-option";

export const SelectOptionMultiple: FC<ISelectOption> = memo(
  ({ key, disabled, onChange, value, toggle, onClick, children, state }) => {
    const { handleChange } = useSelectOption({ state });
    return (
      <div
        slot="wrapper"
        className={classNames(
          "w-full row-start z-40",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        )}
        onClick={(e) => {
          if (!disabled) {
            e.stopPropagation();
            handleChange({ value, onChange });
            onClick && onClick(toggle);
          }
        }}
      >
        <Check checked={state.includes(value)} className="mr-3" />
        <span
          slot="child"
          key={key}
          className={classNames(
            "w-full flex items-center py-2 hover:text-indigo-700",
            state && state.includes(value)
              ? "text-indigo-700 font-semibold"
              : " text-gray-600"
          )}
        >
          {children}
        </span>
      </div>
    );
  }
);
