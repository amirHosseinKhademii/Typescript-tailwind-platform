import { useUi } from "hooks";
import { memo } from "react";
import { Confirm, Modal } from "components";
import { PatientInteractions, PatientForm, PatientAssets } from "containers";
import { usePatientModal } from "./use-patient-modal";

export const PatientModal = memo(() => {
  const { mutate, isLoading } = usePatientModal();
  const {
    uiState: { dialog },
    toggleDialog,
  } = useUi();

  switch (dialog.type) {
    case "patient-edit":
      return (
        <Modal
          size="xl"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null })}
          header={`Edit ${dialog.data.first_name} ${dialog.data.surename}'s informations`}
          withHeader
        >
          <PatientForm isEditing editInitials={dialog.data} />
        </Modal>
      );
    case "patient-assets":
      return (
        <Modal
          size="lg"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null })}
          header={`${dialog.data.first_name} ${dialog.data.surename}'s assets`}
          withHeader
        >
          <PatientAssets item={dialog.data} />
        </Modal>
      );
    case "patient-interactions":
      return (
        <Modal
          size="lg"
          className="px-10 "
          onClose={() => toggleDialog({ open: false, type: null })}
          header={`${dialog.data.first_name} ${dialog.data.surename}'s interactions`}
          withHeader
        >
          <PatientInteractions />
        </Modal>
      );
    case "patient-delete":
      return (
        <Confirm
          type="delete"
          description="You are deleting this patient."
          loading={isLoading}
          onConfirm={() => mutate()}
          onCancel={() => toggleDialog({ open: false, type: null })}
        />
      );
    default:
      return null;
  }
});
