import { Form, Grid, Text, Tab } from "components";
import { usePatientForm } from "./use-patient-form";
import { PatientFormToolbar } from "./patient-form-toolbar";
import { PatientFormSubmit } from "./patient-form-submit";
import {
  CHOCounting,
  FirstName,
  CurrentCGMWear,
  CurrentStudy,
  DateOfBirth,
  DiabetesEducator,
  CurrentDiabetesManagement,
  DKADetail,
  DKAExperience,
  EmailAddress,
  Endocrinologist,
  ExerciseDetail,
  ExerciseType,
  FrequencyOfDailyFingerstick,
  Gender,
  HadAbnormalKidney,
  HadFeetNeuropathy,
  HadretionopathyDiag,
  HadSevereHypo,
  HadUnawareHypo,
  CurrentInsulinUse,
  LatestHBA1CReading,
  LatestHBA1CReadingDate,
  PastCGMWear,
  PhoneNumber,
  PreferedContactMethod,
  PreferedContactDate,
  PreviousStudy1,
  PumpDetail,
  State,
  Suburb,
  Surename,
  DateOfDiagnosisOfT1D,
  OtherMedicalIssue,
  WillComeToSt,
  Availability,
  AvailabilityDetail,
  HasInternetAccess,
  NextStep,
  ComputerType,
  ContactDate,
  PWODReferal,
  DiscussionHeld,
  StudyForConsideration,
  DoNotCallUntil,
  CHOCountingDetails,
  DiabetesType,
  PhoneType,
  InfusionLineType,
  Deceased,
} from "./patient-form-fields";

