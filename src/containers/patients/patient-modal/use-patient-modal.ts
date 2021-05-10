import { useService, useToast, useUi } from "hooks";

export const usePatientModal = () => {
  const { toggleDialog } = useUi();
  const { success } = useToast();

  const { useDelete } = useService();

  const { mutate, isLoading } = useDelete({
    url: "",
    onSuccess: () => {
      toggleDialog({ open: false, type: null });
      success("You successfully deleted this patient.");
    },
  });

  return { mutate, isLoading };
};
