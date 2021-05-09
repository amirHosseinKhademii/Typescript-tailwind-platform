import { Fragment } from "react";
import { Button } from "components";
import { useUi } from "hooks";
import { ICDelete, ICEdit } from "icons";

export const PatientListActions = () => {
  const { toggleDialog } = useUi();
  return (
    <Fragment>
      <Button
        icon
        onClick={(e) => {
          e.stopPropagation();
          toggleDialog({ open: true, type: "patient-edit" });
        }}
      >
        <ICEdit className="text-gray-500 w-5 h-5 mr-4  " />
      </Button>
      <Button
        icon
        onClick={(e) => {
          e.stopPropagation();
          toggleDialog({ open: true, type: "patient-delete" });
        }}
      >
        <ICDelete className="text-red-500 w-5 h-5  " />
      </Button>
    </Fragment>
  );
};
