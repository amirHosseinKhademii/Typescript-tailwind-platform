import { Input } from "components";
import { FC, memo } from "react";

export const Surename: FC<IPatientField> = memo(({ register, error, state }) => {
  return (
    <Input
      label="Surename "
      placeholder="Enter Surename"
      name="surename"
      register={register}
      error={error}
      value={state}
      max={64}
      required
      interactive
    />
  );
});
