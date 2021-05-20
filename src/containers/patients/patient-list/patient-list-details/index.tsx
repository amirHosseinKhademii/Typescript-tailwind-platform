import { Input, Switch } from "components";
import { FC, memo } from "react";

export const PatientListDetails: FC<{ item?: any }> = memo(({ item }) => {
  return (
    <div className="grid gird-cols-2 md:grid-cols-3  lg:grid-cols-4  gap-3 w-full">
      <Input size="small" disabled label="Current Study" value="Amir" />
      <Input size="small" disabled label="Previous Study" value="Amir" />
      <Input size="small" disabled label="Gender" value="Male" />
      <Input size="small" disabled label="Phone Number" value="123456789" />
      <Input size="small" disabled label="Phone Type" value="123456789" />
      <Input size="small" disabled label="Prefered Contact Date" value="Test" />
      <Input
        size="small"
        disabled
        label="Prefered Contact Method"
        value="Test"
      />
      <Input size="small" disabled label="Email Address" value="Test" />
      <Input size="small" disabled label="Suburb" value="Test" />
      <Input size="small" disabled label="State" value="Test" />
      <Input size="small" disabled label="Deceased" value="Yes" withError />
      <Input size="small" disabled label="Diabetes Type" value="Test" />
      <Input
        size="small"
        disabled
        label="Date Of Diagnosis Of T1D"
        value="Test"
      />
      <Input size="small" disabled label="CHO Counting" value="Test" />
      <Input size="small" disabled label="Exercise Type" value="Test" />
      <Input size="small" disabled label="Exercise Detail" value="Test" />
      <Input
        size="small"
        disabled
        label="Current Diabetes Management"
        value="Test"
      />
      <Input size="small" disabled label="Infusion Line Type" value="Test" />
      <Input size="small" disabled label="Current Insulin Use" value="Test" />
      <Input size="small" disabled label="Current CGM Wear" value="Test" />
      <Input size="small" disabled label="Past CGM Wear" value="Test" />
      <Input
        size="small"
        disabled
        label="Frequency of Daily Fingerstick"
        value="Test"
      />
      <Input size="small" disabled label="Endocrinologist" value="Test" />
      <Input size="small" disabled label="Diabetes Educator" value="Test" />
      <Input size="small" disabled label="Latest HbA1c Reading" value="Test" />
      <Input
        size="small"
        disabled
        label="Latest HbA1c Reading Date"
        value="Test"
      />
      <Switch
        size="small"
        disabled
        label="In the past 12 months, have you had Diabetic Ketoacidosis (DKA) requiring a hospital admission?"
      />
      <Switch
        size="small"
        disabled
        label="In the past 12 months, have you had a severe Hypoglycaemic event requiring 3rd party assistance?"
      />
      <Switch
        size="small"
        disabled
        label="Have you ever been diagnosed with Hypo-unawareness?"
      />
      <Switch
        size="small"
        disabled
        label="Have you ever been diagnosed with abnormal kidney function?"
      />
      <Switch
        size="small"
        disabled
        label="Have you ever been diagnosed with Retinopathy?"
      />
      <Switch
        size="small"
        disabled
        label="Have you ever been diagnosed with foot neuropathy?"
      />
      <Switch
        size="small"
        disabled
        label="Will come to St Vincent's Hospital?"
        withError
      />
      <Switch size="small" disabled label="Has Internet Access?" />
      <Input size="small" disabled label="Other Medical Issue" value="Test" />
      <Input size="small" disabled label="Computer Type" value="Test" />
      <Input
        size="small"
        disabled
        label="Discussion Held And What Was Discussed"
        value="Test"
      />
      <Input size="small" disabled label="Contact Date History" value="Test" />
      <Input size="small" disabled label="PWOD Referral" value="Test" />
      <Input
        size="small"
        disabled
        label="Study For Consideration"
        value="Test"
      />
      <Input size="small" disabled label="Availability" value="Test" />
      <Input size="small" disabled label="Availability Detail" value="Test" />
      <Input size="small" disabled label="Next Steps" value="Test" />
      <Input size="small" disabled label="Do Not Call Until" value="Test" />
    </div>
  );
});
