import { FC, memo } from "react";
import { ICLoading } from "icons";
import { classNames } from "utils";

export const Button: FC<IButton> = memo(
  ({
    className,
    children,
    onClick,
    disabled,
    type,
    role,
    id,
    icon,
    loading,
    onMouseEnter,
    onMouseLeave,
  }) => {
    return (
      <button
        disabled={disabled || loading}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        type={type}
        id={id}
        role={role}
        className={classNames(
          " flex items-center justify-center transition rounded focus:outline-none  disabled:opacity-50 ",
          !icon && "shadow",
          loading
            ? "cursor-wait "
            : !disabled && "transform hover:-translate-y-1 hover:scale-105",
          className
        )}
      >
        {loading ? (
          <ICLoading className="w-6 h-6 text-blue-gray-500" />
        ) : (
          children
        )}
      </button>
    );
  }
);
