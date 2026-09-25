import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    variant?: "primary" | "secondary";
    className?: string;
}

export function Button({
    children,
    href,
    type = "button",
    disabled = false,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const variantStyles =
        variant === "primary"
            ? "bg-brand-primary text-brand-dark hover:bg-[#e0aa3d]"
            : "bg-brand-secondary text-white hover:bg-[#092653]";

    const content = (
        <>
            <span>{children}</span>

            <ArrowUpRight
                size={16}
                strokeWidth={1.8}
            />
        </>
    );

    const buttonClassName = [
        "inline-flex items-center gap-3 px-5 py-3.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        variantStyles,
        className,
    ].join(" ");

    if (href) {
        return (
            <a href={href} className={buttonClassName}>
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            className={[
                buttonClassName,
                disabled ? "cursor-not-allowed opacity-60 hover:translate-y-0" : "",
            ].join(" ")}
        >
            {content}
        </button>
    );
}
