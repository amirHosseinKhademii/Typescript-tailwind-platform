import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CHOCounting: FC<IPatientField> = memo(
  ({ control, state, setValue }) => {
    return (
      <Select
        label="CHO Counting"
        name="cho_counting"
        control={control}
        setValue={setValue}
        multiple
        required
      >
        <SelectOption value="DAFNE" selected={state && state.includes("DAFNE")}>
          DAFNE
        </SelectOption>
        <SelectOption value="Food App">Food App</SelectOption>
        <SelectOption value="Yes" disabled={state && state.includes("No")}>
          Yes
        </SelectOption>
        <SelectOption disabled={state && state.includes("Yes")} value="No">
          No
        </SelectOption>
        <SelectOption value="Other">Other</SelectOption>
      </Select>
    );
  }
);
