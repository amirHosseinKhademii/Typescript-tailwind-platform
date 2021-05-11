import { Switch } from "components";
import { FC, memo } from "react";

export const HasInternetAccess: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Has Internet Access?"
        name="has_internet_access"
        control={control}
        checked={state}
      />
    );
  }
);
