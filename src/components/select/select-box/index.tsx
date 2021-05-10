import { FC, memo } from "react";
import { classNames } from "utils";
import { SelectBoxActions } from "./select-box-actions";
import { SelectBoxValue } from "./select-box-value";

export const SelectBox: FC<ISelect> = memo(
  ({ toggle, value, error, multiple, setValue, name, ref }) => {
    return (
      <div
        className="w-full flex-col bg-white rounded"
        ref={ref}
        slot="wrapper"
      >
        <div
          role="toggler"
          onClick={() => toggle()}
          className={classNames(
            " w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900",
            multiple ? "min-h-[3rem]  p-2 " : "h-12  px-4",
            error ? "border-2 border-red-400 shadow" : "border border-gray-300"
          )}
        >
          <SelectBoxValue multiple={multiple} value={value} />
          <SelectBoxActions
            multiple={multiple}
            value={value}
            setValue={setValue}
            name={name}
          />
        </div>
      </div>
    );
  }
);
