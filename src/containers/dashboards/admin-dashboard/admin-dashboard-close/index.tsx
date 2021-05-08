import { Button } from "components";
import { ICPeoples, ICPerson } from "icons";
import { memo } from "react";
import { useHistory, useLocation } from "react-router";
import { classNames } from "utils";

export const AdminDashboardClose = memo(() => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  return (
    <div className="col-center space-y-4 mt-6">
      <Button icon onClick={() => push("/authentication/login")}>
        <ICPerson
          className={classNames(
            "w-6 h-6",
            pathname.includes("authentication")
              ? "text-primary"
              : "text-gray-400"
          )}
        />
      </Button>
      <Button icon onClick={() => push("/admin/patients")}>
        <ICPeoples
          className={classNames(
            "w-6 h-6 ",
            pathname.includes("patients") ? "text-primary" : "text-gray-400"
          )}
        />
      </Button>
    </div>
  );
});
