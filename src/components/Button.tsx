import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    variant?: "primary" | "secondary" | "tertiary" | "link";
    className?: string;
    showIcon?: boolean;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
}

export function Button({
    children,
    href,
    type = "button",
    disabled = false,
    variant = "primary",
    className = "",
    showIcon = true,
    icon,
    iconPosition = "right",
}: ButtonProps) {
    const variantStyles = {
        primary: [
            "bg-brand-primary text-brand-dark",
            "hover:bg-[#e0aa3d]",
            "active:bg-[#c58f25]",
        ].join(" "),

        secondary: [
            "bg-brand-secondary text-white",
            "hover:bg-[#092653]",
            "active:bg-[#041630]",
        ].join(" "),

        tertiary: [
            "bg-gray-200 text-black",
            "hover:bg-amber-500 hover:text-white",
            "active:bg-[#092653] active:text-white",
        ].join(" "),

        link: [
            "bg-transparent text-black",
            "hover:text-brand-secondary",
            "active:text-[#092653]",
        ].join(" "),
    };

    const interactionStyles = [
        "inline-flex items-center justify-center gap-3",
        "px-5 py-3.5 text-sm font-medium",
        "transition-[background-color,color,transform] duration-300",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark",
        variant !== "link" ? "hover:-translate-y-0.5" : "",
        disabled
            ? "cursor-not-allowed opacity-60 hover:translate-y-0"
            : "",
    ].join(" ");

    const buttonClassName = [
        interactionStyles,
        variantStyles[variant],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const resolvedIcon = icon ?? (
        <ArrowUpRight
            size={16}
            strokeWidth={1.8}
        />
    );

    const content = (
        <>
            {showIcon && iconPosition === "left" && resolvedIcon}

            <span>{children}</span>

            {showIcon && iconPosition === "right" && resolvedIcon}
        </>
    );

    if (href) {
        return (
            <a
                href={disabled ? undefined : href}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : undefined}
                onClick={
                    disabled
                        ? (event) => {
                              event.preventDefault();
                          }
                        : undefined
                }
                className={buttonClassName}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={buttonClassName}
        >
            {content}
        </button>
    );
}