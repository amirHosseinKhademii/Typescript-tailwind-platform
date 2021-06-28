import { memo } from "react";

import { Text, Toolbar } from "components";

export const PatientAssetsToolbar = memo(() => {
  return (
    <Toolbar>
      <Text
        size="header"
        className="w-3/4 flex flex-col items-start "
        slot="start"
      >
        Assets
      </Text>
      <div className="flex items-center w-1/4 " slot="end"></div>
    </Toolbar>
  );
});
