import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

// ============================================================
// LOCATION HIGHLIGHTS
// Content follows the supplied Dominion Leisure City brief.
// ============================================================

const locationHighlights = [
    {
        number: "01",
        title: "Lekki–Epe Expressway",
        description:
            "A major growth corridor connecting expanding residential and commercial communities.",
    },
    {
        number: "02",
        title: "Lekki Deep Sea Port",
        description:
            "A major maritime infrastructure development within the wider growth corridor.",
    },
    {
        number: "03",
        title: "Dangote Refinery",
        description:
            "A significant industrial development within the region.",
    },
    {
        number: "04",
        title: "Lekki Free Trade Zone",
        description:
            "An expanding economic and industrial hub.",
    },
    {
        number: "05",
        title: "Lekki International Airport",
        description: "Location information to be confirmed.",
    },
    {
        number: "06",
        title: "Alaro City",
        description: "Location information to be confirmed.",
    },
];

export function Location() {
    return (
        <section
            id="location"
            className="bg-white py-24 text-black md:py-32 lg:py-40"
        >
            <Container>
                {/* ==================================================
                    SECTION INTRODUCTION
                ================================================== */}

                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
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
                                The Location
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
                            Where{" "}
                            <span className="font-serif italic text-black/35">
                                Lagos is going.
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
                        className="max-w-lg lg:pt-10"
                    >
                        <p className="text-base leading-7 text-black/60 md:text-lg md:leading-8">
                            Strategically positioned along the
                            Lekki–Epe Expressway, Dominion sits within
                            one of Lagos State’s major growth corridors.
                            The surrounding region is experiencing
                            significant residential, industrial,
                            commercial and infrastructure development.{" "}
                            <span className="font-semibold text-yellow-600">
                                Positioned within a corridor shaped by growth, movement and
                                opportunity.
                            </span>
                        </p>
                    </motion.div>
                </div>

                {/* ==================================================
                    LOCATION HIGHLIGHTS
                ================================================== */}

                <div className="mt-16 md:mt-24">
                    <div className="mb-8 flex items-end justify-between border-b border-black/10 pb-6">
                        <SectionLabel>
                            Location Highlights
                        </SectionLabel>

                    </div>

                    <div className="grid md:grid-cols-2">
                        {locationHighlights.map(
                            (location, index) => (
                                <motion.a
                                    key={location.number}
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                        "group border-b border-black/10 py-8 md:p-10",
                                        index % 2 === 0
                                            ? "md:border-r"
                                            : "",
                                    ].join(" ")}
                                >
                                    <div className="flex gap-6">
                                        {/* Number */}
                                        <span className="pt-1 text-xs text-black/30">
                                            {location.number}
                                        </span>

                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-5">
                                                <h3 className="text-xl font-medium tracking-[-0.025em] md:text-2xl">
                                                    {location.title}
                                                </h3>

                                                <ArrowUpRight
                                                    size={18}
                                                    strokeWidth={1.6}
                                                    className="shrink-0 text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
                                                />
                                            </div>

                                            <p className="mt-4 max-w-md text-sm leading-7 text-black/50 md:text-base">
                                                {
                                                    location.description
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </motion.a>
                            ),
                        )}
                    </div>
                </div>

            </Container>
        </section>
    );
}
