import { Input } from "components";
import { FC, memo } from "react";

export const State: FC<IPatientField> = memo(({ register, error, state }) => {
  return (
    <Input
      label="State"
      placeholder="Enter State"
      name="state"
      register={register}
      error={error}
      value={state}
      max={10}
      required
      interactive
    />
  );
});
