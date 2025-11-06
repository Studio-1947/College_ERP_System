import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

const styles = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-700 focus-visible:ring-primary-200",
  secondary:
    "border border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600 focus-visible:ring-primary-200",
  subtle:
    "bg-surface-100 text-surface-700 hover:bg-surface-200 focus-visible:outline-surface-500 focus-visible:ring-surface-200"
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof styles;
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
