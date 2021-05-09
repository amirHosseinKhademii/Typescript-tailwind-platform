import { Input } from "components";
import { FC, memo } from "react";

export const ChristianName: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Christian Name"
        placeholder="Enter Christian Name"
        name="christian_name"
        register={register}
        error={error}
        value={state}
        required
        max={64}
        interactive
      />
    );
  }
);
