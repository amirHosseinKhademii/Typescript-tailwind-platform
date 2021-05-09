import { Switch } from "components/switch";
import { FC, memo } from "react";

export const HadUnawareHypo: FC<IPatientField> = memo(({ state, control }) => {
  return (
    <Switch
      label="Hypo-unawareness?"
      name="HadUnawareHypo"
      control={control}
      checked={state}
    />
  );
});
