import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const FrequencyOfDailyFingerstick: FC<IPatientField> = memo(
  ({ control, state, setValue }) => {
    return (
      <Select
        label="Frequency of Daily Fingerstick"
        name="FrequencyOfDailyFingerstick"
        control={control}
        value={state}
        setValue={setValue}
      >
        <SelectOption value="0" selected={state === "0"}>
          0
        </SelectOption>
        <SelectOption value="0-2" selected={state === "0-2"}>
          0-2
        </SelectOption>
        <SelectOption value=" 2-4" selected={state === " 2-4"}>
          2-4
        </SelectOption>
        <SelectOption value="4-8" selected={state === "4-8"}>
          4-8
        </SelectOption>
        <SelectOption value=">8" selected={state === ">8"}>
          {">8"}
        </SelectOption>
      </Select>
    );
  }
);
