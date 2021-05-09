import { TextArea } from "components";
import { FC, memo } from "react";

export const PumpDetail: FC<IPatientField> = memo(
  ({ state, register, error }) => {
    if (state === "Looping" || state === "Other")
      return (
        <TextArea
          label="Pump Details"
          name="PumpDetails"
          register={register}
          error={error}
          max={250}
          required
        />
      );
    else return null;
  }
);
