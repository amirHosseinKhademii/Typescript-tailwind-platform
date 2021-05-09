import { Switch } from "components/switch";
import { FC, memo } from "react";

export const HadFeetNeuropathy: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Foot neuropathy?"
        name="HadFeetNeuropathy"
        control={control}
        checked={state}
      />
    );
  }
);
