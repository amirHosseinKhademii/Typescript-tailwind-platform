import { Input } from "components";
import { FC, memo } from "react";

export const DiabetesEducator: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Diabetes Educator"
        placeholder="Enter Diabetes Educator"
        name="DiabetesEducator"
        register={register}
        error={error}
        max={50}
        interactive
      />
    );
  }
);
