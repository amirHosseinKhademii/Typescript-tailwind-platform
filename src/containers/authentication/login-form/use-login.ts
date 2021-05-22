import { useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useService, useToast } from "hooks";
import { Api } from "utils";

const defaultValues = { email: "", password: "" };

export const useLogin = () => {
  const { register, handleSubmit, formState } = useForm({ defaultValues });

  const { error, success } = useToast();

  const { usePost } = useService();

  const { push } = useHistory();

  const { mutate, isLoading } = usePost({
    url: `${Api.users}/login`,
    onError: () => error("Something went wrong."),
    onSuccess: () => {
      push("/admin/patients");
      success("You successfully loged in.");
    },
  });

  return {
    register,
    handleSubmit,
    isLoading,
    errors: useMemo(() => formState.errors, [formState.errors]),
    onSubmit: useCallback((payload) => mutate({ payload }), []),
  };
};
