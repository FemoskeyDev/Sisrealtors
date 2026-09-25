import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

import amusementParkImage from "../assets/images/Amusement-park.jpeg";
import diningImage from "../assets/images/dominion-dine.jpeg";
import masterplanImage from "../assets/images/Full-Projects-View.jpeg";
import hotelImage from "../assets/images/hotel.jpeg";
import mallImage from "../assets/images/mall.jpeg";

// ============================================================
// DESTINATION DATA
// ============================================================

const destinations = [
    {
        id: "mall",
        number: "01",
        title: "Mall",
        description:
            "A contemporary retail destination bringing fashion, beauty, technology, home, lifestyle, dining and entertainment together.",
        cta: "Explore the Mall",
        image: mallImage,
        href: "#mall",
        position: { left: "34%", top: "41%" },
    },
    {
        id: "hotel",
        number: "02",
        title: "Hotel",
        description:
            "Hospitality designed to give visitors a reason to stay longer, unwind and experience Dominion beyond the day.",
        cta: "Explore the Hotel",
        image: hotelImage,
        href: "#hotel",
        position: { left: "67%", top: "40%" },
    },
    {
        id: "entertainment",
        number: "03",
        title: "Amusement Park",
        description:
            "A destination for family activities, social moments and amusement park fun throughout the day.",
        cta: "Explore the Amusement Park",
        image: amusementParkImage,
        href: "#entertainment",
        position: { left: "22%", top: "65%" },
    },
    {
        id: "dining",
        number: "04",
        title: "Dining & Lifestyle",
        description:
            "Restaurants, cafés and lifestyle experiences designed around gathering, conversation and discovery.",
        cta: "Explore Dining & Lifestyle",
        image: diningImage,
        href: "#experience",
        position: { left: "88%", top: "46%" },
    },
];

type Destination = (typeof destinations)[number];

interface DestinationInfoCardProps {
    destination: Destination;
    onClose: () => void;
    className: string;
    idSuffix: "desktop" | "mobile";
}

function DestinationInfoCard({
    destination,
    onClose,
    className,
    idSuffix,
}: DestinationInfoCardProps) {
    const titleId = `destination-card-${destination.id}-${idSuffix}`;

    return (
        <motion.article
            aria-live="polite"
            aria-labelledby={titleId}
            className={className}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-black/45">
                        {destination.number} / {destination.title}
                    </p>
                    <h3
                        id={titleId}
                        className="mt-2 text-xl font-medium tracking-[-0.02em]"
                    >
                        {destination.title}
                    </h3>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label={`Close ${destination.title} details`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/10 text-black/65 transition-colors hover:bg-black/5 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#051B41]"
                >
                    <X size={16} strokeWidth={1.8} />
                </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-black/60">
                {destination.description}
            </p>

            <div className="mt-4 flex items-center gap-4">
                <img
                    src={destination.image}
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-20 shrink-0 object-cover"
                    loading="lazy"
                />
                <Button
                    href={destination.href}
                    variant="primary"
                    className="min-h-11 flex-1 justify-between gap-2 px-3"
                >
                    {destination.cta}
                </Button>
            </div>
        </motion.article>
    );
}

export function Destination() {
    const [selectedDestinationId, setSelectedDestinationId] = useState<
        string | null
    >(null);
    const selectedDestination = destinations.find(
        (destination) => destination.id === selectedDestinationId,
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
                    INTERACTIVE MASTERPLAN
                ================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5% 0px" }}
                    transition={{
                        delay: 0.15,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-16 md:mt-24 lg:mt-28"
                >
                    <div className="relative isolate aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                        <motion.img
                            src={masterplanImage}
                            alt="Full project view of Dominion Leisure City"
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover"
                            initial={{ scale: 1.05 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        />

                        {/* Minimal contrast treatment for the markers */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-black/[0.03]"
                        />

                        {destinations.map((destination) => {
                            const isActive =
                                selectedDestinationId === destination.id;

                            return (
                                <button
                                    key={destination.id}
                                    type="button"
                                    onClick={() =>
                                        setSelectedDestinationId(
                                            destination.id,
                                        )
                                    }
                                    aria-label={`View ${destination.title}`}
                                    aria-pressed={isActive}
                                    className="group absolute z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D39B2A]"
                                    style={{
                                        left: destination.position.left,
                                        top: destination.position.top,
                                    }}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={[
                                            "block h-3 w-3 rounded-full border border-white bg-[#051B41] shadow-[0_0_0_3px_rgba(255,255,255,0.45)] transition-all duration-200 group-hover:scale-125",
                                            isActive
                                                ? "scale-125 bg-[#D39B2A] shadow-[0_0_0_5px_rgba(211,155,42,0.35)]"
                                                : "",
                                        ].join(" ")}
                                    />
                                </button>
                            );
                        })}

                        {/* Desktop contextual card */}
                        <div className="absolute bottom-6 right-6 z-20 hidden w-full max-w-sm lg:block">
                            <AnimatePresence mode="wait">
                                {selectedDestination && (
                                    <DestinationInfoCard
                                        key={selectedDestination.id}
                                        destination={selectedDestination}
                                        onClose={() =>
                                            setSelectedDestinationId(null)
                                        }
                                        idSuffix="desktop"
                                        className="border border-black/10 bg-white/95 p-5 text-black backdrop-blur-sm"
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile contextual card follows the visible masterplan */}
                    <div className="mt-4 lg:hidden">
                        <AnimatePresence mode="wait">
                            {selectedDestination && (
                                <DestinationInfoCard
                                    key={selectedDestination.id}
                                    destination={selectedDestination}
                                    onClose={() =>
                                        setSelectedDestinationId(null)
                                    }
                                    idSuffix="mobile"
                                    className="border border-black/10 bg-neutral-50 p-5 text-black"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
