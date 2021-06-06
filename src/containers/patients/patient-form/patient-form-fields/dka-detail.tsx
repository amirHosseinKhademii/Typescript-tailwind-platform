import { TextArea } from "components";
import { FC, memo } from "react";
import { useWatch } from "react-hook-form";

export const DKADetail: FC<IPatientField> = memo(({ control }) => {
  const state = useWatch({ control });
  if (state["dka_requiring_hospital_admission_past_12_months"])
    return (
      <TextArea
        label="DKA Detail"
        name="dka_details"
        control={control}
        max={200}
        required
      />
    );
  else return null;
});
