import { Button } from "components";
import { useAuth } from "hooks";
import { useHistory } from "react-router";

export const HeaderMenu = (props) => {
  const { push } = useHistory();
  const { token } = useAuth();

  return (
    <div className="w-32 flex flex-col items-center">
      {token && (
        <Button
          className="text-sm  w-20 h-10 text-white bg-danger"
          onClick={() => {
            localStorage.removeItem("token");
            push("/authentication/login");
            props.close();
          }}
        >
          Logout
        </Button>
      )}
    </div>
  );
};
