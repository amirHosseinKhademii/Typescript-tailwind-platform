import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const Availability: FC<IPatientField> = memo(
  ({ control, state, error, setValue }) => {
    return (
      <Select
        label="Availability"
        name="availability"
        control={control}
        value={state}
        error={error}
        setValue={setValue}
        required
      >
        <SelectOption value="Daily" selected={state === "Daily"}>
          Daily
        </SelectOption>
        <SelectOption value="Weekly" selected={state === "Weekly"}>
          Weekly
        </SelectOption>
        <SelectOption value="Fortnightly" selected={state === "Fortnightly"}>
          Fortnightly
        </SelectOption>
        <SelectOption value="Monthly" selected={state === "Monthly"}>
          Monthly
        </SelectOption>
      </Select>
    );
  }
);
