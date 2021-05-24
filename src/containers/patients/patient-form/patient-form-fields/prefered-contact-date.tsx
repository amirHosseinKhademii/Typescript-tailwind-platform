import { DatePicker } from "components";
import { FC, memo } from "react";

export const PreferedContactDate: FC<IPatientField> = memo(
  ({ register, error, state, setValue }) => {
    return (
      <DatePicker
        label="Prefered Contact Date"
        placeholder="Enter Prefered Contact Date"
        name="preferred_contact_date"
        type="date"
        register={register}
        error={error}
        value={state}
        setValue={setValue}
        required
      />
    );
  }
);
