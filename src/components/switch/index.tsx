import { FC, memo } from "react";
import { Controller } from "react-hook-form";

import { SwitchCore } from "./switch-core";

export const Switch: FC<ISwitch> = memo((props) => {
  if (props.control)
    return (
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { onChange } }) => (
          <SwitchCore onChange={onChange} {...props} />
        )}
      />
    );
  else return <SwitchCore {...props} />;
});
