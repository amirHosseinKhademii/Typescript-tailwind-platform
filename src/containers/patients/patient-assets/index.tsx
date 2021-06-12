import { Table } from "components";
import { memo } from "react";
import { PatientAssetsDetails } from "./patient-assets-details";
import { PatientAssetsToolbar } from "./patient-assets-toolbar";
import { usePatientAssets } from "./use-patient-assets";

export const PatientAssets = memo(() => {
  const { data, columns } = usePatientAssets();
  return (
    <div className="w-full">
      <PatientAssetsToolbar />
      <Table
        className="w-full my-10"
        data={data}
        total={data.length}
        columns={columns}
        expand={(item) => <PatientAssetsDetails />}
        // page={page}
        // onPaginate={onPaginate}
        //loading={isLoading}
      />
    </div>
  );
});
