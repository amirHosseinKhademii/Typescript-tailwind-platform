import { Input } from "components";
import { FC, memo } from "react";

export const CHOCountingDetails: FC<IPatientField> = memo(({ control }) => {
  return (
    <Input
      label="CHO Counting Details"
      name="cho_counting_details"
      control={control}
    />
  );
});
