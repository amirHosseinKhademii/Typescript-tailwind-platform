import { TextArea } from "components";
import { FC, memo } from "react";

export const DKADetail: FC<IPatientField> = memo(
  ({ state, register, error }) => {
    if (state)
      return (
        <TextArea
          label="DKA Detail"
          name="DKADetail"
          register={register}
          error={error}
          max={200}
        />
      );
    else return null;
  }
);
