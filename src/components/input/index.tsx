import { FC, memo } from "react";
import { useToggle, useValidation } from "hooks";
import { Error } from "components";
import { classNames } from "utils";

export const Input: FC<IInput> = memo(
  ({
    error,
    label,
    type,
    placeholder,
    register,
    className,
    name,
    required,
    max,
    min,
    later,
    size,
    disabled,
    value,
    interactive,
    withError,
    icon,
    onClick,
  }) => {
    const { validate } = useValidation({ required, max, min, later });
    const { open, toggle } = useToggle();
    return (
      <div className={`w-full col-start relative ${className}`} slot="wrapper">
        {label && (
          <label
            slot="label"
            className={classNames(
              size === "small"
                ? "text-[10px] mb-1 text-gray-700"
                : "mb-2 text-gray-700",
              interactive && open && placeholder && "opacity-0 "
            )}
          >
            {label}
          </label>
        )}
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
            " w-full border rounded  focus:outline-none focus:shadow  text-gray-700 placeholder-gray-500 ",
            error || withError
              ? "border-red-400 shadow"
              : disabled
              ? "bg-gray-300"
              : "border-gray-300 focus:ring-2 focus:ring-indigo-400",
            size === "large"
              ? "h-14 "
              : size === "small"
              ? "h-8 text-[10px]"
              : "h-12",
            icon ? "px-10" : "px-4"
          )}
        />
        {interactive && placeholder && (
          <span
            className={classNames(
              "absolute top-0 left-0 ml-2  z-50 px-1 rounded trans font-semibold text-indigo-800 bg-white ",
              open ? "transform -translate-y-6 scale-105" : "hidden",
              label ? "mt-[37px]" : "mt-[7px]"
            )}
          >
            {placeholder}
          </span>
        )}
        {icon && (
          <div
            className={classNames(
              "absolute  left-3",
              label
                ? size === "small"
                  ? "top-6"
                  : "top-12"
                : size === "small"
                ? "top-2"
                : "top-4"
            )}
          >
            {icon()}
          </div>
        )}

        <Error error={error} />
      </div>
    );
  }
);
