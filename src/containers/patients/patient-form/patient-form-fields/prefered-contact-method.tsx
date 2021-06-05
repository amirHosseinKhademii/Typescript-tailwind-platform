import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PreferedContactMethod: FC<IPatientField> = memo(
  ({ control, state, setValue }) => {
    return (
      <Select
        label="Prefered Contact Method"
        name="preferred_contact_method"
        control={control}
        value={state}
        required
        setValue={setValue}
      >
        <SelectOption value="Email" selected={state === "Email"}>
          Email
        </SelectOption>
        <SelectOption value="Phone" selected={state === "Phone"}>
          Phone
        </SelectOption>
        <SelectOption value="Either" selected={state === "Either"}>
          Either
        </SelectOption>
      </Select>
    );
  }
);
