import { FC, memo } from "react";
import { useHistory, useLocation } from "react-router";
import { AuthDropDown } from "./auth-drop-down";
import { PatientDropDown } from "./patient-drop-down";

export const AdminDashboardOpen = memo(() => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  return (
    <div className="w-full col-center space-y-4 px-4">
      <AuthDropDown pathname={pathname} push={push} />
      <PatientDropDown pathname={pathname} push={push} />
    </div>
  );
});
