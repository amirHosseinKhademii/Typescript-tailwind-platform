import { Input } from "components";
import { FC, memo } from "react";

export const DateOfBirth: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Date Of Birth"
        type="date"
        name="date_of_birth"
        register={register}
        error={error}
        value={state}
        required
      />
    );
  }
);
