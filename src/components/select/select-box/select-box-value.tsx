import { FC, memo } from "react";

export const SelectBoxValue: FC<ISelect> = memo(({ multiple, value }) => {
  if (multiple && value && value.length > 0)
    return (
      <div className="flex-row justify-start items-center space-x-1 space-y-1">
        {(value || []).map((val, index) => (
          <span className="text-gray-700 bg-gray-100 rounded px-2" key={index}>
            {val}
          </span>
        ))}
      </div>
    );
  else return <span className="text-gray-700">{value}</span>;
});
