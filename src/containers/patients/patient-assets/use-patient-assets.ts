import { useError, useService } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { Api } from "utils";

const columns = [
  { head: "Lot number", key: "lot_number", width: "w-full" },
  { head: "Expiration date", key: "expiration_date", width: "w-1/4" },
];

export const usePatientAssets = ({ item }) => {
  const [params, setParams] = useState({ page: null, patient_id: item.id });
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
