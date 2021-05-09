import { Switch } from "components";
import { FC, memo } from "react";

export const WillComeToSt: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Switch
      label="Will Come To St Vincent?"
      name="WillComeToStVincent"
      control={control}
      checked={state}
    />
  );
});
