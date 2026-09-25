import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { Button } from "../components/Button";

import hotelImage from "../assets/images/hotel.jpeg";

// ============================================================
// HOTEL EXPERIENCE DATA
// Content follows the Dominion Leisure City project brief.
// ============================================================

const hotelExperiences = [
    {
        number: "01",
        title: "Rooms",
        description:
            "Comfortable accommodation for business and leisure.",
    },
    {
        number: "02",
        title: "Meetings",
        description:
            "Spaces designed for corporate meetings and conferences.",
    },
    {
        number: "03",
        title: "Dining",
        description:
            "Food and beverage experiences for guests and visitors.",
    },
    {
        number: "04",
        title: "Events",
        description:
            "A hospitality environment capable of supporting major occasions and gatherings.",
    },
];

export function Hotel() {
    return (
        <section
            id="hotel"
            className="bg-neutral-950 py-24 text-white md:py-32 lg:py-40"
        >
            <Container>
                {/* ==================================================
                    SECTION INTRODUCTION
                ================================================== */}

                <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">
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
                            <SectionLabel dark>
                                Stay
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
                            Stay a little{" "}
                            <span className="font-serif italic text-white/45">
                                longer.
                            </span>
                        </motion.h2>
                    </div>

                    {/* Supporting copy */}
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
                        className="max-w-lg lg:pb-2"
                    >
                        <p className="text-base leading-7 text-white/60 md:text-lg md:leading-8">
                            Dominion Leisure City’s 12-storey 4-star
                            hotel extends the destination beyond retail.
                            Designed for business travellers, tourists,
                            conference attendees and international
                            visitors, the hotel provides a premium
                            hospitality environment within the wider
                            Dominion ecosystem.
                        </p>
                    </motion.div>
                </div>

                {/* ==================================================
                    HOTEL IMAGE
                ================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        margin: "-5% 0px",
                    }}
                    transition={{
                        delay: 0.15,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-16 md:mt-24"
                >
                    <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 md:min-h-[620px] lg:min-h-[720px]">
                        <motion.img
                            src={hotelImage}
                            alt="Dominion Leisure City hotel"
                            className="h-full w-full object-cover"
                            initial={{ scale: 1.05 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-black/15" />

                        {/* Hotel descriptor */}
                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                                12 Storeys · 4-Star Hospitality
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ==================================================
                    HOTEL EXPERIENCES
                ================================================== */}

                <div className="mt-16 md:mt-24">
                    <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-6">
                        <div>
                            <SectionLabel dark>
                                The Hospitality Experience
                            </SectionLabel>

                            <h3 className="mt-4 max-w-2xl text-[clamp(2rem,3.5vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.04em]">
                                Everything you need to make staying part of
                                the experience.
                            </h3>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2">
                        {hotelExperiences.map(
                            (experience, index) => (
                                <motion.div
                                    key={experience.number}
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
                                        margin: "-10% 0px",
                                    }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.7,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    className={[
                                        "group border-b border-white/10 py-8",
                                        index % 2 === 0
                                            ? "md:border-r md:pr-10"
                                            : "md:pl-10",
                                        index < 2
                                            ? "md:pt-10"
                                            : "md:pt-10",
                                    ].join(" ")}
                                >
                                    <div className="flex gap-6">
                                        {/* Number */}
                                        <span className="pt-1 text-xs text-white/25">
                                            {experience.number}
                                        </span>

                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-6">
                                                <h4 className="text-2xl font-medium tracking-[-0.03em]">
                                                    {experience.title}
                                                </h4>

                                                <ArrowUpRight
                                                    size={18}
                                                    strokeWidth={1.6}
                                                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                                                />
                                            </div>

                                            <p className="mt-4 max-w-md text-sm leading-7 text-white/50 md:text-base">
                                                {
                                                    experience.description
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ),
                        )}
                    </div>
                </div>

                {/* ==================================================
                    CALL TO ACTION
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
                    className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-10 md:mt-24 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                            Hospitality at Dominion
                        </p>

                        <p className="mt-4 max-w-2xl text-[clamp(1.75rem,3vw,3rem)] leading-[1.05] tracking-[-0.035em] text-white/65">
                            Stay for the night. Stay for the experience.
                        </p>
                    </div>

                    <Button href="#partnership">
                        Discover the Hotel
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}