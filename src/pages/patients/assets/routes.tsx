import { lazy } from "react";

export const route = {
  path: "/admin/patients/:id",
  name: "ROUTE:PATIENTS:ASSETS",
  exact: true,
  layout: "admin",
  //authorize: true,
  component: lazy(() => import(".")),
};
