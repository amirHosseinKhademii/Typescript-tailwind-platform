import { Input } from "components";
import { FC, memo } from "react";

export const LastName: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Last Name"
        placeholder="Enter Last Name"
        name="last_name"
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
