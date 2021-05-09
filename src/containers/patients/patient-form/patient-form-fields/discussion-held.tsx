import { TextArea } from "components";
import { FC, memo } from "react";

export const DiscussionHeld: FC<IPatientField> = memo(({ register, error }) => {
  return (
    <TextArea
      label="Discussion Held And What Was Discussed"
      placeholder="Enter Discussion Held And What Was Discussed"
      name="Discussionheld"
      register={register}
      interactive
    />
  );
});
