import { FC, memo } from "react";
import { Button, Text } from "components";
import { ICClose } from "icons";

export const ModalHeader: FC<IModal> = memo(
  ({ header, onClose, withHeader }) => {
    if (withHeader)
      return (
        <div className=" w-full row-between" slot="header">
          {header ? (
            <Text className="pl-8 " size="header">
              {header}
            </Text>
          ) : (
            <div />
          )}
          {onClose && (
            <Button
              icon
              className="mr-2 md:mr-8 my-4 md:my-6 "
              onClick={onClose}
            >
              <ICClose
                role="close"
                className=" w-6 h-6 md:w-10 md:h-10 text-gray-600"
              />
            </Button>
          )}
        </div>
      );
    else return null;
  }
);
