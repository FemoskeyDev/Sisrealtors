import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

import taiwoImage from "../assets/images/taiwo-adeleke.jpeg";
import joyImage from "../assets/images/Joy Adun.jpg";
import kehideImage from "../assets/images/Kehinde oluboyede.jpg";
import tayoImage from "../assets/images/Tayo agunlejika.jpg";
import hayfordImage from "../assets/images/hayford.jpg";

// ============================================================
// LEADERSHIP DATA
// Source: S.I.S. Realtors Company Profile, pages 7–8.
// Temporary image fallback is used until the remaining portraits
// are added to src/assets/images.
// ============================================================

interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Mr. Taiwo Adeleke",
        role: "Managing Director",
        description:
            "Over 15 years of experience in real estate investment strategy. Founder and MD/CEO of Pahe Africa. BSc. Chemistry, Troy University.",
        image: taiwoImage,
    },
    {
        name: "Dr. Hayford Ahiadu",
        role: "Director - Environmental Management & Sustainability",
        description:
            "PhD-qualified environmental management consultant specializing in environmental planning, land-use assessment, and sustainability reporting.",
        image: hayfordImage,
    },
    {
        name: "Mr. Kehinde Oluboyede",
        role: "Director - Client Relations & Strategic Partnerships",
        description:
            "Principal point of contact for partners and clients, focusing on client experience and stakeholder engagement.",
        image: kehideImage,
    },
    {
        name: "Mr. Tayo Agunlejika",
        role: "Director - Community Engagement & International Development",
        description:
            "Senior Ethnic Community Consultant with 15 years of experience. Former Executive Director of the NZ Federation of Multicultural Councils. MSc Agricultural Economics.",
        image: tayoImage,
    },
    {
        name: "Mrs. Joy Edu",
        role: "Director - Investment & Business Strategy",
        description:
            "Investment and business expert with a diverse portfolio spanning real estate and hospitality, committed to sound governance and sustainable growth.",
        image: joyImage,
    },
];

export function Teams() {
    const [activeMember, setActiveMember] = useState<string | null>(null);

    return (
        <section
            id="leadership"
            className="bg-white py-20 text-black md:py-24 lg:py-32"
        >
            <Container>
                {/* ==================================================
                    SECTION INTRODUCTION
                ================================================== */}
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
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
                            OUR LEADERSHIP
                        </SectionLabel>

                        <h2 className="mt-5 max-w-3xl text-[clamp(2.75rem,5vw,5rem)] font-normal leading-[0.95] tracking-[-0.05em]">
                            The people behind{" "}
                            <span className="font-serif italic text-black/35">
                                the vision.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
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
                        className="max-w-xl text-base leading-7 text-black/60 md:text-lg md:leading-8"
                    >
                        Our multidisciplinary leadership team brings together
                        experience across real estate, environmental
                        management, investment, client relations and
                        international development.
                    </motion.p>
                </div>

                {/* ==================================================
                    LEADERSHIP GRID
                ================================================== */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                    {teamMembers.map((member, index) => {
                        const isActive = activeMember === member.name;

                        return (
                            <motion.button
                                key={member.name}
                                type="button"
                                onClick={() =>
                                    setActiveMember(
                                        isActive ? null : member.name,
                                    )
                                }
                                initial={{
                                    opacity: 0,
                                    y: 24,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    margin: "-5% 0px",
                                }}
                                transition={{
                                    delay: index * 0.06,
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative block w-full overflow-hidden text-left focus-visible:outline-none"
                                aria-pressed={isActive}
                                aria-label={`View profile for ${member.name}`}
                            >
                                <div className="relative aspect-[4/5] overflow-hidden border border-black/10 bg-stone-50">
                                    {/* ==================================================
                                        PORTRAIT
                                    ================================================== */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading={
                                            index < 3 ? "eager" : "lazy"
                                        }
                                        className={[
                                            "absolute inset-0 h-full w-full object-cover object-center",
                                            "transition-transform duration-700",
                                            isActive
                                                ? "scale-[1.02]"
                                                : "scale-100 group-hover:scale-[1.02]",
                                        ].join(" ")}
                                    />

                                    {/* ==================================================
                                        DEFAULT IMAGE GRADIENT
                                    ================================================== */}
                                    <div
                                        className={[
                                            "pointer-events-none absolute inset-0",
                                            "bg-gradient-to-t from-black/25 via-black/5 to-transparent",
                                            "transition-opacity duration-500",
                                            isActive
                                                ? "opacity-0"
                                                : "opacity-100",
                                        ].join(" ")}
                                    />

                                    {/* ==================================================
                                        SECONDARY BLUE HOVER / ACTIVE OVERLAY
                                    ================================================== */}
                                    <div
                                        className={[
                                            "pointer-events-none absolute inset-0 bg-[#051B41]",
                                            "transition-opacity duration-500",
                                            isActive
                                                ? "opacity-[0.88]"
                                                : "opacity-0 group-hover:opacity-[0.88]",
                                        ].join(" ")}
                                    />

                                    {/* ==================================================
                                        DEFAULT PROFILE INFO
                                    ================================================== */}
                                    <div
                                        className={[
                                            "pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-7",
                                            "transition-all duration-500",
                                            isActive
                                                ? "translate-y-4 opacity-0"
                                                : "translate-y-0 opacity-100 group-hover:translate-y-4 group-hover:opacity-0",
                                        ].join(" ")}
                                    >
                                        <h3 className="text-xl font-medium tracking-[-0.03em] text-white">
                                            {member.name}
                                        </h3>

                                        <p className="mt-2 text-xs font-medium uppercase leading-5 tracking-[0.12em] text-white/70">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* ==================================================
                                        HOVER / ACTIVE PROFILE INFO
                                    ================================================== */}
                                    <div
                                        className={[
                                            "pointer-events-none absolute inset-0 flex flex-col justify-end p-6 md:p-7",
                                            "transition-all duration-500",
                                            isActive
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                                        ].join(" ")}
                                    >
                                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                                            {member.role}
                                        </p>

                                        <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-white">
                                            {member.name}
                                        </h3>

                                        <p className="mt-5 max-w-md text-sm leading-6 text-white/75 md:text-base md:leading-7">
                                            {member.description}
                                        </p>
                                    </div>

                                    {/* ==================================================
                                        FOCUS INDICATOR
                                    ================================================== */}
                                    <div
                                        className={[
                                            "pointer-events-none absolute inset-0 border-2 border-[#D39B2A]",
                                            "transition-opacity duration-300",
                                            isActive
                                                ? "opacity-100"
                                                : "opacity-0 group-focus-visible:opacity-100",
                                        ].join(" ")}
                                    />
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}