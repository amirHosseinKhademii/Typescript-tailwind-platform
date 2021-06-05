import { TextArea } from "components";
import { FC, memo } from "react";

export const DKADetail: FC<IPatientField> = memo(({ control }) => {
  return (
    <TextArea
      label="DKA Detail"
      name="dka_details"
      control={control}
      max={200}
      required
    />
  );
});
