import { Input } from "components";
import { FC, memo } from "react";

export const Suburb: FC<IPatientField> = memo(({ register, error, state }) => {
  return (
    <Input
      label="Suburb"
      placeholder="Enter Suburb"
      name="suburb"
      register={register}
      error={error}
      value={state}
      max={20}
      required
      interactive
    />
  );
});
