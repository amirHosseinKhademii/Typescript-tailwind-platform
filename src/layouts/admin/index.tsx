import { AdminDashboard, AdminHeader } from "containers";
import { useUi } from "hooks";
import { classNames } from "utils";

export const AdminLayout = ({ children }) => {
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <div className="  fixed inset-0 overflow-y-auto overflow-x-hidden bg-fade ">
      <AdminDashboard />
      <AdminHeader />
      <div
        className={classNames(
          "w-full trans col-center my-10 px-10 md:px-20",
          open
            ? "md:transform md:translate-x-72 md:w-open"
            : "md:transform md:translate-x-20 md:w-close"
        )}
      >
        {children}
      </div>
    </div>
  );
};
