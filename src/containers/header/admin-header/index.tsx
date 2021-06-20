import { memo } from "react";
import { classNames } from "utils";
import { Button, Menu } from "components";
import { useUi } from "hooks";
import { useHistory } from "react-router";

const token = localStorage.getItem("token");

export const AdminHeader = memo(() => {
  const { uiState } = useUi();
  const { push } = useHistory();

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
      <Menu
        icon
        activator={() => (
          <img
            className="w-9 h-9 rounded-full"
            src="https://picsum.photos/200/300"
          />
        )}
        render={(setter) =>
          token && (
            <Button
              className="text-sm  w-20 h-10 text-white bg-danger"
              onClick={() => {
                localStorage.removeItem("token");
                push("/authentication/login");
                setter(false);
              }}
            >
              Logout
            </Button>
          )
        }
      />
    </header>
  );
});
