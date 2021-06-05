import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const CurrentStudy: FC<IPatientField> = memo(
  ({ control, state, setValue }) => {
    return (
      <Select
        label="Current Study"
        name="current_study"
        control={control}
        value={state}
        required
        setValue={setValue}
      >
        <SelectOption
          value="Biocapillary Pilot"
          selected={state && state === "Biocapillary Pilot"}
        >
          Biocapillary Pilot
        </SelectOption>
        <SelectOption
          value="All in One"
          selected={state && state === "All in One"}
        >
          All in One
        </SelectOption>
        <SelectOption
          value="Glysens PAVE"
          selected={state && state === "Glysens PAVE"}
        >
          Glysens PAVE
        </SelectOption>
        <SelectOption
          value="Glysens FREE"
          selected={state && state === "Glysens FREE"}
        >
          Glysens FREE
        </SelectOption>
        <SelectOption
          value="Additional Signals PWOD"
          selected={state && state === "Additional Signals PWOD"}
        >
          Additional Signals PWOD
        </SelectOption>
        <SelectOption
          value="Fiasp Original V1"
          selected={state && state === "Fiasp Original V1"}
        >
          Fiasp Original V1
        </SelectOption>
        <SelectOption
          value="Fiasp Extension V2"
          selected={state && state === "Fiasp Extension V2"}
        >
          Fiasp Extension V2
        </SelectOption>
        <SelectOption value="Clear" selected={state && state === "Clear"}>
          Clear
        </SelectOption>
        <SelectOption
          value="FAME 1 EYE"
          selected={state && state === "FAME 1 EYE"}
        >
          FAME 1 EYE
        </SelectOption>
        <SelectOption value="MEWS" selected={state && state === "MEWS"}>
          MEWS
        </SelectOption>
        <SelectOption value="Serodus" selected={state && state === "Serodus"}>
          Serodus
        </SelectOption>
        <SelectOption value="FLASH" selected={state && state === "FLASH"}>
          FLASH
        </SelectOption>
        <SelectOption value="Insulet" selected={state && state === "Insulet"}>
          Insulet
        </SelectOption>
        <SelectOption value="Zeus" selected={state && state === "Zeus"}>
          Zeus
        </SelectOption>
        <SelectOption value="Other" selected={state && state === "Other"}>
          Other
        </SelectOption>
      </Select>
    );
  }
);
