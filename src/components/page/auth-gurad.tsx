import { Fragment, useLayoutEffect } from "react";
import { useHistory, useLocation } from "react-router";
const token = localStorage.getItem("token");

export const AuthGuard = ({ authorize = false, children }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (authorize && !token) push("/authentication/login");
  }, [token, pathname]);

  return <Fragment>{children}</Fragment>;
};
