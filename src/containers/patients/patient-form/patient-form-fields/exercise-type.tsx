import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const ExerciseType: FC<IPatientField> = memo(
  ({ state, control, setValue, error }) => {
    return (
      <Select
        label="Exercise Type"
        name="exercise_type"
        control={control}
        value={state}
        setValue={setValue}
        error={error}
        required
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
