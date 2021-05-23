import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useError, useService, useToast } from "hooks";
import { Api } from "utils";

const defaultValues = { email: "" };

export const usePassword = () => {
  const { success } = useToast();
  const { usePost } = useService();
  const { push } = useHistory();
  const { onError } = useError();

  const { register, handleSubmit, formState } = useForm({ defaultValues });

  const { mutate, isLoading } = usePost({
    url: `${Api.users}reset/`,
    onError,
    onSuccess: () => {
      push("/authentication/login");
      success("New password has been sent to your email.");
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
