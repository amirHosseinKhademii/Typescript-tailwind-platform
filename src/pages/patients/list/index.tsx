import { Fragment, lazy } from "react";
import { PatientList } from "containers";

const PatientModal = lazy(() =>
  import("containers").then((module) => ({
    default: module.PatientModal,
  }))
);

const Patients = () => {
  return (
    <Fragment>
      <PatientList />
      <PatientModal />
    </Fragment>
  );
};

export default Patients;
