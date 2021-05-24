import { DatePicker } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReadingDate: FC<IPatientField> = memo(
  ({ register, error, state, setValue }) => {
    return (
      <DatePicker
        label="Latest HbA1c Reading Date"
        name="latest_hba1c_reading_date"
        value={state}
        error={error}
        register={register}
        setValue={setValue}
        required
      />
    );
  }
);
