import { FC, memo } from "react";
import { useToggle, useValidation } from "hooks";
import { Error } from "components";

import { InputLabel } from "./input-label";
import { InputCore } from "./input-core";
import { InputInteractive } from "./input-interactive";
import { InputIcon } from "./input-icon";

export const Input: FC<IInput> = memo((props) => {
  const { required, max, min, later, error, className, validation } = props;
  const { validate } = useValidation({ required, max, min, later, validation });
  const { open, toggle } = useToggle();

  return (
    <div className={`w-full col-start relative ${className}`} slot="wrapper">
      <InputLabel open={open} {...props} />
      <InputCore validate={validate} toggle={toggle} open={open} {...props} />
      <InputInteractive open={open} {...props} />
      <InputIcon {...props} />
      <Error error={error} />
    </div>
  );
});
