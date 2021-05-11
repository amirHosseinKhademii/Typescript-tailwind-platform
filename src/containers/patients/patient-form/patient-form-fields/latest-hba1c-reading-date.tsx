import { Input } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReadingDate: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Latest HbA1c Reading Date"
        name="latest_hba1c_reading_date"
        type="date"
        value={state}
        error={error}
        register={register}
        required
      />
    );
  }
);
