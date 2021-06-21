import { useHistory } from "react-router-dom";
import { Drawer } from "components";
import { useUi } from "hooks";

import { AdminDashboardOpen } from "./admin-dashboard-open";
import { AdminDashboardClose } from "./admin-dashboard-close";
import Logo from "assets/images/logo.jpg";
import { memo } from "react";

export const AdminDashboard = memo(() => {
  const { push } = useHistory();
  const { uiState } = useUi();

  return (
    <Drawer open={uiState.drawer.open}>
      <div className="w-full row-center mt-2 mb-6 ">
        <img
          className="w-14 h-14 cursor-pointer"
          src={Logo}
          alt="Logo"
          onClick={() => push("/admin/patients")}
        />
      </div>
      {uiState.drawer.open ? <AdminDashboardOpen /> : <AdminDashboardClose />}
    </Drawer>
  );
});
