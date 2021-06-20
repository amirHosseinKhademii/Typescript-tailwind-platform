import { Button } from "components";
import { useHistory } from "react-router";

const token = localStorage.getItem("token");

export const HeaderMenu = (props) => {
  const { push } = useHistory();

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
