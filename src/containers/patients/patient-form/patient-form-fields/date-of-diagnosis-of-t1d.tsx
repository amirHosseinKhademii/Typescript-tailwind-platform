import { Select, SelectOption } from "components";
import { FC, memo } from "react";
import { years } from "utils";

export const DateOfDiagnosisOfT1D: FC<IPatientField> = memo(
  ({ state, control, setValue }) => {
    return (
      <Select
        label="Date Of Diagnosis Of T1D"
        name="DateOfDiagnosisOfT1D"
        value={state}
        control={control}
        setValue={setValue}
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
