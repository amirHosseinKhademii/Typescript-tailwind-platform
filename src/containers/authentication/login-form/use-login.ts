import { useForm } from "react-hook-form";
import { useService, useToast } from "hooks";
import { useCallback, useMemo } from "react";

const defaultValues = { email: "", password: "" };

export const useLogin = () => {
  const { register, handleSubmit, formState } = useForm({ defaultValues });

  const { error, success } = useToast();

  const { usePost } = useService();

  const { mutate, isLoading } = usePost({
    url: "",
    onError: () => error("Server is down."),
    onSuccess: () => success("You successfully loged in."),
  });

  return {
    register,
    handleSubmit,
    isLoading,
    errors: useMemo(() => formState.errors, [formState.errors]),
    onSubmit: useCallback((payload) => mutate({ payload }), []),
  };
};
