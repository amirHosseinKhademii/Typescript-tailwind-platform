import { Input } from "components";
import { FC, memo } from "react";

export const ContactDate: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <Input
      label="Contact Date"
      type="date"
      name="ContactDate"
      register={register}
      error={error}
      later
    />
  );
});
