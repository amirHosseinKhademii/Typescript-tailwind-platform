import { useForm } from "react-hook-form";
import { useService, useToast } from "hooks";
import { useCallback, useMemo } from "react";

const defaultValues = { email: "" };

export const usePassword = () => {
  const { register, handleSubmit, formState } = useForm({ defaultValues });

  const { error, success } = useToast();

  const { usePost } = useService();

  const { mutate, isLoading } = usePost({
    url: "",
    onError: () => error("Something went wrong."),
    onSuccess: () => success("New password has been sent to your email."),
  });

  return {
    register,
    handleSubmit,
    isLoading,
    errors: useMemo(() => formState.errors, [formState.errors]),
    onSubmit: useCallback((payload) => mutate({ payload }), []),
  };
};
