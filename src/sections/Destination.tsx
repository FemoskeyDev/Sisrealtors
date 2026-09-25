import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

import masterplanImage from "../assets/images/dominion-intro-02.jpeg";

// ============================================================
// DESTINATION DATA
// Content reflects the four destination components in the brief.
// ============================================================

const destinations = [
    {
        id: "mall",
        number: "01",
        title: "Mall",
        description:
            "A contemporary retail destination bringing fashion, beauty, technology, home, lifestyle, dining and entertainment together.",
        position: {
            left: "29%",
            top: "42%",
        },
    },
    {
        id: "hotel",
        number: "02",
        title: "Hotel",
        description:
            "Hospitality designed to give visitors a reason to stay longer, unwind and experience Dominion beyond the day.",
        position: {
            left: "69%",
            top: "30%",
        },
    },
    {
        id: "entertainment",
        number: "03",
        title: "Amusement Park",
        description:
            "A destination for family activities, social moments and amusement park fun throughout the day.",
        position: {
            left: "72%",
            top: "66%",
        },
    },
    {
        id: "dining",
        number: "04",
        title: "Dining & Lifestyle",
        description:
            "Restaurants, cafés and lifestyle experiences designed around gathering, conversation and discovery.",
        position: {
            left: "38%",
            top: "72%",
        },
    },
];

export function Destination() {
    const [activeDestination, setActiveDestination] = useState(
        destinations[0],
    );

    return (
        <section
            id="destination"
            className="bg-white py-24 text-black md:py-32 lg:py-40"
        >
            <Container>
                {/* ==================================================
                    SECTION INTRODUCTION
                ================================================== */}

                <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
                    <div className="max-w-4xl">
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
                                Discover Dominion Leisure
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
                            className="mt-5 max-w-3xl text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.92] tracking-[-0.055em]"
                        >
                            Everything you need.{" "}
                            <span className="font-serif italic text-black/35">
                                All in one place.
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
                        className="mt-8 max-w-md lg:mt-0 lg:pb-2"
                    >
                        <p className="text-base leading-7 text-black/60 md:text-lg md:leading-8">
                            One destination bringing retail, hospitality,
                            the amusement park, dining and lifestyle together.
                        </p>
                    </motion.div>
                </div>

                {/* ==================================================
                    MASTERPLAN
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
                    className="mt-16 md:mt-24 lg:mt-28"
                >
                    <div className="grid overflow-hidden border border-black/10 lg:grid-cols-[1fr_320px]">
                        {/* ==========================================
                            MASTERPLAN VISUAL
                        ========================================== */}

                        <div className="relative aspect-[4/3] md:min-h-[650px] lg:min-h-[760px] overflow-hidden bg-neutral-100 md:min-h-[650px] lg:aspect-auto lg:min-h-[760px]">
                            <motion.img
                                src={masterplanImage}
                                alt="Dominion Leisure City"
                                className="absolute inset-0 h-full w-full object-cover"
                                initial={{ scale: 1.05 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />

                            {/* Soft visual treatment */}
                            <div className="absolute inset-0 bg-black/5" />

                            {/* ======================================
                                INTERACTIVE HOTSPOTS
                            ====================================== */}

                            {destinations.map((destination) => {
                                const isActive =
                                    activeDestination.id ===
                                    destination.id;

                                return (
                                    <button
                                        key={destination.id}
                                        type="button"
                                        onClick={() =>
                                            setActiveDestination(
                                                destination,
                                            )
                                        }
                                        aria-label={`View ${destination.title}`}
                                        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            left: destination.position.left,
                                            top: destination.position.top,
                                        }}
                                    >
                                        {/* Pulse */}
                                        <span
                                            className={[
                                                "absolute inset-0 rounded-full transition-all duration-500",
                                                isActive
                                                    ? "animate-ping bg-white/50"
                                                    : "bg-transparent",
                                            ].join(" ")}
                                        />

                                        {/* Point */}
                                        <span
                                            className={[
                                                "relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
                                                isActive
                                                    ? "border-white bg-white text-black scale-110"
                                                    : "border-white/80 bg-black/50 text-white backdrop-blur-sm hover:scale-110 hover:bg-white hover:text-black",
                                            ].join(" ")}
                                        >
                                            <span className="text-[10px] font-medium">
                                                {destination.number}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}

                            {/* Active hotspot label */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDestination.id}
                                    initial={{
                                        opacity: 0,
                                        y: 8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -8,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="absolute bottom-6 left-6 z-20 max-w-xs md:bottom-8 md:left-8"
                                >
                                    <div className="bg-black/80 p-5 text-white backdrop-blur-md md:p-6">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                                            {activeDestination.number}
                                        </p>

                                        <h3 className="mt-2 text-xl font-medium tracking-[-0.02em]">
                                            {activeDestination.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* ==========================================
                            DESTINATION DETAILS
                        ========================================== */}

                        <div className="flex flex-col justify-between bg-neutral-50 p-7 md:p-10 lg:p-8">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-black/35">
                                    Explore the destination
                                </p>

                                {/* Destination navigation */}
                                <div className="mt-8">
                                    {destinations.map((destination) => {
                                        const isActive =
                                            activeDestination.id ===
                                            destination.id;

                                        return (
                                            <button
                                                key={destination.id}
                                                type="button"
                                                onClick={() =>
                                                    setActiveDestination(
                                                        destination,
                                                    )
                                                }
                                                className="group flex w-full items-center justify-between border-t border-black/10 py-5 text-left last:border-b"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span
                                                        className={[
                                                            "text-xs transition-colors duration-300",
                                                            isActive
                                                                ? "text-black"
                                                                : "text-black/30 group-hover:text-black/60",
                                                        ].join(" ")}
                                                    >
                                                        {destination.number}
                                                    </span>

                                                    <span
                                                        className={[
                                                            "text-base transition-colors duration-300",
                                                            isActive
                                                                ? "text-black"
                                                                : "text-black/45 group-hover:text-black",
                                                        ].join(" ")}
                                                    >
                                                        {destination.title}
                                                    </span>
                                                </div>

                                                <ArrowUpRight
                                                    size={17}
                                                    strokeWidth={1.7}
                                                    className={[
                                                        "transition-all duration-300",
                                                        isActive
                                                            ? "translate-x-0 -translate-y-0 text-black"
                                                            : "translate-y-1 -translate-x-1 text-black/20 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-black",
                                                    ].join(" ")}
                                                />
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Active description */}
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={activeDestination.id}
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -10,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                        }}
                                        className="mt-8 text-sm leading-7 text-black/55"
                                    >
                                        {
                                            activeDestination.description
                                        }
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                          
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
