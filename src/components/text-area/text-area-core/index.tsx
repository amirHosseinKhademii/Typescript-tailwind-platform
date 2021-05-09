import { FC, memo } from "react";
import { classNames } from "utils";

export const TextAreatCore: FC<IInput> = memo(
  ({
    interactive,
    placeholder,
    open,
    register,
    name,
    toggle,
    error,
    validate,
  }) => {
    return (
      <textarea
        {...(register && { ...register(name, { validate }) })}
        placeholder={interactive ? (open ? null : placeholder) : placeholder}
        name={name}
        onFocus={() => toggle(true)}
        onBlur={() => toggle(false)}
        className={classNames(
          "w-full min-h-[3rem] h-12  rounded  focus:outline-none focus:shadow px-4 py-2 text-gray-700 placeholder-gray-500",
          error
            ? "border-2 border-red-400"
            : "border border-gray-300 focus:ring-2  focus:ring-indigo-400"
        )}
      />
    );
  }
);
