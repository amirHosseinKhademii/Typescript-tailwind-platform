import { Input } from "components";
import { FC, memo } from "react";

export const ContactDate: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Contact Date"
        type="date"
        name="contact_date"
        register={register}
        value={state}
        error={error}
        required
        later
      />
    );
  }
);
