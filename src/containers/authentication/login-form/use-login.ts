import { useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useService, useToast } from "hooks";
import { Api } from "utils";

const defaultValues = { email: "", password: "" };

export const useLogin = () => {
  const { control, handleSubmit } = useForm({ defaultValues });

  const { error, success } = useToast();

  const { usePost } = useService();

  const { push } = useHistory();

  const { mutate, isLoading } = usePost({
    url: `${Api.users}login/`,
    onError: () => error("Something went wrong."),
    onSuccess: (res) => {
      localStorage.setItem("token", JSON.stringify(res.data));
      success("You successfully loged in.");
      push("/admin/patients");
    },
  });

  return {
    control,
    handleSubmit,
    isLoading,

    onSubmit: useCallback((payload) => mutate({ payload }), []),
  };
};
