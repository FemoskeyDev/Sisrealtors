import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

// ============================================================
// CONTACT DATA
// Details supplied in the Dominion Leisure City brief.
// ============================================================

const contactDetails = [
    {
        label: "Visit",
        value: "20, Olowu Street, Off Awolowo Way, Ikeja, Lagos State, Nigeria.",
        href: "https://www.google.com/maps/search/?api=1&query=20%20Olowu%20Street%20Off%20Awolowo%20Way%20Ikeja%20Lagos",
        icon: MapPin,
    },
    {
        label: "Nigeria",
        value: "+234 813 323 7589",
        href: "tel:+2348133237589",
        icon: Phone,
    },
    {
        label: "International",
        value: "+61 450 430 527",
        href: "tel:+61450430527",
        icon: Phone,
    },
    {
        label: "General / Information",
        value: "info@sisrealtors.com",
        href: "mailto:info@sisrealtors.com",
        icon: Mail,
    },
    {
        label: "Administration",
        value: "admin@sisrealtors.com",
        href: "mailto:admin@sisrealtors.com",
        icon: Mail,
    },
];

// ============================================================
// ENQUIRY OPTIONS
// ============================================================

const enquiryOptions = [
    { label: "General Enquiry" },
    { label: "Brand / Tenant Enquiry" },
    { label: "Partnership Enquiry" },
    { label: "Investor Enquiry" },
    { label: "Media Enquiry" },
];

export function Contact() {
    return (
        <section
            id="contact"
            className="bg-neutral-100 py-24 text-black md:py-32 lg:py-40"
        >
            <Container>
                {/* ==================================================
                    SECTION INTRODUCTION
                ================================================== */}

                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                margin: "-10% 0px",
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <SectionLabel>
                                Contact
                            </SectionLabel>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                margin: "-10% 0px",
                            }}
                            transition={{
                                delay: 0.1,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-5 max-w-5xl text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.92] tracking-[-0.055em]"
                        >
                            Let’s{" "}
                            <span className="font-serif italic text-black/35">
                                connect.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            margin: "-10% 0px",
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-lg lg:pt-10"
                    >
                        <p className="text-base leading-7 text-black/60 md:text-lg md:leading-8">
                            Whether you are visiting, building a brand,
                            exploring a partnership or making an investment,
                            we would like to hear from you.
                        </p>
                    </motion.div>
                </div>

                {/* ==================================================
                    CONTACT DETAILS
                ================================================== */}

                <div className="mt-16 border-y border-black/10 md:mt-24">
                    {contactDetails.map((contact, index) => {
                        const Icon = contact.icon;

                        return (
                            <motion.a
                                key={contact.label}
                                href={contact.href}
                                target={
                                    contact.label === "Visit"
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    contact.label === "Visit"
                                        ? "noreferrer"
                                        : undefined
                                }
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    margin: "-10% 0px",
                                }}
                                transition={{
                                    delay: index * 0.06,
                                    duration: 0.65,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                                className="group flex items-start justify-between gap-8 border-b border-black/10 py-7 last:border-b-0 md:items-center md:py-9"
                            >
                                <div className="flex gap-5">
                                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10">
                                        <Icon
                                            size={16}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.18em] text-black/35">
                                            {contact.label}
                                        </p>

                                        <p className="mt-2 max-w-2xl text-base leading-7 text-black/70 md:text-lg">
                                            {contact.value}
                                        </p>
                                    </div>
                                </div>

                                <ArrowUpRight
                                    size={20}
                                    strokeWidth={1.6}
                                    className="mt-1 shrink-0 text-black/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                                />
                            </motion.a>
                        );
                    })}
                </div>

                {/* ==================================================
                    ENQUIRY OPTIONS
                ================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        margin: "-10% 0px",
                    }}
                    transition={{
                        delay: 0.1,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-16 md:mt-24"
                >
                    <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
                        <div>
                            <SectionLabel>
                                Enquiry Options
                            </SectionLabel>

                            <p className="mt-4 max-w-xs text-sm leading-6 text-black/45">
                                Choose the reason for your enquiry and
                                we'll direct it to the appropriate team.
                            </p>
                        </div>

                        <div className="grid border-t border-black/10 sm:grid-cols-2">
                            {enquiryOptions.map(
                                (enquiry, index) => (
                                    <a
                                        key={enquiry.label}
                                        href="/contact"
                                        className={[
                                            "group flex items-center justify-between gap-5 border-b border-black/10 py-6",
                                            index % 2 === 0
                                                ? "sm:border-r sm:pr-8"
                                                : "sm:pl-8",
                                        ].join(" ")}
                                    >
                                        <span className="text-sm text-black/65 transition-colors duration-300 group-hover:text-black md:text-base">
                                            {enquiry.label}
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.6}
                                            className="shrink-0 text-black/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                                        />
                                    </a>
                                ),
                            )}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
