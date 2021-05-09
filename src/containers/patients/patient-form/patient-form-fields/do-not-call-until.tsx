import { Input } from "components";
import { FC, memo } from "react";

export const DoNotCallUntil: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Do Not Call Until"
      name="DoNotCallUntil"
      type="date"
      register={register}
    />
  );
});
