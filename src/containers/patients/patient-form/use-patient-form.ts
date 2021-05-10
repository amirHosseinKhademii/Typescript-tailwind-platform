import { useForm, useWatch } from "react-hook-form";
import { useService } from "hooks";
import { useMemo } from "react";

const defaultValues = {
  surname: "",
  christian_name: "",
  current_study: "",
  previous_study: "",
  date_of_birth: "",
  gender: "",
  phone_number: "",
  phone_type: "",
  preferred_contact_time: "",
  preferred_contact_method: "",
  email: "",
  suburb: "",
  state: "",
};

export const usePatientForm = (props: IPatientForm) => {
  const { handleSubmit, register, control, formState, setValue } = useForm({
    defaultValues,
  });

  const { usePost, usePut } = useService();

  const { isEditing, editInitials } = props;

  const { mutate: save } = usePost({ url: "" });

  const { mutate: edit } = usePut({ url: "" });
 

  return {
    register,
    control,
    setValue,
    isDirty: formState.isDirty,
    errors: useMemo(() => formState.errors, [formState.errors]),
    state: useWatch({ control, defaultValue: defaultValues }),
    onSubmit: handleSubmit((payload) => {
      console.log(payload);
      // isEditing ? edit({payload}) : save({payload});
    }),
  };
};
