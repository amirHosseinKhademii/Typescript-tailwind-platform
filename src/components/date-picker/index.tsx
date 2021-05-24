import { FC, memo, useMemo } from "react";
import { Controller } from "react-hook-form";
import DatePickerReact from "react-datepicker";
import { Error } from "components";
import { useValidation } from "hooks";
import { classNames } from "utils";
import { v4 as uuid } from "uuid";

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
    const id = useMemo(() => uuid(), []);

    if (control)
      return (
        <Controller
          control={control}
          name={name}
          rules={{ validate }}
          render={({ field: { onChange } }) => (
            <div className={`w-full col-start relative ${className}`}>
              {label && <label className="text-gray-800 mb-2">{label}</label>}
              <DatePickerReact
                onChange={(date) => onChange(date.toISOString())}
                closeOnScroll={true}
                placeholderText="Click here"
                dateFormat="yyyy/MM/dd"
                showYearPicker={year}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className=" z-50 opacity-0"
                id={id}
              />
              <label
                htmlFor={id}
                className={classNames(
                  " w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900 bg-white h-12  px-4 absolute top-8 right-0 z-0",
                  error
                    ? "border-2 border-red-400 shadow"
                    : "border border-gray-300"
                )}
              >
                {value ? value.slice(0, 10) : "YYYY-MM-DD"}
              </label>
              <Error error={error} className="mt-[30px]" />
            </div>
          )}
        />
      );
    else return null;
  }
);
