import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const InfusionLineType: FC<IPatientField> = memo(
  ({ control, state, error, setValue }) => {
    return (
      <Select
        label="Infusion Line Type"
        name="infusion_line_type"
        control={control}
        value={state}
        error={error}
        setValue={setValue}
        required
      >
        <SelectOption value=" 90 Degree" selected={state === " 90 Degree"}>
          90 Degree
        </SelectOption>
        <SelectOption value="45 Degree" selected={state === "45 Degree"}>
          45 Degree
        </SelectOption>
        <SelectOption value="Metal" selected={state === "Metal"}>
          Metal
        </SelectOption>
      </Select>
    );
  }
);
