import { DatePicker } from "components";
import { FC, memo } from "react";

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(({ control }) => {
  return (
    <DatePicker
      label="Date Of Diagnosis Of T1D"
      name="date_of_diagnosis_of_t1d"
      control={control}
      required
      year
    />
  );
});
