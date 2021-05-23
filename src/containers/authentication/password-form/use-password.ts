import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useService, useToast } from "hooks";
import { Api } from "utils";

const defaultValues = { email: "" };

export const usePassword = () => {
  const { register, handleSubmit, formState } = useForm({ defaultValues });

  const { error, success } = useToast();

  const { usePost } = useService();

  const { push } = useHistory();

  const { mutate, isLoading } = usePost({
    url: `${Api.users}reset/`,
    onError: () => error("Something went wrong."),
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
