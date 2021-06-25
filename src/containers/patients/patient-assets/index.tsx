import { Table } from "components";
import { FC, memo } from "react";
import { PatientAssetsDetails } from "./patient-assets-details";
import { usePatientAssets } from "./use-patient-assets";

export const PatientAssets: FC<{ item?: any }> = memo(({ item }) => {
  const { data, columns, page, onPaginate, isLoading } = usePatientAssets({
    item,
  });

  return (
    <Table
      className="w-full my-10"
      columns={columns}
      total={data.count}
      data={data.results}
      page={page}
      onPaginate={onPaginate}
      expand={(item) => <PatientAssetsDetails />}
      loading={isLoading}
    />
  );
});
