import { FC, Fragment, memo } from "react";

export const ConfirmBody: FC<IConfirm> = memo(({ title, description }) => {
  return (
    <Fragment>
      <span className="text-lg text-gray-800" slot="title">
        {title}
      </span>
      <span className="pt-10 text-gray-600" slot="description">
        {description}
      </span>
    </Fragment>
  );
});
