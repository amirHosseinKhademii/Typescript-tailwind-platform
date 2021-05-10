import { Input } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReading: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Latest HbA1c Reading"
        placeholder="Enter Latest HbA1c Reading"
        name="LatestHbA1cReading"
        type="number"
        register={register}
        error={error}
        validation={(value) => {
          if (parseFloat(value) < 0 || parseFloat(value) > 100)
            return "This field mut be between 0 and 100.";
        }}
        interactive
      />
    );
  }
);
