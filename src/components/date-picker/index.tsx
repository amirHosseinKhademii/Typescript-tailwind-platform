import { FC, memo } from "react";
import { Controller } from "react-hook-form";
import DatePickerReact from "react-datepicker";
import { Error } from "components";
import { useValidation } from "hooks";
import { classNames } from "utils";

import "react-datepicker/dist/react-datepicker.css";

export const DatePicker: FC<IDatePicker> = memo(
  ({
    error,
    name,
    className,
    value,
    required,
    later,
    validation,
    label,
    control,
    year,
  }) => {
    const { validate } = useValidation({
      required,
      later,
      validation,
    });

    if (control)
      return (
        <Controller
          control={control}
          name={name}
          rules={{ validate }}
          render={({ field: { onChange } }) => (
            <div className={`w-full col-start ${className}`}>
              {label && <label className="text-gray-800 mb-2">{label}</label>}
              <DatePickerReact
                selected={
                  value && typeof value === "object" ? value : new Date()
                }
                onChange={(date) => onChange(date)}
                closeOnScroll={true}
                placeholderText="Click here"
                style={{ width: "100%" }}
                dateFormat="yyyy/MM/dd"
                showYearPicker={year}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className={classNames(
                  " w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900 bg-white h-12  px-4",
                  error
                    ? "border-2 border-red-400 shadow"
                    : "border border-gray-300"
                )}
              />
              <Error error={error} />
            </div>
          )}
        />
      );
    else return null;
  }
);
