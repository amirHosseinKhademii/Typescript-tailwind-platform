import { memo } from "react";

export const PatientAssetsDetails = memo(() => {
  return (
    <div className="w-full h-[300px]">
      <img
        className="w-[440px] h-[290px] rounded "
        src="https://picsum.photos/200/300"
      />
    </div>
  );
});
