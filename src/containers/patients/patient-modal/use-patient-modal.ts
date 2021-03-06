import { useService, useToast, useUi } from "hooks";
import { Api } from "utils";

export const usePatientModal = () => {
  const { uiState, toggleDialog } = useUi();
  const { success, error } = useToast();
  const { useDelete,client } = useService();

  const { mutate, isLoading } = useDelete({
    url: `${Api.patients}${uiState.dialog.data.id}/`,
    onSuccess: () => {
      client.invalidateQueries('PATIENTS_LIST')
      toggleDialog({ open: false, type: null, data: {} });
      success("You successfully deleted this patient.");
    },
    onError: (er) => {
      error("Something went wrong.");
      console.log(er);
    },
  });

  return { mutate, isLoading };
};
