import { FC, memo } from "react";
import { useToggle, useValidation } from "hooks";
import { Error } from "components";
import { classNames } from "utils";

export const TextArea: FC<ITextArea> = memo(
  ({
    error,
    label,
    placeholder,
    register,
    className,
    name,
    required,
    max,
    min,
    interactive,
  }) => {
    const { validate } = useValidation({ required, max, min });
    const { open, toggle } = useToggle();
    return (
      <div
        className={classNames("w-full col-start resize-y relative", className)}
      >
        {label && (
          <label
            className={classNames(
              "text-gray-800 mb-2",
              interactive && open && placeholder && "opacity-0 "
            )}
          >
            {label}
          </label>
        )}
        <textarea
          {...(register && { ...register(name, { validate }) })}
          placeholder={interactive ? (open ? null : placeholder) : placeholder}
          name={name}
          onFocus={() => toggle(true)}
          onBlur={() => toggle(false)}
          className={classNames(
            "w-full min-h-[3rem] h-12 border rounded  focus:outline-none focus:shadow px-4 py-2 text-gray-700 placeholder-gray-500",
            error
              ? "border-red-400"
              : "border-gray-300 focus:ring-2  focus:ring-indigo-400"
          )}
        />
        {interactive && placeholder && (
          <span
            className={classNames(
              "absolute top-0 left-0 ml-4  z-50 px-1 rounded trans font-semibold text-indigo-700 bg-white ",
              open ? "transform -translate-y-6 scale-105" : "hidden",
              label ? "mt-[40px]" : "mt-[10px]"
            )}
          >
            {placeholder}
          </span>
        )}
        <Error error={error} />
      </div>
    );
  }
);
