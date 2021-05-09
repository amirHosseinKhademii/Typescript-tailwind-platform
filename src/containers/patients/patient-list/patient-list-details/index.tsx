import { Input } from "components";
import { FC, memo } from "react";

export const PatientListDetails: FC<{ item?: any }> = memo(({ item }) => {
  return (
    <div className="grid gird-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full">
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
      <Input
        size="small"
        disabled
        label="In the past 12 months, have you had Diabetic Ketoacidosis (DKA) requiring a hospital admission?"
        value="Yes"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="In the past 12 months, have you had a severe Hypoglycaemic event requiring 3rd party assistance?"
        value="Yes"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="Have you ever been diagnosed with Hypo-unawareness?"
        value="No"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="Have you ever been diagnosed with abnormal kidney function?"
        value="Yes"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="Have you ever been diagnosed with Retinopathy?"
        value="No"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="Have you ever been diagnosed with foot neuropathy?"
        value="Yes"
        className="max-h-12"
      />
      <Input size="small" disabled label="Other Medical Issue" value="Test" />

      <Input
        size="small"
        disabled
        label="Will Come To St Vincent?"
        value="No"
        withError
      />
      <Input size="small" disabled label="Has Internet Access?" value="Yes" />
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
      <Input size="small" disabled label="Next Step" value="Test" />
      <Input size="small" disabled label="Do Not Call Until" value="Test" />
    </div>
  );
});