export const PatientForm = (props?: IPatientForm) => {
  const { isEditing } = props;
  const {
    onSubmit,
    state,
    register,
    control,
    errors,
    setValue,
    saveLoading,
    editLoading,
  } = usePatientForm({ isEditing });

  return (
    <div className="w-full">
      {!isEditing && <PatientFormToolbar />}
      <Form className="w-full  px-5" onSubmit={onSubmit}>
        <Tab
          expandable
          initialIsOpen={!isEditing}
          text="Patient Bio"
          className="mt-10"
        >
          <Grid className="mt-4">
            <Surename
              register={register}
              error={errors["surename"]?.message}
              state={state["surename"]}
            />
            <FirstName
              register={register}
              error={errors["first_name"]?.message}
              state={state["first_name"]}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentStudy
              control={control}
              state={state["current_study"]}
              error={errors["current_study"]?.message}
              setValue={setValue}
            />
            <PreviousStudy1
              control={control}
              state={state["previous_study"]}
              error={errors["previous_study"]?.message}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DateOfBirth
              register={register}
              error={errors["date_of_birth"]?.message}
              state={state["date_of_birth"]}
            />
            <Gender
              control={control}
              state={state["gender"]}
              error={errors["gender"]?.message}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PhoneNumber
              register={register}
              error={errors["phone_number"]?.message}
              state={state["phone_number"]}
            />
            <PhoneType
              control={control}
              state={state["phone_type"]}
              error={errors["phone_type"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PreferedContactDate
              register={register}
              error={errors["preferred_contact_time"]?.message}
              state={state["preferred_contact_time"]}
            />
            <PreferedContactMethod
              control={control}
              state={state["preferred_contact_method"]}
              error={errors["preferred_contact_method"]?.message}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4 ">
            <EmailAddress
              register={register}
              error={errors["email"]?.message}
              state={state["email"]}
            />
            <Suburb
              register={register}
              error={errors["suburb"]?.message}
              state={state["suburb"]}
            />
            <State
              register={register}
              error={errors["state"]?.message}
              state={state["state"]}
            />
          </Grid>
          {isEditing && (
            <Grid className=" pt-6 mt-4">
              <Deceased
                control={control}
                setValue={setValue}
                error={errors["deceased"]?.message}
                state={state["deceased"]}
              />
            </Grid>
          )}
        </Tab>

        <Tab
          expandable
          initialIsOpen={!isEditing}
          text="Medical History"
          className="mt-10"
        >
          <Grid className=" mt-4 ">
            <DiabetesType
              control={control}
              state={state["diabetes_type"]}
              error={errors["diabetes_type"]?.message}
              setValue={setValue}
            />
            <DateOfDiagnosisOfT1D
              register={register}
              error={errors["date_of_diagnosis_of_t1d"]?.message}
              state={state["date_of_diagnosis_of_t1d"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CHOCounting
              control={control}
              state={state["cho_counting"]}
              error={errors["cho_counting"]?.message}
              register={register}
              setValue={setValue}
            />
            {state["cho_counting"] &&
              state["cho_counting"].includes("Other") && (
                <CHOCountingDetails
                  register={register}
                  state={state["cho_counting_details"]}
                  error={errors["cho_counting_details"]?.message}
                />
              )}
          </Grid>
          <Grid className=" pt-6 mt-4">
            <ExerciseType
              control={control}
              state={state["exercise_type"]}
              error={errors["exercise_type"]?.message}
              setValue={setValue}
            />
            <ExerciseDetail
              register={register}
              state={state["exercise_detail"]}
              error={errors["exercise_detail"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentDiabetesManagement
              control={control}
              state={state["current_diabetes_management"]}
              error={errors["current_diabetes_management"]?.message}
              setValue={setValue}
            />
            <InfusionLineType
              control={control}
              state={state["infusion_line_type"]}
              error={errors["infusion_line_type"]?.message}
              setValue={setValue}
            />
            {(state["current_diabetes_management"] === "Looping" ||
              state["current_diabetes_management"] === "Other") && (
              <PumpDetail
                register={register}
                state={state["pump_detail"]}
                error={errors["pump_detail"]?.message}
              />
            )}
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentInsulinUse
              control={control}
              state={state["current_insulin_use"]}
              error={errors["current_insulin_use"]?.message}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentCGMWear
              control={control}
              state={state["current_cgm_wear"]}
              error={errors["current_cgm_wear"]?.message}
              setValue={setValue}
            />
            <PastCGMWear
              control={control}
              state={state["past_cgm_wear"]}
              error={errors["past_cgm_wear"]?.message}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <FrequencyOfDailyFingerstick
              control={control}
              state={state["frequency_of_daily_fingerstick"]}
              error={errors["frequency_of_daily_fingerstick"]?.message}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Endocrinologist
              register={register}
              state={state["endocrinologist"]}
              error={errors["endocrinologist"]?.message}
            />
            <DiabetesEducator
              register={register}
              state={state["diabetes_educator"]}
              error={errors["diabetes_educator"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <LatestHBA1CReading
              register={register}
              state={state["latest_hba1c_reading"]}
              error={errors["latest_hba1c_reading"]?.message}
            />
            <LatestHBA1CReadingDate
              register={register}
              state={state["latest_hba1c_reading_date"]}
              error={errors["latest_hba1c_reading_date"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DKAExperience
              control={control}
              state={state["dka_requiring_hospital_admission_past_12_months"]}
            />
            {state["dka_requiring_hospital_admission_past_12_months"] && (
              <DKADetail
                register={register}
                state={state["dka_detial"]}
                error={errors["dka_detial"]?.message}
              />
            )}
            <HadSevereHypo
              control={control}
              state={state["hypoglycemic_event_past_12_month"]}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Text>Have you ever been diagnosed with:</Text>
          </Grid>
          <Grid className="mt-4">
            <div className="col-span-1 grid grid-cols-1 ">
              <HadUnawareHypo
                control={control}
                state={state["hypo_unawareness"]}
              />
              <HadAbnormalKidney
                control={control}
                state={state["abnormal_kidney_function"]}
              />
              <HadretionopathyDiag
                control={control}
                state={state["retinopathy"]}
              />
              <HadFeetNeuropathy
                control={control}
                state={state["foot_neuropathy"]}
              />
            </div>
            <div className="col-span-2" />
          </Grid>
          <Grid className="mt-4">
            <OtherMedicalIssue
              register={register}
              error={errors["other_medical_issue"]?.message}
              state={state["other_medical_issue"]}
            />
          </Grid>
        </Tab>

        <Tab
          expandable
          initialIsOpen={!isEditing}
          text="Logistics"
          className="mt-10"
        >
          <Grid className="mt-4 ">
            <WillComeToSt
              control={control}
              state={state["will_come_to_st_vincent"]}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <HasInternetAccess
              control={control}
              state={state["has_internet_access"]}
            />
            <ComputerType
              control={control}
              error={errors["computer_type"]?.message}
              state={state["computer_type"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DiscussionHeld
              register={register}
              error={errors["discussion_held_and_what_discussed"]?.message}
              state={state["discussion_held_and_what_discussed"]}
            />
            <ContactDate
              register={register}
              error={errors["contact_date"]?.message}
              state={state["contact_date"]}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PWODReferal
              register={register}
              error={errors["pwod_referral"]?.message}
              state={state["pwod_referral"]}
            />
            <StudyForConsideration
              register={register}
              error={errors["study_for_consideration"]?.message}
              state={state["study_for_consideration"]}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Availability
              control={control}
              state={state["availability"]}
              error={errors["availability"]?.message}
              setValue={setValue}
            />
            <AvailabilityDetail
              register={register}
              error={errors["availability_detail"]?.message}
              state={state["availability_detail"]}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <NextStep
              register={register}
              error={errors["next_step"]?.message}
              state={state["next_step"]}
            />
            <DoNotCallUntil
              register={register}
              error={errors["do_not_call_until"]?.message}
              state={state["do_not_call_until"]}
            />
          </Grid>
        </Tab>

        <PatientFormSubmit loading={saveLoading || editLoading} />
      </Form>
    </div>
  );
};
