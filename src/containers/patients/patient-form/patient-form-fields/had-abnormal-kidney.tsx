import { Switch } from "components";
import { FC, memo } from "react";

export const HadAbnormalKidney: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Abnormal kidney function?"
        name="HadAbnormalkidney"
        control={control}
        checked={state}
      />
    );
  }
);
