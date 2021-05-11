import { Input } from "components";
import { FC, memo } from "react";

export const DiabetesEducator: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Diabetes Educator"
        placeholder="Enter Diabetes Educator"
        name="diabetes_educator"
        register={register}
        value={state}
        error={error}
        max={50}
        required
        interactive
      />
    );
  }
);
