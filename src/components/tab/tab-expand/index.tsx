import { FC, memo } from "react";

export const TabExpand: FC<ITab> = memo(({ expandable, children, open }) => {
  if (expandable && open)
    return (
      <div className="w-full px-10 py-8 rounded-b bg-white ">{children}</div>
    );
  else if (!expandable)
    return (
      <div className="w-full px-10 py-8 rounded-b bg-white ">{children}</div>
    );
  else return null;
});
