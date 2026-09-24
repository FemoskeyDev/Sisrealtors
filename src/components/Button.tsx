import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    className?: string;
}

export function Button({
    children,
    href = "#",
    variant = "primary",
    className = "",
}: ButtonProps) {
    const variantStyles =
        variant === "primary"
            ? "bg-brand-primary text-brand-dark hover:bg-[#e0aa3d]"
            : "bg-brand-secondary text-white hover:bg-[#092653]";

    return (
        <a
            href={href}
            className={[
                "inline-flex items-center gap-3 px-5 py-3.5 text-sm font-medium",
                "transition-all duration-300",
                "hover:-translate-y-0.5",
                variantStyles,
                className,
            ].join(" ")}
        >
            <span>{children}</span>

            <ArrowUpRight
                size={16}
                strokeWidth={1.8}
            />
        </a>
    );
}