import { Input } from "components";
import { FC, memo } from "react";

export const Endocrinologist: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Endocrinologist"
        placeholder="Enter Endocrinologist"
        name="endocrinologist"
        register={register}
        value={state}
        error={error}
        max={50}
        required
        interactive
      />
    );
  }
);
