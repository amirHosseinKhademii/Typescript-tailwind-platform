import { Input } from "components";
import { FC, memo } from "react";

export const FirstName: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="First Name"
        placeholder="Enter First Name"
        name="first_name"
        register={register}
        error={error}
        value={state}
        required
        max={64}
        interactive
      />
    );
  }
);
