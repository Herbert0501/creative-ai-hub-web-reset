import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

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
  const baseClass = "flex items-center justify-left rounded-md px-4 py-2 mt-2";
  const defaultClass =
    "text-black dark:text-white bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900";
  const outlineClass =
    "border border-neutral-400 text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-800";
  const textClass =
    "text-black dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-neutral-800";

  return (
    <button
      className={`${baseClass} ${className} 
                ${
                  variant === "default"
                    ? defaultClass
                    : variant === "outline"
                    ? outlineClass
                    : textClass
                }`}
      {...props}
    >
      {Icon && <Icon className={`text-lg ${children ? "mr-2" : ""}`} />}
      {children}
    </button>
  );
}
