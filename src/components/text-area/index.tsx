import { FC, memo } from "react";
import { useToggle, useValidation } from "hooks";
import { Error } from "components";
import { classNames } from "utils";

import { TextAreaLabel } from "./text-area-label";
import { TextAreatCore } from "./text-area-core";
import { TextAreaInteractive } from "./text-area-interactive";

export const TextArea: FC<ITextArea> = memo((props) => {
  const { required, max, min, className, error } = props;
  const { validate } = useValidation({ required, max, min });
  const { open, toggle } = useToggle();

  return (
    <div
      className={classNames("w-full col-start resize-y relative", className)}
    >
      <TextAreaLabel open={open} {...props} />
      <TextAreatCore
        open={open}
        toggle={toggle}
        validate={validate}
        {...props}
      />
      <TextAreaInteractive open={open} {...props} />
      <Error error={error} />
    </div>
  );
});
