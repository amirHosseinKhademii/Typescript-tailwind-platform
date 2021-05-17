import { Switch } from "components";
import { FC, memo } from "react";

export const WillComeToSt: FC<IPatientField> = memo(({ control, state }) => {
  return (
    <Switch
      label="Will come to St Vincent's Hospital?"
      name="will_come_to_st_vincent"
      control={control}
      checked={state}
    />
  );
});
