import { Input } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReading: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Latest HbA1c Reading"
        placeholder="Enter Latest HbA1c Reading"
        name="latest_hba1c_reading"
        type="number"
        register={register}
        value={state}
        error={error}
        interactive
        validation={(value) => {
          if (!value) return "This field is required.";
          else if (parseFloat(value) < 0 || parseFloat(value) > 100)
            return "This field mut be between 0 and 100.";
        }}
      />
    );
  }
);
