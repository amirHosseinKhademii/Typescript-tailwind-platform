import { TextArea } from "components";
import { FC } from "react";

export const StudyForConsideration: FC<IPatientField> = ({ register }) => {
  return (
    <TextArea
      label="Study For Consideration"
      placeholder="Enter Study For Consideration"
      name="StudyForConsideration"
      register={register}
      interactive
    />
  );
};
