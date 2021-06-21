import { TextArea } from "components";
import { FC, memo } from "react";
import { useWatch } from "react-hook-form";

export const PumpDetail: FC<IPatientField> = memo(({ control }) => {
  const state = useWatch({ control });
  if (
    state["current_diabetes_management"] === "Looping" ||
    state["current_diabetes_management"] === "Other"
  )
    return (
      <TextArea
        label="Pump Details"
        name="pump_details"
        control={control}
        max={250}
        required
      />
    );
  else return null;
});
