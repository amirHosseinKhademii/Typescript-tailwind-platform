import { useCallback, useMemo, useState } from "react";
import { useService } from "hooks";
import { Api } from "utils";
import { PatientListActions } from "./patient-list-actions";

const columns = [
  { head: "Name", key: "surname", width: "w-1/3" },
  { head: "Last Name", key: "christian_name", width: "w-1/3" },
  { head: "Birth Date", key: "date_of_birth", width: "w-1/3" },
  {
    head: "Actions",
    width: "w-1/8",
    render: (item) => PatientListActions({ item }),
  },
];

const initialData = [
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
  const [params, setParams] = useState({ page: null, search: null });
  const { useGet } = useService();

  const { data, isLoading, isFetching } = useGet({
    key: ["PATIENTS_LIST", params],
    url: Api.patients,
    onFocus: false,
  });

  return {
    columns,
    data: data ? data.data : { count: 0, results: [] },
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    page: useMemo(() => params.page, [params.page]),
    onPaginate: useCallback(
      (index) => {
        setParams((prev) => ({ ...prev, page: index }));
      },
      [params.page]
    ),
    onSearch: useCallback(
      (event) => {
        setTimeout(() => {
          setParams((prev) => ({
            ...prev,
            page: 1,
            search: event.target.value,
          }));
        }, 500);
      },
      [params.search]
    ),
  };
};
