import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const PreviousStudy1: FC<IPatientField> = memo(
  ({ state, control, error, setValue }) => {
    return (
      <Select
        label="Previous Study"
        name="previous_study"
        control={control}
        value={state}
        error={error}
        required
        multiple
        setValue={setValue}
      >
        <SelectOption
          value="Biocapillary Pilot"
          selected={state && state.includes("Biocapillary Pilot")}
        >
          Biocapillary Pilot
        </SelectOption>
        <SelectOption
          value="All in One"
          selected={state && state.includes("All in One")}
        >
          All in One
        </SelectOption>
        <SelectOption
          value="Glysens PAVE"
          selected={state && state.includes("Glysens PAVE")}
        >
          Glysens PAVE
        </SelectOption>
        <SelectOption
          value="Glysens FREE"
          selected={state && state.includes("Glysens FREE")}
        >
          Glysens FREE
        </SelectOption>
        <SelectOption
          value="Additional Signals PWOD"
          selected={state && state.includes("Additional Signals PWOD")}
        >
          Additional Signals PWOD
        </SelectOption>
        <SelectOption
          value="Fiasp Original V1"
          selected={state && state.includes("Fiasp Original V1")}
        >
          Fiasp Original V1
        </SelectOption>
        <SelectOption
          value="Fiasp Extension V2"
          selected={state && state.includes("Fiasp Extension V2")}
        >
          Fiasp Extension V2
        </SelectOption>
        <SelectOption value="Clear" selected={state && state.includes("Clear")}>
          Clear
        </SelectOption>
        <SelectOption
          value="FAME 1 EYE"
          selected={state && state.includes("FAME 1 EYE")}
        >
          FAME 1 EYE
        </SelectOption>
        <SelectOption value="MEWS" selected={state && state.includes("MEWS")}>
          MEWS
        </SelectOption>
        <SelectOption
          value="Serodus"
          selected={state && state.includes("Serodus")}
        >
          Serodus
        </SelectOption>
        <SelectOption value="FLASH" selected={state && state.includes("FLASH")}>
          FLASH
        </SelectOption>
        <SelectOption
          value="Insulet"
          selected={state && state.includes("Insulet")}
        >
          Insulet
        </SelectOption>
        <SelectOption
          value="Additional Signals"
          selected={state && state.includes("Additional Signals")}
        >
          Additional Signals
        </SelectOption>
        <SelectOption
          value="Optimapp"
          selected={state && state.includes("Optimapp")}
        >
          Optimapp
        </SelectOption>
        <SelectOption
          value="Biocap Feasibility"
          selected={state && state.includes("Biocap Feasibility")}
        >
          Biocap Feasibility
        </SelectOption>
        <SelectOption value="Other" selected={state && state.includes("Other")}>
          Other
        </SelectOption>
      </Select>
    );
  }
);
