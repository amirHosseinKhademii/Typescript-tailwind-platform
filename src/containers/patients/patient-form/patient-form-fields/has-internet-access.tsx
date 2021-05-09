import { Switch } from "components";
import { FC, memo } from "react";

export const HasInternetAccess: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Has Internet Access?"
        name="HasInternetAccess"
        control={control}
        checked={state}
      />
    );
  }
);
