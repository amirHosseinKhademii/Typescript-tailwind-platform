import { TextArea } from "components";
import { FC, memo } from "react";
import { useWatch } from "react-hook-form";

export const CHOCountingDetails: FC<IPatientField> = memo(({ control }) => {
  const state = useWatch({ control });
  if (state["cho_counting"] && state["cho_counting"].includes("Other"))
    return (
      <TextArea
        label="CHO Counting Details"
        name="cho_counting_details"
        control={control}
      />
    );
  else return null;
});
