import { memo } from "react";
import { useHistory, useLocation } from "react-router";
import { ICMenu, ICPeoples, ICPerson } from "icons";
import { Button } from "components";
import { classNames } from "utils";
import { useUi } from "hooks";

export const AdminDashboardClose = memo(() => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { toggleDrawer } = useUi();

  return (
    <div className="col-center mt-6 relative">
      <div className="col-center space-y-4 ">
        <Button icon onClick={() => push("/authentication/login")}>
          <ICPerson
            className={classNames(
              "w-6 h-6",
              pathname.includes("authentication")
                ? "text-white"
                : "text-gray-400"
            )}
          />
        </Button>
        <Button icon onClick={() => push("/admin/patients")}>
          <ICPeoples
            className={classNames(
              "w-6 h-6 ",
              pathname.includes("patients") ? "text-white" : "text-gray-400"
            )}
          />
        </Button>
      </div>
      <Button icon onClick={() => toggleDrawer()} className="fixed bottom-6">
        <ICMenu id="menu" className="w-10 h-10 text-gray-300 " />
      </Button>
    </div>
  );
});
