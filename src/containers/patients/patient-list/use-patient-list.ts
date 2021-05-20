import { useMemo } from "react";
import { useService } from "hooks";
import { Api } from "utils";
import { PatientListActions } from "./patient-list-actions";

const columns = [
  { head: "Name", key: "name", width: "w-1/3" },
  { head: "Last Name", key: "lastName", width: "w-1/3" },
  { head: "Birth Date", key: "birthDay", width: "w-1/3" },
  {
    head: "Actions",
    width: "w-1/8",
    render: (item) => PatientListActions({ item }),
  },
];

export const usePatientList = () => {
  // const { useGet,  } = useService();

  // const { data: list, isLoading } = useGet({
  //   key: "PATIENTS_LIST",
  //  url: Api.patients,
  //   enabled: false,
  // });

  const data = useMemo(
    () => [
      {
        name: "Amir hossein",
        lastName: "Khademi",
        birthDay: "1990-04-05",
        id: "1",
      },
      {
        name: "Ali",
        lastName: "Khademi",
        birthDay: "1990-04-05",
        id: "2",
      },
    ],
    []
  );

  return { columns, data };
};
