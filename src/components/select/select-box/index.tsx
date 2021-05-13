import { FC, memo } from "react";
import { classNames } from "utils";
import { SelectBoxActions } from "./select-box-actions";
import { SelectBoxValue } from "./select-box-value";

export const SelectBox: FC<ISelect> = memo(
  ({ toggle, value, error, multiple, setValue, name, ref }) => {
    return (
      <div
        role="toggler"
        onClick={() => toggle()}
        className={classNames(
          " w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900 bg-white",
          multiple ? "min-h-[3rem]  py-2 pl-2 pr-4" : "h-12  px-4",
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
    );
  }
);
