import { useEffect } from "react";
import { useHistory } from "react-router";

const View = () => {
  const { push } = useHistory();
  // useEffect(() => {
  //   push("/admin/patients");
  // }, []);

  return (
    <div className="w-full">
      <div className="relative">
        <input type="text" id="name" placeholder="Name" className="peer " />
        <p className="peer-focus:text-red-700 text-red-500">test</p>
      </div>
    </div>
  );
};

export default View;
