import { Input } from "components";
import { FC, memo } from "react";

export const Endocrinologist: FC<IPatientField> = memo(
  ({ register, error }) => {
    return (
      <Input
        label="Endocrinologist"
        placeholder="Enter Endocrinologist"
        name="Endocrinologist"
        register={register}
        error={error}
        max={50}
        interactive
      />
    );
  }
);
