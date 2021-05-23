import { useMemo } from "react";

export const useAuth = () => {
  const token = JSON.parse(localStorage.getItem("token")) as any;
  return {
    token,
    headers: useMemo(
      () => ({
        Authorization: token ? `Bearer ${token.access}` : "",
      }),
      [token]
    ),
  };
};
