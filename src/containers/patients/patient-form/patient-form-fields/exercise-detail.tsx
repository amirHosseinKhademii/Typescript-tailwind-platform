import { TextArea } from "components";
import { FC, memo } from "react";

export const ExerciseDetail: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <TextArea
        label="Exercise Detail"
        placeholder="Enter Exercise Detail"
        name="exercise_detail"
        register={register}
        error={error}
        value={state}
        max={2000}
        interactive
        required
      />
    );
  }
);
