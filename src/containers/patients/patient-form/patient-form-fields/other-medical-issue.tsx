import { TextArea } from "components";
import { FC, memo } from "react";

export const OtherMedicalIssue: FC<IPatientField> = memo(({ register }) => {
  return (
    <TextArea
      label="Other Medical Issue"
      placeholder="Enter Other Medical Issue"
      name="OtherMedicalIssue"
      register={register}
      interactive
    />
  );
});
