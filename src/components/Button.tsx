import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
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
    onClick,
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
            "bg-[#D39B2A] text-[#051B41]",
            "hover:bg-[#E0AA3D]",
            "active:bg-[#C58F25]",
        ].join(" "),

        secondary: [
            "bg-[#051B41] text-white",
            "hover:bg-[#D39B2A] hover:text-[#051B41]",
            "active:bg-[#C58F25] active:text-[#051B41]",
        ].join(" "),

        tertiary: [
            "bg-gray-200 text-black",
            "hover:bg-[#051B41] hover:text-white",
            "active:bg-[#092653] active:text-white",
        ].join(" "),

        link: [
            "bg-transparent text-black",
            "hover:text-[#051B41]",
            "active:text-[#092653]",
        ].join(" "),
    };

    const interactionStyles = [
        "inline-flex items-center justify-center gap-3",
        "px-5 py-3.5 text-sm font-medium",
        "transition-colors duration-300",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#051B41]",
        disabled ? "cursor-not-allowed opacity-60" : "",
    ].join(" ");

    const buttonClassName = [
        interactionStyles,
        variantStyles[variant],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const resolvedIcon =
        icon ?? (
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
                        : onClick
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
            onClick={onClick}
            className={buttonClassName}
        >
            {content}
        </button>
    );
}
