import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PastCGMWear: FC<IPatientField> = memo(
  ({ control, state, setValue }) => {
    return (
      <Select
        label="Past CGM Wear"
        name="PastCGMWear"
        control={control}
        value={state}
        setValue={setValue}
      >
        <SelectOption value="Libre" selected={state === "Libre"}>
          Libre
        </SelectOption>
        <SelectOption
          value="Guardian Connect"
          selected={state === "Guardian Connect"}
        >
          Guardian Connect
        </SelectOption>
        <SelectOption
          value=" Guardian Sensor 3"
          selected={state === " Guardian Sensor 3"}
        >
          Guardian Sensor 3
        </SelectOption>
        <SelectOption value=" Dexcom G5" selected={state === " Dexcom G5"}>
          Dexcom G5
        </SelectOption>
        <SelectOption value=" Dexcom G6" selected={state === " Dexcom G6"}>
          Dexcom G6
        </SelectOption>
      </Select>
    );
  }
);
