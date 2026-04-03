import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const Button = ({ title, onClick, icon, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium rounded-full",
        "bg-white text-black border border-black",
        "hover:bg-white/85",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "px-5 py-2 h-10 text-sm",
        "cursor-pointer",
        className,
      )}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {title}
    </button>
  );
};

export default Button;
