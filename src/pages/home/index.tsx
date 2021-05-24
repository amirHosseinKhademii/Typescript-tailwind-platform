import { useState } from "react";

import { classNames } from "utils/classes";

const View = () => {
  const error = false;
  const [state, setstate] = useState("");
  return (
    <div className="w-full">
      <input
        type="date"
        style={{ display: "none" }}
        id="color-bg"
        onChange={(e) => setstate(e.target.value)}
      />
      <label htmlFor="color-bg">
        <div
          className={classNames(
            " w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900 bg-white h-12  px-4",
            error ? "border-2 border-red-400 shadow" : "border border-gray-300"
          )}
        >
          {state}
        </div>
      </label>
    </div>
  );
};

export default View;
