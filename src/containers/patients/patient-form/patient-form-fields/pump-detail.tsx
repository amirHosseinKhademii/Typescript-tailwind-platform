import { TextArea } from "components";
import { FC, memo } from "react";

export const PumpDetail: FC<IPatientField> = memo(
  ({ state, register, error }) => {
    return (
      <TextArea
        label="Pump Details"
        name="pump_details"
        register={register}
        error={error}
        value={state}
        max={250}
        required
      />
    );
  }
);
