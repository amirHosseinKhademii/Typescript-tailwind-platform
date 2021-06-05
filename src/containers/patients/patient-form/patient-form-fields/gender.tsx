import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const Gender: FC<IPatientField> = memo(
  ({ control, state, setValue }) => {
    return (
      <Select
        control={control}
        label="Gender"
        name="gender"
        value={state}
        setValue={setValue}
        required
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
