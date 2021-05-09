import { memo } from "react";
import { Text, Toolbar } from "components";

export const PatientFormToolbar = memo(() => {
  return (
    <Toolbar>
      <Text
        size="header"
        className="w-1/3 flex flex-col items-start"
        slot="start"
      >
        Add new patient
      </Text>
      <div slot="end" />
    </Toolbar>
  );
});
