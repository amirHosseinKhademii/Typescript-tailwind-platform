import { Input } from "components";
import { FC, memo } from "react";

export const DiabeticMedicalHistory: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Diabetic & Medical History"
        name="DiabeticHistory"
        register={register}
      />
    );
  }
);
