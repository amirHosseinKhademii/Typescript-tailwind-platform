import { Input } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReading: FC<IPatientField> = memo(({ register }) => {
  return (
    <Input
      label="Latest HbA1c Reading"
      placeholder="Enter Latest HbA1c Reading"
      name="LatestHbA1cReading"
      type="number"
      register={register}
      interactive
    />
  );
});
