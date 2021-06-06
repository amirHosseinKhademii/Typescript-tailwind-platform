import { memo } from "react";
import { useHistory, useLocation } from "react-router";
import { useAuth, useUi } from "hooks";
import { Button } from "components";
import { ICClose } from "icons";

import { AuthDropDown } from "./auth-drop-down";
import { PatientDropDown } from "./patient-drop-down";

export const AdminDashboardOpen = memo(() => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { toggleDrawer } = useUi();
  const { token } = useAuth();

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
