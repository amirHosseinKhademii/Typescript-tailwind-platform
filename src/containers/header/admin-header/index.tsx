import { memo } from "react";
import { useHistory } from "react-router";
import { classNames } from "utils";
import { Button } from "components";
import { useUi } from "hooks";
import { ICClose, ICMenu, ICPerson } from "icons";

export const AdminHeader = memo(() => {
  const { push } = useHistory();
  const { toggleDrawer, uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <header
      className={classNames(
        " row-between h-20 pr-4 md:pr-10 px-2",
        open
          ? "md:transform md:translate-x-72 md:w-open"
          : "md:transform md:translate-x-20 md:w-close"
      )}
    >
      <div />
      <Button icon className="" onClick={() => push("/authentication/login")}>
        <img
          className="w-10 h-10 rounded-full"
          src="https://picsum.photos/200/300"
        />
      </Button>
    </header>
  );
});
