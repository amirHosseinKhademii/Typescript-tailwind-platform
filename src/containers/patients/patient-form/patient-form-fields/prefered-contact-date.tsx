import { Input } from "components";
import { FC, memo } from "react";

export const PreferedContactDate: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Prefered Contact Date"
        placeholder="Enter Prefered Contact Date"
        name="preferred_contact_time"
        type="date"
        register={register}
        error={error}
        value={state}
        max={20}
        required
        interactive
      />
    );
  }
);
