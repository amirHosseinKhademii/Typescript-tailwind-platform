import { useForm, useWatch } from "react-hook-form";
import { useService, useToast, useUi } from "hooks";
import { useMemo } from "react";
import { Api } from "utils";
import { useHistory } from "react-router";

const defaultValues = {
  surename: "",
  last_name: "",
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
  deceased: "No",
};

const url = `${Api.patients}`;

export const usePatientForm = (props: IPatientForm) => {
  const { uiState, toggleDialog } = useUi();
  const { push } = useHistory();
  const { success, error } = useToast();
  const { usePost, usePut } = useService();

  const { handleSubmit, register, control, formState, setValue } = useForm({
    defaultValues,
  });

  const { isEditing, editInitials } = props;

  const { mutate: save, isLoading: saveLoading } = usePost({
    url,
    onSuccess: () => {
      success("You successfully added a new patient.");
      push("/admin/patients");
    },
    onError: (er) => {
      error("Something went wrong");
      console.log(er);
    },
  });

  const { mutate: edit, isLoading: editLoading } = usePut({
    url: `${url}/${uiState.dialog.data.id}`,
    onSuccess: () => {
      success("You successfully edited this patient.");
      toggleDialog({ open: false, data: {}, type: null });
    },
    onError: (er) => {
      error("Something went wrong");
      console.log(er);
    },
  });

  return {
    register,
    control,
    setValue,
    saveLoading,
    editLoading,
    isDirty: formState.isDirty,
    errors: useMemo(() => formState.errors, [formState.errors]),
    state: useWatch({ control, defaultValue: defaultValues }),
    onSubmit: handleSubmit((payload) => {
      isEditing ? edit({ payload }) : save({ payload });
    }),
  };
};
