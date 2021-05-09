import { Input } from "components";
import { FC, memo } from "react";

export const LatestHBA1CReadingDate: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Latest HbA1c Reading Date"
        name="LatestHbA1cReadingDate"
        type="date"
        register={register}
      />
    );
  }
);
