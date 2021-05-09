import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PhoneType: FC<IPatientField> = memo(
  ({ state, control, error, setValue }) => {
    return (
      <Select
        label="Phone Type"
        name="phone_type"
        control={control}
        value={state}
        error={error}
        multiple
        required
        setValue={setValue}
      >
        <SelectOption
          value="Android"
          selected={state && state.includes("Android")}
        >
          Android
        </SelectOption>
        <SelectOption value=" IOS" selected={state && state.includes(" IOS")}>
          IOS
        </SelectOption>
        <SelectOption
          value="Windows"
          selected={state && state.includes("Windows")}
        >
          Windows
        </SelectOption>
        <SelectOption value="Other" selected={state && state.includes("Other")}>
          Other
        </SelectOption>
      </Select>
    );
  }
);
