import { Select, SelectOption } from "components";
import { FC, memo } from "react";
import { years } from "utils";

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(
  ({ state, control, setValue, error }) => {
    return (
      <Select
        label="Date Of Diagnosis Of T1D"
        name="date_of_diagnosis_of_t1d"
        value={state}
        control={control}
        setValue={setValue}
        error={error}
        required
      >
        {years.map((year, index) => (
          <SelectOption key={index} value={year} selected={state === year}>
            {year}
          </SelectOption>
        ))}
      </Select>
    );
  }
);
