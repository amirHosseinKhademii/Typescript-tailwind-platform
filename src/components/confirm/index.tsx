import { Modal, Button } from "components";
import { FC, memo } from "react";
import { classNames } from "utils";
import { ConfirmActions } from "./confirm-actions";
import { ConfirmBody } from "./confirm-body";

export const Confirm: FC<IConfirm> = memo(
  ({
    onConfirm,
    onCancel,
    description,
    title = "Are You Sure?",
    type = "delete",
  }) => {
    return (
      <Modal
        size="sm"
        className={classNames(
          "col-center px-4 md:px-10 xl:px-26 py-10",
          type === "delete" ? "bg-danger" : "bg-amber-500"
        )}
        slot="dialog"
      >
        <ConfirmBody title={title} description={description} />
        <ConfirmActions onCancel={onCancel} onConfirm={onConfirm} />
      </Modal>
    );
  }
);
