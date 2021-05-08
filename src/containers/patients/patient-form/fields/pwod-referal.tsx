import { TextArea } from "components";
import { FC, memo } from "react";

export const PWODReferal: FC<IPatientField> = memo(({ register }) => {
  return (
    <TextArea
      label="PWOD Referral"
      placeholder="Enter PWOD Referral"
      name="PWODReferral"
      register={register}
      interactive
    />
  );
});
