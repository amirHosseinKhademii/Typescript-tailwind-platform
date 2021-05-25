import { TextArea } from "components";
import { FC, memo } from "react";

export const DKADetail: FC<IPatientField> = memo(
  ({ state, register, error }) => {
    return (
      <TextArea
        label="DKA Detail"
        name="dka_detials"
        register={register}
        error={error}
        value={state}
        max={200}
        required
      />
    );
  }
);
