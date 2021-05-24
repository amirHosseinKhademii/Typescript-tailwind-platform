import { FC, memo, useMemo } from "react";
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
    onChange,
  }) => {
    const actualValue = useMemo(() => {
      switch (typeof value) {
        case "string":
          return value;
        case "object":
          if (value.length) {
            return value.join(",");
          } else return "";
        default:
          break;
      }
    }, [value]);

    if (register)
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
    else
      return (
        <input
          slot="input"
          type={type}
          placeholder={interactive ? (open ? null : placeholder) : placeholder}
          name={name}
          disabled={disabled}
          value={actualValue}
          onClick={onClick}
          onFocus={() => toggle(true)}
          onBlur={() => toggle(false)}
          onChange={onChange}
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
