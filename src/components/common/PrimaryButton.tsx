import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "phosphor-react";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "purple" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  icon?: "arrow-pill" | "arrow-lime" | "none";
  children: React.ReactNode;
}

/**
 * CampusCode Standard CTA Button
 * Available as a native <button>, React Router <Link>, or external <a>.
 * Follows the high-contrast ink pill aesthetic with circular arrow icon badges.
 */
export function PrimaryButton({
  to,
  href,
  variant = "primary",
  size = "md",
  icon = "arrow-pill",
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center font-inter font-medium transition-all select-none cursor-pointer";

  const variantClasses = {
    primary:
      "bg-[#111111] text-white hover:bg-[#252525] shadow-xs active:scale-[0.99]",
    secondary:
      "bg-[#F2F2EE] text-[#111111] hover:bg-[#EAEAE5] border border-[#E0E0DA] active:scale-[0.99]",
    purple:
      "bg-[#7665FF] text-white hover:bg-[#6352F0] shadow-xs active:scale-[0.99]",
    outline:
      "bg-transparent text-[#111111] border border-[#111111]/20 hover:bg-[#111111]/[0.04] active:scale-[0.99]",
    white:
      "bg-white !text-[#111111] hover:bg-[#F2F2EE] shadow-sm active:scale-[0.99]",
  };

  const sizeClasses = {
    sm: "h-9 px-4 text-[13px] rounded-full gap-2",
    md: "h-[42px] px-5 text-[13.5px] rounded-full gap-2.5",
    lg: "h-12 px-7 text-[15px] rounded-full gap-3",
  };

  const iconContainerSizes = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-7 w-7",
  };

  const isLightButton = variant === "white" || variant === "secondary" || className?.includes("bg-white");

  const content = (
    <>
      <span className={cn(isLightButton ? "!text-[#111111]" : "")}>{children}</span>
      {icon === "arrow-pill" && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            isLightButton ? "bg-[#111111]/10 !text-[#111111]" : "bg-white/20 text-white",
            iconContainerSizes[size]
          )}
        >
          <ArrowUpRight size={14} className={cn("w-3.5 h-3.5", isLightButton ? "!text-[#111111]" : "text-white")} />
        </div>
      )}
      {icon === "arrow-lime" && (
        <span className="text-[#A8E62E] font-mono leading-none text-[15px] transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default PrimaryButton;
