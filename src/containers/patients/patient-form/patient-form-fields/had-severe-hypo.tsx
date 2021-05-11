import { Switch } from "components";
import { FC, memo } from "react";

export const HadSevereHypo: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Switch
      label="In the past 12 months, have you had a severe Hypoglycaemic event requiring 3rd party assistance?"
      name="hypoglycemic_event_past_12_month"
      control={control}
      checked={state}
    />
  );
});
