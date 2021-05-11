import { Switch } from "components";
import { FC, memo } from "react";

export const HadretionopathyDiag: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Retinopathy?"
        name="retinopathy"
        control={control}
        checked={state}
      />
    );
  }
);
