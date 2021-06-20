import { memo } from "react";
import { useHistory, useLocation } from "react-router";
import { useUi } from "hooks";
import { Button } from "components";
import { ICClose } from "icons";

import { AuthDropDown } from "./auth-drop-down";
import { PatientDropDown } from "./patient-drop-down";

const token = localStorage.getItem("token");

export const AdminDashboardOpen = memo(() => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { toggleDrawer } = useUi();

  return (
    <div className="w-full col-center space-y-4 px-4 relative">
      {token ? null : <AuthDropDown pathname={pathname} push={push} />}
      <PatientDropDown pathname={pathname} push={push} />
      <Button icon onClick={() => toggleDrawer()} className="fixed bottom-6">
        <ICClose id="close" className="w-12 h-12  text-gray-300" />
      </Button>
    </div>
  );
});
