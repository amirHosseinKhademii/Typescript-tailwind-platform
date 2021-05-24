import { DatePicker, Input } from "components";
import { FC, memo } from "react";

export const DateOfBirth: FC<IPatientField> = memo(
  ({ register, error, state, setValue }) => {
    return (
      <DatePicker
        label="Date Of Birth"
        type="date"
        name="date_of_birth"
        register={register}
        error={error}
        value={state}
        setValue={setValue}
        required
      />
    );
  }
);
