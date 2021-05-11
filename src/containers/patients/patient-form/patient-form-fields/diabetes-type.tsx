import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const DiabetesType: FC<IPatientField> = memo(
  ({ control, state, error, setValue }) => {
    return (
      <Select
        label="Diabetes Type"
        name="diabetes_type"
        control={control}
        value={state}
        error={error}
        setValue={setValue}
        required
      >
        <SelectOption value="Type 1" selected={state === "Type 1"}>
          Type 1
        </SelectOption>
        <SelectOption value="Type 2" selected={state === "Type 2"}>
          Type 2
        </SelectOption>
        <SelectOption value="LADA" selected={state === "LADA"}>
          LADA
        </SelectOption>
        <SelectOption value="Other" selected={state === "Other"}>
          Other
        </SelectOption>
      </Select>
    );
  }
);
