import { TextArea } from "components";
import { FC, memo } from "react";
import { useWatch } from "react-hook-form";

export const PumpDetail: FC<IPatientField> = memo(({ control }) => {
  const state = useWatch({ control, name: "current_diabetes_management" });
  if (state === "Looping" || state === "Other")
    return (
      <TextArea
        label="Pump Details"
        name="pump_details"
        control={control}
        max={250}
      />
    );
  else return null;
});
