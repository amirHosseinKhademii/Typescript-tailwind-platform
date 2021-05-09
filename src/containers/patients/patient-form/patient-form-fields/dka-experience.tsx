import { Switch } from "components";
import { FC, memo } from "react";

export const DKAExperience: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Switch
      label="In the past 12 months, have you had Diabetic Ketoacidosis (DKA) requiring a hospital admission?"
      name="DKAExpreience"
      control={control}
      checked={state}
    />
  );
});
