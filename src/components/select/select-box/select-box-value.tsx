import { FC, memo } from "react";

export const SelectBoxValue: FC<ISelect> = memo(({ multiple, value }) => {
  if (multiple && value && value.length > 0)
    return (
      <div className="w-10/12 flex-row justify-start items-center ">
        {(value || []).map((val, index) => (
          <span className="text-gray-700" key={index}>
            {val}
            {value.length - 1 === index ? " " : " , "}
          </span>
        ))}
      </div>
    );
  else return <span className="text-gray-700">{value}</span>;
});
