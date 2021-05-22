import { Confirm, Modal } from "components";
import { useUi } from "hooks";
import { lazy, memo } from "react";
import { usePatientModal } from "./use-patient-modal";

const PatientForm = lazy(() =>
  import("containers").then((module) => ({
    default: module.PatientForm,
  }))
);

export const PatientModal = memo(() => {
  const { uiState, toggleDialog } = useUi();
  const { mutate, isLoading } = usePatientModal();

  if (uiState.dialog.open && uiState.dialog.type === "patient-edit")
    return (
      <Modal
        size="xl"
        className="px-10 "
        onClose={() => toggleDialog({ open: false, type: null })}
        header="Edit patient information"
        withHeader
      >
        <PatientForm isEditing editInitials={uiState.dialog.data} />
      </Modal>
    );
  else if (uiState.dialog.open && uiState.dialog.type === "patient-delete")
    return (
      <Confirm
        type="delete"
        description="You are deleting this patient."
        loading={isLoading}
        onConfirm={() => mutate()}
        onCancel={() => toggleDialog({ open: false, type: null })}
      />
    );
  else return null;
});
