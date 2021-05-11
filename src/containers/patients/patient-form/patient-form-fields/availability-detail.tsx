import { TextArea } from "components";
import { FC, memo } from "react";

export const AvailabilityDetail: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <TextArea
        label="Availability Detail"
        placeholder="Enter Availability Detail"
        name="availability_detail"
        register={register}
        error={error}
        value={state}
        max={2000}
        required
        interactive
      />
    );
  }
);
