import { TextArea } from "components";
import { FC } from "react";

export const StudyForConsideration: FC<IPatientField> = ({
  register,
  error,
  state,
}) => {
  return (
    <TextArea
      label="Study For Consideration"
      placeholder="Enter Study For Consideration"
      name="study_for_consideration"
      register={register}
      error={error}
      value={state}
      required
      interactive
    />
  );
};
