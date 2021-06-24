import { useForm, useWatch } from "react-hook-form";
import { useError, useService, useToast, useUi } from "hooks";
import { useMemo } from "react";
import { Api } from "utils";
import { useHistory } from "react-router";

const initialState = {
  surename: "",
  first_name: "",
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
  dka_detials: "",
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
  pump_details: "",
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

export const usePatientForm = (props: IPatientForm) => {
  const { usePost, usePut, client } = useService();
  const { toggleDialog } = useUi();
  const { push } = useHistory();
  const { success } = useToast();
  const { onError } = useError();

  const { isEditing, editInitials } = props;

  const defaultValues = useMemo(
    () => (isEditing && editInitials ? editInitials : initialState),
    [isEditing, editInitials]
  );

  const { handleSubmit, control, setValue } = useForm({
    defaultValues,
  });

  const { mutate: save, isLoading: saveLoading } = usePost({
    url: `${Api.patients}`,
    onSuccess: () => {
      success("You successfully added a new patient.");
      push("/admin/patients");
    },
    onError,
  });

  const { mutate: edit, isLoading: editLoading } = usePut({
    url: editInitials ? `${Api.patients}${editInitials.id}/` : "",
    onSuccess: () => {
      success("You successfully edited this patient.");
      toggleDialog({ open: false, data: {}, type: null });
      client.invalidateQueries("PATIENTS_LIST");
    },
    onError,
  });

  return {
    control,
    setValue,
    saveLoading,
    editLoading,
    onSubmit: handleSubmit((payload) => {
      isEditing ? edit({ payload }) : save({ payload });
    }),
  };
};
