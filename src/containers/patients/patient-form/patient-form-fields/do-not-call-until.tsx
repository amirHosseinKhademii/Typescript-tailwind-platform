import { Input } from "components";
import { FC, memo } from "react";

export const DoNotCallUntil: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <Input
        label="Do Not Call Until"
        name="do_not_call_until"
        type="text"
        register={register}
        value={state}
        error={error}
        required
      />
    );
  }
);
