import { Input } from "components";
import { FC, memo } from "react";

export const Surname: FC<IPatientField> = memo(({ register, error, state }) => {
  return (
    <Input
      label="Suname"
      placeholder="Enter Surname"
      name="surname"
      register={register}
      error={error}
      value={state}
      max={64}
      required
      interactive
    />
  );
});
