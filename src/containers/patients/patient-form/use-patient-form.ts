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
  availability: "",
  availability_detail: "",
  cho_counting: "",
  cho_counting_details: "",
  computer_type: "",
  contact_date: "",
  current_cgm_wear: "",
  current_diabetes_management: "",
  current_insulin_use: "",
  date_of_diagnosis_of_t1d: "",
  diabetes_educator: "",
  diabetes_type: "",
  discussion_held_and_what_discussed: "",
  dka_detial: "",
  do_not_call_until: "",
  email: "",
  endocrinologist: "",
  exercise_detail: "",
  exercise_type: "",
  frequency_of_daily_fingerstick: "",
  infusion_line_type: "",
  latest_hba1c_reading: "",
  latest_hba1c_reading_date: "",
  next_step: "",
  other_medical_issue: "",
  past_cgm_wear: "",
  pump_detail: "",
  pwod_referral: "",
  state: "",
  study_for_consideration: "",
  suburb: "",
  abnormal_kidney_function: false,
  dka_requiring_hospital_admission_past_12_months: false,
  foot_neuropathy: false,
  retinopathy: false,
  has_internet_access: false,
  hypo_unawareness: false,
  hypoglycemic_event_past_12_month: false,
  will_come_to_st_vincent: false,
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
