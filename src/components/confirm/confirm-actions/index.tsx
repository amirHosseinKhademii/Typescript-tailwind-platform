import { Button } from "components";
import { FC, memo } from "react";

export const ConfirmActions: FC<IConfirm> = memo(({ onConfirm, onCancel }) => {
  return (
    <div className="row-around w-full mt-10" slot="actions">
      <Button
        icon
        role="cancel"
        className="h-10  w-20 xl:w-40 bg-gray-100 "
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button
        icon
        className="h-10 w-20 xl:w-40 mb-6 bg-warning "
        role="confirm"
        onClick={onConfirm}
      >
        Confirm
      </Button>
    </div>
  );
});
