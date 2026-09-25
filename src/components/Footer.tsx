import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import logo from "../assets/logo.svg";

// ============================================================
// FOOTER NAVIGATION
// ============================================================

const exploreLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Mall", href: "#mall" },
    { label: "Hotel", href: "#hotel" },
    { label: "Amusement Park", href: "#entertainment" },
    { label: "Dining", href: "#experience" },
    { label: "Location", href: "#location" },
    { label: "Brands", href: "#brands" },
];

const companyLinks = [
    { label: "About SIS Realtors", href: "#about" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "/contact" },
];

const opportunityLinks = [
    { label: "Become a Tenant", href: "/contact" },
    { label: "Partnerships", href: "/contact" },
    { label: "Investor Relations", href: "/contact" },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "#",
    },
    {
        label: "Facebook",
        href: "#",
    },
    {
        label: "LinkedIn",
        href: "#",
    },
    {
        label: "YouTube",
        href: "#",
    },
];

export function Footer() {
    const isContactPage = window.location.pathname.replace(/\/+$/, "") === "/contact";

    return (
        <footer className="bg-neutral-950 text-white">
            <Container>
                {/* ==================================================
                    FOOTER MAIN
                ================================================== */}

                <div className="py-16 md:py-20 lg:py-24">
                    <div className="grid gap-16 lg:grid-cols-[1.3fr_2fr] lg:gap-24">
                        {/* ==========================================
                            BRAND
                        ========================================== */}

                        <div>
                            <a
                                href="/"
                                className="inline-block"
                                aria-label="Dominion Leisure City home"
                            >
                                <img
                                    src={logo}
                                    alt="SIS Realtors Limited"
                                    className="h-auto w-[150px] brightness-0 invert md:w-[170px]"
                                />
                            </a>

                            <p className="mt-8 max-w-sm text-xl leading-8 tracking-[-0.02em] text-white/60">
                                Dominion Leisure City
                            </p>

                            <p className="mt-2 text-sm text-white/35">
                                Retail · Lifestyle · Hospitality ·
                                Amusement Park
                            </p>

                            <p className="mt-10 max-w-sm text-sm leading-7 text-white/40">
                                More than a mall. A destination.
                            </p>
                        </div>

                        {/* ==========================================
                            NAVIGATION COLUMNS
                        ========================================== */}

                        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
                            {/* Explore */}
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                    Explore
                                </p>

                                <nav className="mt-6">
                                    {exploreLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={
                                                isContactPage && link.href.startsWith("#")
                                                    ? `/${link.href}`
                                                    : link.href
                                            }
                                            className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                                        >
                                            {link.label}

                                            <ArrowUpRight
                                                size={12}
                                                strokeWidth={1.6}
                                                className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                            />
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Company */}
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                    Company
                                </p>

                                <nav className="mt-6">
                                    {companyLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={
                                                isContactPage && link.href.startsWith("#")
                                                    ? `/${link.href}`
                                                    : link.href
                                            }
                                            className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                                        >
                                            {link.label}

                                            <ArrowUpRight
                                                size={12}
                                                strokeWidth={1.6}
                                                className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                            />
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Opportunities */}
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                                    Opportunities
                                </p>

                                <nav className="mt-6">
                                    {opportunityLinks.map(
                                        (link) => (
                                            <a
                                                key={link.label}
                                                href={
                                                    isContactPage && link.href.startsWith("#")
                                                        ? `/${link.href}`
                                                        : link.href
                                                }
                                                className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                                            >
                                                {link.label}

                                                <ArrowUpRight
                                                    size={12}
                                                    strokeWidth={1.6}
                                                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                                />
                                            </a>
                                        ),
                                    )}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================================================
                    SOCIAL
                ================================================== */}

                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                                Social
                            </p>

                            <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                                    >
                                        {social.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                        >
                            Contact SIS

                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.7}
                            />
                        </a>
                    </div>
                </div>

                {/* ==================================================
                    LEGAL + COPYRIGHT
                ================================================== */}

                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-col gap-5 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
                        <p>
                            © 2026 SIS REALTORS Limited. All Rights
                            Reserved.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <a
                                href="#"
                                className="transition-colors duration-300 hover:text-white"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="transition-colors duration-300 hover:text-white"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
