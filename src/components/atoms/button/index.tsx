"use client";

import { FC, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: string;
  buttonStyle: "fill" | "outline";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  buttonStyle,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "w-fit px-4 py-2 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150",
        variant === "primary"
          ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
          : "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500",
        buttonStyle === "fill"
          ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
          : " text- bg-blue-700 bg-transparent border border-blue-600 hover:bg-blue-700 focus:ring-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
