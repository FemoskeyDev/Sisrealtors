import { ZoomIn } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "../components/Container";
import { ImageInspectionGallery } from "../components/ImageInspectionGallery";
import { SectionLabel } from "../components/SectionLabel";

import amusementParkInteriorImage from "../assets/images/Amusement-park-interior.jpeg";
import amusementParkImage from "../assets/images/Amusement-park.jpeg";
import playImage from "../assets/images/dominion-play.jpg";

const features = [
    {
        number: "01",
        title: "FAMILY",
        description: "Experiences for families and children.",
    },
    {
        number: "02",
        title: "FUN",
        description: "Entertainment for different ages and interests.",
    },
    {
        number: "03",
        title: "EVENTS",
        description:
            "Spaces and experiences designed for celebrations and gatherings.",
    },
    {
        number: "04",
        title: "EXPERIENCES",
        description: "Reasons to keep discovering something new.",
    },
];

const inspectionImages = [
    {
        src: amusementParkInteriorImage,
        alt: "Amusement park interior rendering",
    },
];

export function AmusementPark() {
    return (
        <section
            id="entertainment"
            className="bg-neutral-800 py-24 text-white md:py-32 lg:py-40"
        >
            <Container>
                {/* ==================================================
                    SECTION INTRODUCTION
                ================================================== */}

                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <SectionLabel dark>PLAY</SectionLabel>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{
                                delay: 0.1,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-5 max-w-5xl text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.92] tracking-[-0.055em]"
                        >
                            Where the {" "}
                            <span className="font-serif italic text-white/45">
                                fun begins.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            delay: 0.2,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-lg lg:pb-2"
                    >
                        <p className="text-base leading-7 text-white/60 md:text-lg md:leading-8">
                            Dominion’s entertainment experience is designed
                            around families, friends and memorable moments.
                        </p>
                        <p className="mt-5 text-base leading-7 text-white/60 md:text-lg md:leading-8">
                            A destination where visitors can spend more time,
                            create experiences and return again and again.
                        </p>
                    </motion.div>
                </div>

                {/* ==================================================
                    IMAGE COMPOSITION
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
                    className="mt-16 md:mt-24"
                >
                    <ImageInspectionGallery
                        images={inspectionImages}
                        renderGallery={(openImage) => (
                            <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
                                <button
                                    type="button"
                                    onClick={() => openImage(0)}
                                    aria-label="Inspect amusement park interior image"
                                    className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:aspect-auto"
                                >
                                    <img
                                        src={amusementParkInteriorImage}
                                        alt={inspectionImages[0].alt}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                                    />
                                    <span
                                        aria-hidden="true"
                                        className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center bg-black/75 text-white backdrop-blur-sm transition-colors group-hover:bg-black"
                                    >
                                        <ZoomIn
                                            size={18}
                                            strokeWidth={1.8}
                                        />
                                    </span>
                                </button>

                                <div className="grid gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{
                                            once: true,
                                            margin: "-5% 0px",
                                        }}
                                        transition={{
                                            delay: 0.08,
                                            duration: 0.7,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="aspect-[16/9] overflow-hidden bg-neutral-900 lg:aspect-auto"
                                    >
                                        <img
                                            src={amusementParkImage}
                                            alt=""
                                            aria-hidden="true"
                                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{
                                            once: true,
                                            margin: "-5% 0px",
                                        }}
                                        transition={{
                                            delay: 0.16,
                                            duration: 0.7,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="aspect-[16/9] overflow-hidden bg-neutral-900 lg:aspect-auto"
                                    >
                                        <img
                                            src={playImage}
                                            alt=""
                                            aria-hidden="true"
                                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        )}
                    />
                </motion.div>

                {/* ==================================================
                    FEATURE HIGHLIGHTS
                ================================================== */}

                <div className="mt-16 grid border-y border-white/15 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={[
                                "border-b border-white/15 py-7 sm:px-6 sm:py-8 lg:border-b-0",
                                index % 2 === 0 ? "sm:border-r" : "",
                                index === 1 || index === 2
                                    ? "lg:border-r"
                                    : "",
                            ].join(" ")}
                        >
                            <div className="flex gap-5">
                                <span className="pt-1 text-xs text-white/35">
                                    {feature.number}
                                </span>
                                <div>
                                    <h3 className="text-sm font-medium tracking-[0.16em] text-white/75">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-4 max-w-xs text-sm leading-7 text-white/55 md:text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
            </Container>
        </section>
    );
}
