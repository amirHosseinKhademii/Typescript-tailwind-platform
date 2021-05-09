import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const Gender: FC<IPatientField> = memo(
  ({ control, state, error, setValue }) => {
    return (
      <Select
        control={control}
        label="Gender"
        name="gender"
        value={state}
        error={error}
        required
        setValue={setValue}
      >
        <SelectOption value="Male" selected={state === "Male"}>
          Male
        </SelectOption>
        <SelectOption value="Female" selected={state === "Female"}>
          Female
        </SelectOption>
      </Select>
    );
  }
);
