import { TextArea } from "components";
import { FC, memo } from "react";

export const PWODReferal: FC<IPatientField> = memo(
  ({ register, error, state }) => {
    return (
      <TextArea
        label="PWOD Referral"
        placeholder="Enter PWOD Referral"
        name="pwod_referral"
        register={register}
        value={state}
        error={error}
        required
        interactive
      />
    );
  }
);
