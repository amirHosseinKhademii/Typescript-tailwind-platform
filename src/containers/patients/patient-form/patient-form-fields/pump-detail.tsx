import { TextArea } from "components";
import { FC, memo } from "react";

export const PumpDetail: FC<IPatientField> = memo(({ control }) => {
  return (
    <TextArea
      label="Pump Details"
      name="pump_details"
      control={control}
      max={250}
      required
    />
  );
});
