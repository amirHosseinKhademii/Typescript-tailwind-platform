import { useForm } from "react-hook-form";
import { useService } from "hooks";
import { useCallback, useMemo } from "react";

const defaultValues = { email: "" };

export const usePassword = () => {
  const { register, handleSubmit, formState } = useForm({ defaultValues });

  const { usePost } = useService();

  const { mutate, isLoading } = usePost({ url: "" });

  return {
    register,
    handleSubmit,
    isLoading,
    errors: useMemo(() => formState.errors, [formState.errors]),
    onSubmit: useCallback((state) => mutate(state), []),
  };
};
