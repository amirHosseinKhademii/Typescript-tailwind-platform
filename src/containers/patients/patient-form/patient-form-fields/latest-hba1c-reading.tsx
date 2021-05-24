import { Input } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReading: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Latest HbA1c Reading"
        placeholder="Enter Latest HbA1c Reading"
        name="latest_hba1c_reading"
        register={register}
        value={state}
        error={error}
        precent
        required
        interactive
      />
    );
  }
);
