import { FC, memo } from "react";
import { useToggle, useValidation } from "hooks";
import { Error } from "components";
import { classNames } from "utils";

import { TextAreaLabel } from "./text-area-label";
import { TextAreatCore } from "./text-area-core";
import { TextAreaInteractive } from "./text-area-interactive";
import { Controller } from "react-hook-form";

export const TextArea: FC<ITextArea> = memo((props) => {
  const { required, max, min, className, error, control, name } = props;
  const { validate } = useValidation({ required, max, min });
  const { open, toggle } = useToggle();

  if (control)
    return (
      <Controller
        name={name}
        control={control}
        rules={{ validate }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div
            className={classNames(
              "w-full col-start resize-y relative",
              className
            )}
          >
            <TextAreaLabel open={open} {...props} />
            <TextAreatCore
              open={open}
              toggle={toggle}
              onChange={onChange}
              value={value}
              error={error}
              {...props}
            />
            <TextAreaInteractive open={open} {...props} />
            <Error error={error} />
          </div>
        )}
      />
    );
  else
    return (
      <div
        className={classNames("w-full col-start resize-y relative", className)}
      >
        <TextAreaLabel open={open} {...props} />
        <TextAreatCore open={open} toggle={toggle} {...props} />
        <TextAreaInteractive open={open} {...props} />
        <Error error={error} />
      </div>
    );
});
