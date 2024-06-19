import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import clsx from "clsx";

type ButtonProps = {
  icon?: IconType;
  variant?: "default" | "outline" | "text";
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  children,
  className = "",
  icon: Icon,
  variant = "default",
  ...props
}: ButtonProps) {
  const baseClass = "flex items-center justify-left px-4 py-2";
  const defaultClass =
    "text-black dark:text-white bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-neutral-700";
  const outlineClass =
    "border border-neutral-400 text-black dark:bg-transparent dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700";
  const textClass =
    "text-black dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-neutral-800";

  return (
    <button
      className={clsx(
        baseClass,
        {
          [defaultClass]: variant === "default",
          [outlineClass]: variant === "outline",
          [textClass]: variant === "text",
        },
        !className.includes("rounded") && "rounded-md",
        className
      )}
      {...props}
    >
      {Icon && <Icon className={`text-lg ${children ? "mr-2" : ""}`} />}
      {children}
    </button>
  );
}
