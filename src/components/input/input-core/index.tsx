import { FC, memo } from "react";
import { classNames } from "utils";

export const InputCore: FC<IInput> = memo(
  ({
    interactive,
    placeholder,
    open,
    register,
    type,
    name,
    disabled,
    value,
    onClick,
    toggle,
    error,
    withError,
    size,
    validate,
    icon,
  }) => {
    return (
      <input
        {...(register && { ...register(name, { validate }) })}
        slot="input"
        type={type}
        placeholder={interactive ? (open ? null : placeholder) : placeholder}
        name={name}
        disabled={disabled}
        value={value}
        onClick={onClick}
        onFocus={() => toggle(true)}
        onBlur={() => toggle(false)}
        className={classNames(
          " w-full  rounded focus:outline-none focus:shadow  text-gray-900 placeholder-gray-500 ",
          error || withError
            ? "border-2 border-red-400 shadow"
            : disabled
            ? "bg-gray-300"
            : "border border-gray-300 focus:ring-2 focus:ring-indigo-400",
          size === "large"
            ? "h-14 "
            : size === "small"
            ? "h-8 text-[10px]"
            : "h-12",
          icon ? "px-10" : "px-4"
        )}
      />
    );
  }
);
