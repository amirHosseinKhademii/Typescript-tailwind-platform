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
  const { isEditing, editInitials } = props;
  const {
    onSubmit,
    state,
    register,
    control,
    errors,
    setValue,
    saveLoading,
    editLoading,
  } = usePatientForm({ isEditing, editInitials });

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
            <Surename control={control} />
            <FirstName control={control} />
          </Grid>

          <Grid className=" pt-6 mt-4">
            <CurrentStudy
              control={control}
              state={state["current_study"]}
              setValue={setValue}
            />
            <PreviousStudy1
              control={control}
              state={state["previous_study"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DateOfBirth control={control} setValue={setValue} />
            <Gender
              control={control}
              state={state["gender"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PhoneNumber control={control} />
            <PhoneType control={control} state={state["phone_type"]} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PreferedContactDate
              control={control}
              state={state["preferred_contact_time"]}
              setValue={setValue}
            />
            <PreferedContactMethod
              control={control}
              state={state["preferred_contact_method"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4 ">
            <EmailAddress control={control} />
            <Suburb control={control} />
            <State control={control} />
          </Grid>
          {isEditing && (
            <Grid className=" pt-6 mt-4">
              <Deceased
                control={control}
                setValue={setValue}
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
              setValue={setValue}
            />
            <DateOfDiagnosisOfT1D
              control={control}
              state={state["date_of_diagnosis_of_t1d"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CHOCounting
              control={control}
              state={state["cho_counting"]}
              setValue={setValue}
            />
            {state["cho_counting"] &&
              state["cho_counting"].includes("Other") && (
                <CHOCountingDetails control={control} />
              )}
          </Grid>
          <Grid className=" pt-6 mt-4">
            <ExerciseType
              control={control}
              state={state["exercise_type"]}
              setValue={setValue}
            />
            <ExerciseDetail control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentDiabetesManagement
              control={control}
              state={state["current_diabetes_management"]}
              setValue={setValue}
            />
            <InfusionLineType
              control={control}
              state={state["infusion_line_type"]}
              setValue={setValue}
            />
            {(state["current_diabetes_management"] === "Looping" ||
              state["current_diabetes_management"] === "Other") && (
              <PumpDetail control={control} />
            )}
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentInsulinUse
              control={control}
              state={state["current_insulin_use"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentCGMWear
              control={control}
              state={state["current_cgm_wear"]}
              setValue={setValue}
            />
            <PastCGMWear
              control={control}
              state={state["past_cgm_wear"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <FrequencyOfDailyFingerstick
              control={control}
              state={state["frequency_of_daily_fingerstick"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Endocrinologist control={control} />
            <DiabetesEducator control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <LatestHBA1CReading control={control} />
            <LatestHBA1CReadingDate control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DKAExperience control={control} />
            {state["dka_requiring_hospital_admission_past_12_months"] && (
              <DKADetail control={control} />
            )}
            <HadSevereHypo control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Text>Have you ever been diagnosed with:</Text>
          </Grid>
          <Grid className="mt-4">
            <div className="col-span-1 grid grid-cols-1 ">
              <HadUnawareHypo control={control} />
              <HadAbnormalKidney control={control} />
              <HadretionopathyDiag control={control} />
              <HadFeetNeuropathy control={control} />
            </div>
            <div className="col-span-2" />
          </Grid>
          <Grid className="mt-4">
            <OtherMedicalIssue control={control} />
          </Grid>
        </Tab>

        <Tab
          expandable
          initialIsOpen={!isEditing}
          text="Logistics"
          className="mt-10"
        >
          <Grid className="mt-4 ">
            <WillComeToSt control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <HasInternetAccess control={control} />
            <ComputerType
              control={control}
              state={state["computer_type"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DiscussionHeld control={control} />
            <ContactDate control={control} setValue={setValue} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PWODReferal control={control} />
            <StudyForConsideration control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Availability
              control={control}
              state={state["availability"]}
              setValue={setValue}
            />
            <AvailabilityDetail control={control} />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <NextStep control={control} />
            <DoNotCallUntil control={control} />
          </Grid>
        </Tab>

        <PatientFormSubmit loading={saveLoading || editLoading} />
      </Form>
    </div>
  );
};
