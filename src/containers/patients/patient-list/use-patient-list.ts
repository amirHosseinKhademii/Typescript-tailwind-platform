import { useCallback, useMemo, useState } from "react";
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

const data = [
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
];

export const usePatientList = () => {
  const { useGet } = useService();

  const [params, setParams] = useState({ page: 1, search: "" });

  const {
    data: list,
    isLoading,
    refetch,
  } = useGet({
    key: "PATIENTS_LIST",
    url: Api.patients,
    params,
    enabled: false,
  });

  return {
    columns,
    data,
    setParams,
    isLoading,
    refetch,
    page: useMemo(() => params.page, [params.page]),
    onPaginate: useCallback(
      (index) => {
        setParams((prev) => ({ ...prev, page: index }));
        //refetch();
      },
      [params.page]
    ),
  };
};
