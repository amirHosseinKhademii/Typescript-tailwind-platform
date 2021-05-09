import { Form, Grid, Text, Tab } from "components";
import { usePatientForm } from "./use-patient-form";
import { PatientFormToolbar } from "./patient-form-toolbar";
import { PatientFormSubmit } from "./patient-form-submit";
import {
  CHOCounting,
  ChristianName,
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
  Surname,
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
            <Surname
              register={register}
              error={errors["surname"]?.message}
              state={state["surname"]}
            />
            <ChristianName
              register={register}
              error={errors["christian_name"]?.message}
              state={state["christian_name"]}
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
              state={state["DiabetesType"]}
              error={errors["DiabetesType"]?.message}
              setValue={setValue}
            />
            <DateOfDiagnosisOfT1D
              control={control}
              error={errors["DateOfDiagnosisOfT1D"]?.message}
              state={state["DateOfDiagnosisOfT1D"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CHOCounting
              control={control}
              state={state["CHOCounting"]}
              error={errors["CHOCounting"]?.message}
              register={register}
              setValue={setValue}
            />
            {state["CHOCounting"] && state["CHOCounting"].includes("Other") && (
              <CHOCountingDetails
                register={register}
                state={state["CHOCountingDetails"]}
                error={state["CHOCountingDetails"]?.message}
              />
            )}
          </Grid>
          <Grid className=" pt-6 mt-4">
            <ExerciseType
              control={control}
              state={state["ExerciseType"]}
              error={errors["ExerciseType"]?.message}
              setValue={setValue}
            />
            <ExerciseDetail
              register={register}
              error={errors["ExerciseDetail"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentDiabetesManagement
              control={control}
              state={state["CurrentDiabetesManagement"]}
              error={errors["CurrentDiabetesManagement"]?.message}
              setValue={setValue}
            />
            <InfusionLineType
              control={control}
              state={state["InfusionLineType"]}
              error={errors["InfusionLineType"]?.message}
              setValue={setValue}
            />
            <PumpDetail
              register={register}
              state={state["CurrentDiabetesManagement"]}
              error={errors["PumpDetails"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentInsulinUse
              control={control}
              state={state["CurrentInsulinUse"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <CurrentCGMWear
              control={control}
              state={state["CurrentCGMWear"]}
              error={errors["CurrentCGMWear"]?.message}
              setValue={setValue}
            />
            <PastCGMWear
              control={control}
              state={state["PastCGMWear"]}
              error={errors["PastCGMWear"]?.message}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <FrequencyOfDailyFingerstick
              control={control}
              state={state["FrequencyOfDailyFingerstick"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Endocrinologist
              register={register}
              error={errors["Endocrinologist"]?.message}
            />
            <DiabetesEducator
              register={register}
              error={errors["DiabetesEducator"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <LatestHBA1CReading
              register={register}
              error={errors["LatestHbA1cReading"]?.message}
            />
            <LatestHBA1CReadingDate
              register={register}
              error={errors["LatestHbA1cReadingDate"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DKAExperience control={control} state={state["DKAExpreience"]} />
            <DKADetail
              register={register}
              state={state["DKAExpreience"]}
              error={errors["DKADetail"]?.message}
            />
            <HadSevereHypo
              control={control}
              state={state["HadSevereHypoglycaemiaEvents"]}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Text>Have you ever been diagnosed with:</Text>
          </Grid>
          <Grid className="mt-4">
            <div className="col-span-1 grid grid-cols-1 ">
              <HadUnawareHypo
                control={control}
                state={state["HadUnawareHypo"]}
              />
              <HadAbnormalKidney
                control={control}
                state={state["HadAbnormalkidney"]}
              />
              <HadretionopathyDiag
                control={control}
                state={state["HadRetionopathyDiagnosis"]}
              />
              <HadFeetNeuropathy
                control={control}
                state={state["HadFeetNeuropathy"]}
              />
            </div>
            <div className="col-span-2" />
          </Grid>
          <Grid className="mt-4">
            <OtherMedicalIssue
              register={register}
              error={errors["OtherMedicalIssue"]?.message}
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
              state={state["WillComeToStVincent"]}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <HasInternetAccess
              control={control}
              state={state["HasInternetAccess"]}
            />
            <ComputerType
              control={control}
              error={errors["ComputerType"]?.message}
              state={state["ComputerType"]}
              setValue={setValue}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <DiscussionHeld
              register={register}
              error={errors["Discussionheld"]?.message}
            />
            <ContactDate
              register={register}
              error={errors["ContactDate"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <PWODReferal
              register={register}
              error={errors["PWODReferral"]?.message}
            />
            <StudyForConsideration
              register={register}
              error={errors["StudyForConsideration"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <Availability
              control={control}
              state={state["Availability"]}
              error={errors["Availability"]?.message}
              setValue={setValue}
            />
            <AvailabilityDetail
              register={register}
              error={errors["AvailabilityDetail"]?.message}
            />
          </Grid>
          <Grid className=" pt-6 mt-4">
            <NextStep register={register} error={errors["NextStep"]?.message} />
            <DoNotCallUntil
              register={register}
              error={errors["DoNotCallUntil"]?.message}
            />
          </Grid>
        </Tab>

        <PatientFormSubmit />
      </Form>
    </div>
  );
};
