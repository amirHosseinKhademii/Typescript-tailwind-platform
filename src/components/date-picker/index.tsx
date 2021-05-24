import { FC, useMemo } from "react";
import { Error, Button } from "components";
import { useValidation } from "hooks";
import { ICDelete } from "icons";
import { classNames } from "utils";
import { v4 as uuid } from "uuid";

export const DatePicker: FC<IDatePicker> = ({
  error,
  name,
  className,
  value,
  register,
  required,
  later,
  validation,
  disabled,
  withError,
  size,
  icon,
  label,
  setValue,
}) => {
  const { validate } = useValidation({
    required,
    later,
    validation,
  });

  const id = useMemo(() => uuid(), []);

  return (
    <div className={`w-full  ${className}`}>
      <input
        {...(register && { ...register(name, { validate }) })}
        type="date"
        className="hidden"
        id={id}
        slot="input"
        name={name}
        disabled={disabled}
        value={value}
      />
      <label htmlFor={id} className="w-full col-start ">
        {label && (
          <label
            className={classNames(
              "text-gray-800 mb-2",
              size === "small" ? "text-xs" : "text-base"
            )}
          >
            {label}
          </label>
        )}
        <div
          className={classNames(
            " w-full flex items-center justify-between  rounded focus:outline-none focus:shadow  text-gray-900 placeholder-gray-500 ",
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
        >
          <span>{value ? value : "yyyy-mm-dd"}</span>
          {value && (
            <Button
              type="button"
              icon
              onClick={(e) => {
                e.stopPropagation();
                if (setValue) {
                  setValue(name, "");
                }
              }}
            >
              <ICDelete role="delete" className="w-4 h-4 text-red-500  z-30" />
            </Button>
          )}
        </div>
      </label>
      <Error error={error} />
    </div>
  );
};
