import { createPortal } from "react-dom";
import { FC, memo } from "react";
import { ModalCore } from "./modal-core";

export const Modal: FC<IModal> = memo((props) => {
  return createPortal(
    <ModalCore {...props} />,
    document.getElementById("modal-root")
  );
});
