import { useError, useService } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router";
import { Api } from "utils";

const columns = [
  { head: "Lot number", key: "lot_number", width: "w-1/2" },
  { head: "Expiration date", key: "expiration_date", width: "w-1/4" },
];

// const data = [
//   {
//     id: "1",
//     name: "test",
//     lot_number: "123456",
//     expiration_date: "2021/05/04",
//   },
//   {
//     id: "2",
//     name: "test",
//     lot_number: "123456",
//     expiration_date: "2021/05/04",
//   },
//   {
//     id: "3",
//     name: "test",
//     lot_number: "123456",
//     expiration_date: "2021/05/04",
//   },
//   {
//     id: "4",
//     name: "test",
//     lot_number: "123456",
//     expiration_date: "2021/05/04",
//   },
// ];

export const usePatientAssets = () => {
  const { id: patient } = useParams() as any;
  const [params, setParams] = useState({ page: null, patient });
  const { useGet } = useService();
  const { onError } = useError();

  const { data, isLoading, isFetching } = useGet({
    key: ["PATIENTS_LIST", params],
    url: Api.assets,
    onFocus: false,
    keepPreviousData: true,
    onError,
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
  };
};
