import { DatePicker } from "components";
import { FC, memo } from "react";

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(
  ({ state, control, error }) => {
    return (
      <DatePicker
        label="Date Of Diagnosis Of T1D"
        name="date_of_diagnosis_of_t1d"
        value={state}
        control={control}
        error={error}
        required
        year
      />
    );
  }
);
