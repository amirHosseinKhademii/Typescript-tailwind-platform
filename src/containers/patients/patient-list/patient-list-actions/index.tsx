import { Fragment } from "react";
import { Button } from "components";
import { useUi } from "hooks";
import { ICDelete, ICEdit, ICEyeFill, ICInteractions } from "icons";
import { useHistory } from "react-router";

export const PatientListActions = ({ item }) => {
  const { toggleDialog } = useUi();
  const { push } = useHistory();

  return (
    <Fragment>
      <Button
        icon
        onClick={(e) => {
          e.stopPropagation();
          toggleDialog({
            open: true,
            type: "patient-interactions",
            data: item,
          });
        }}
      >
        <ICInteractions className="text-green-300 w-5 h-5 mr-4 " />
      </Button>
      <Button
        icon
        onClick={(e) => {
          e.stopPropagation();
          push(`/admin/patients/${item.id}`);
        }}
      >
        <ICEyeFill className="text-blue-300 w-5 h-5 mr-4 " />
      </Button>
      <Button
        icon
        onClick={(e) => {
          e.stopPropagation();
          toggleDialog({ open: true, type: "patient-edit", data: item });
        }}
      >
        <ICEdit className="text-gray-500 w-5 h-5 mr-4 " />
      </Button>

      <Button
        icon
        onClick={(e) => {
          e.stopPropagation();
          toggleDialog({ open: true, type: "patient-delete", data: item });
        }}
      >
        <ICDelete className="text-red-500 w-5 h-5  " />
      </Button>
    </Fragment>
  );
};
