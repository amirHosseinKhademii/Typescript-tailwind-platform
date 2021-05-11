import { Input } from "components";
import { FC, memo } from "react";

export const NextStep: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Next Step"
        placeholder="Enter Next Step"
        name="next_step"
        register={register}
        value={state}
        error={error}
        required
        interactive
      />
    );
  }
);
