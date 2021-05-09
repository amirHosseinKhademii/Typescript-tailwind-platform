import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const ExerciseType: FC<IPatientField> = memo(
  ({ state, control, setValue }) => {
    return (
      <Select
        label="Exercise Type"
        name="ExerciseType"
        control={control}
        value={state}
        setValue={setValue}
      >
        <SelectOption value="Casual" selected={state === "Casual"}>
          Casual
        </SelectOption>
        <SelectOption value="Structured" selected={state === "Structured"}>
          Structured
        </SelectOption>
      </Select>
    );
  }
);
