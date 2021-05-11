import { Switch } from "components";
import { FC, memo } from "react";

export const WillComeToSt: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Switch
      label="Will Come To St Vincent?"
      name="will_come_to_st_vincent"
      control={control}
      checked={state}
    />
  );
});
