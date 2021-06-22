import { FC, memo } from "react";
import { classNames } from "utils";

export const TextAreaLabel: FC<IInput> = memo(({ label }) => {
  if (label)
    return <label className={classNames("text-gray-800 mb-2")}>{label}</label>;
  else return null;
});
