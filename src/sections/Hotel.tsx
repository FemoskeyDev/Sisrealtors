import { motion } from "motion/react";
import {
    BedDouble,
    UsersRound,
    Utensils,
    CalendarDays,
    type LucideIcon,
} from "lucide-react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { Button } from "../components/Button";

import hotelImage from "../assets/images/hotel.jpeg";

// ============================================================
// HOTEL EXPERIENCE DATA
// Content follows the Dominion Leisure City project brief.
// ============================================================

interface HotelExperience {
    title: string;
    description: string;
    icon: LucideIcon;
}

const hotelExperiences: HotelExperience[] = [
    {
        title: "Rooms",
        description:
            "Comfortable accommodation for business and leisure.",
        icon: BedDouble,
    },
    {
        title: "Meetings",
        description:
            "Spaces designed for corporate meetings and conferences.",
        icon: UsersRound,
    },
    {
        title: "Dining",
        description:
            "Food and beverage experiences for guests and visitors.",
        icon: Utensils,
    },
    {
        title: "Events",
        description:
            "Hospitality environment capable of supporting all gatherings.",
        icon: CalendarDays,
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
                            Dominion Leisure City’s 12-storey 4-star hotel
                            extends the destination beyond retail. Designed
                            for business travellers, tourists, conference
                            attendees and international visitors, the hotel
                            provides a premium hospitality environment within
                            the wider Dominion ecosystem.
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
                    className="mt-12 flex flex-col gap-8 pt-10 md:mt-16 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <p className="max-w-2xl text-[clamp(1.75rem,3vw,3rem)] leading-[1.05] tracking-[-0.035em] text-white/65">
                            Everything you need to make staying part of the experience.
                        </p>
                    </div>

                    <Button href="#hotel" variant="tertiary">
                        Discover the Hotel
                    </Button>
                </motion.div>

                {/* ==================================================
                    HOTEL EXPERIENCES
                ================================================== */}

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                    {hotelExperiences.map((experience, index) => {
                        const Icon = experience.icon;

                        return (
                            <motion.div
                                key={experience.title}
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
                                className="group"
                            >
                                <div className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-8">
                                    {/* Experience icon */}
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-white/55 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                                        <Icon
                                            size={19}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    {/* Experience content */}
                                    <div className="mt-10">
                                        <h4 className="text-2xl font-medium tracking-[-0.03em]">
                                            {experience.title}
                                        </h4>

                                        <p className="mt-4 max-w-md text-sm leading-7 text-white/50 md:text-base">
                                            {experience.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </Container>
        </section>
    );
}