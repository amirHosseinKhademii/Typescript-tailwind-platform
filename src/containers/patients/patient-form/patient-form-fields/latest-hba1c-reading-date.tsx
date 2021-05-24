import { DatePicker } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReadingDate: FC<IPatientField> = memo(
  ({ control, error, state }) => {
    return (
      <DatePicker
        label="Latest HbA1c Reading Date"
        name="latest_hba1c_reading_date"
        value={state}
        error={error}
        control={control}
        required
      />
    );
  }
);
