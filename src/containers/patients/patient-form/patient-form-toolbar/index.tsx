import { memo } from "react";
import { Button, Text, Toolbar } from "components";
import { useHistory } from "react-router";

export const PatientFormToolbar = memo(() => {
  const { push } = useHistory();
  return (
    <Toolbar>
      <Text
        size="header"
        className="w-1/3 flex flex-col items-start"
        slot="start"
      >
        Add new patient
      </Text>
      <div className="flex items-center" slot="end">
        <Button
          className="bg-white h-12 text-black w-20"
          onClick={() => push("/admin/patients")}
        >
          Cancel
        </Button>
      </div>
    </Toolbar>
  );
});
