import { FC, memo } from "react";
import { useValidation } from "hooks";
import { Error } from "components";

import { InputLabel } from "./input-label";
import { InputCore } from "./input-core";
import { InputIcon } from "./input-icon";
import { Controller } from "react-hook-form";

export const Input: FC<IInput> = memo((props) => {
  const {
    required,
    max,
    min,
    later,
    error,
    className,
    validation,
    precent,
    control,
    name,
  } = props;
  const { validate } = useValidation({
    required,
    max,
    min,
    later,
    validation,
    precent,
  });

  if (control)
    return (
      <Controller
        name={name}
        rules={{ validate }}
        control={control}
        render={({
          field: { onChange: fieldChange, value: fieldValue },
          fieldState: { error: fieldError },
        }) => (
          <div
            className={`w-full col-start relative ${className}`}
            slot="wrapper"
          >
            <InputLabel {...props} />
            <InputCore
              validate={validate}
              fieldChange={fieldChange}
              fieldValue={fieldValue}
              fieldError={fieldError}
              {...props}
            />

            <InputIcon {...props} />
            <Error error={fieldError} />
          </div>
        )}
      />
    );
  else
    return (
      <div className={`w-full col-start relative ${className}`} slot="wrapper">
        <InputLabel {...props} />
        <InputCore validate={validate} {...props} />
        <InputIcon {...props} />
        <Error error={error} />
      </div>
    );
});
