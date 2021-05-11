import { Input } from "components";
import { FC, memo } from "react";

export const CHOCountingDetails: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="CHO Counting Details"
        name="cho_counting_details"
        register={register}
        error={error}
        value={state}
      />
    );
  }
);
