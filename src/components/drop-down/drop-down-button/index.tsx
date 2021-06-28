import { ICChevronDown, ICChevronRight } from "icons";
import { FC, memo } from "react";
import { classNames } from "utils";

export const DropDownButton: FC<IDropdown> = memo(
  ({ className, icon, label, toggle, open }) => {
    return (
      <button
        className={classNames(
          "w-full row-between focus:outline-none text-white  ",
          className,
          !open && "transform hover:opacity-80"
        )}
        onClick={() => toggle()}
        role="button"
      >
        <div className="row-items-center">
          {icon && icon()}
          <span className="text-lg text-gray-400">{label}</span>
        </div>

        {open ? (
          <ICChevronDown className="w-3 h-3" role="close" id="close" />
        ) : (
          <ICChevronRight className="w-3 h-3 " />
        )}
      </button>
    );
  }
);
