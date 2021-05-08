import { Input } from "components";
import { FC, memo } from "react";

export const NextStep: FC<IPatientField> = memo(({ register }) => {
  return (
    <Input
      label="Next Step"
      placeholder="Enter Next Step"
      name="NextStep"
      register={register}
      interactive
    />
  );
});
