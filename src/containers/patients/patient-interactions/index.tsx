import { memo } from "react";
import { Table } from "components";

export const PatientInteractions = memo(() => {
  return (
    <Table
      className="w-full my-10"
      columns={[
        { head: "Interaction type", key: "type", width: "w-1/4" },
        { head: "Interaction date", key: "date", width: "w-1/4" },
        { head: "Contact admin", key: "admin", width: "w-1/4" },
        { head: "Contact details", key: "details", width: "w-1/4" },
      ]}
      data={[
        {
          type: "Test type",
          date: "2020-04-06 16:30",
          admin: "Sunny",
          details: "Test details",
        },
        {
          type: "Test type",
          date: "2020-04-06 16:30",
          admin: "Sunny",
          details: "Test details",
        },
        {
          type: "Test type",
          date: "2020-04-06 16:30",
          admin: "Sunny",
          details: "Test details",
        },
        {
          type: "Test type",
          date: "2020-04-06 16:30",
          admin: "Sunny",
          details: "Test details",
        },
        {
          type: "Test type",
          date: "2020-04-06 16:30",
          admin: "Sunny",
          details: "Test details",
        },
      ]}
      total={5}
    />
  );
});
