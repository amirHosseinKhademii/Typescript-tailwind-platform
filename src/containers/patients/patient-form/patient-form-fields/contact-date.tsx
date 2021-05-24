import { DatePicker } from "components";
import { FC, memo } from "react";

export const ContactDate: FC<IPatientField> = memo(
  ({ register, error, state, setValue }) => {
    return (
      <DatePicker
        label="Contact Date"
        name="contact_date"
        register={register}
        value={state}
        error={error}
        setValue={setValue}
        required
        later
      />
    );
  }
);
