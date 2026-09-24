import { motion } from "motion/react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { Button } from "../components/Button";

import mallImage from "../assets/images/dominion-shop.jpeg";

// ============================================================
// MALL DATA
// Content follows the Dominion Leisure City project brief.
// ============================================================

const mallStats = [
    {
        value: "5",
        unit: "",
        label: "Floors",
    },
    {
        value: "35,900",
        unit: "SQM",
        label: "Gross Floor Area",
    },
    {
        value: "88,670",
        unit: "SQM",
        label: "Total Lettable Area",
    },
];

const mallCategories = [
    "Fashion",
    "Beauty",
    "Technology",
    "Home & Lifestyle",
    "Dining",
    "Entertainment",
];

export function Mall() {
    return (
        <section
            id="mall"
            className="bg-white py-24 text-black md:py-32 lg:py-40"
        >
            <Container>
                {/* ==================================================
                    SECTION INTRODUCTION
                ================================================== */}

                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
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
                                The Heart of Dominion Leisure City
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
                            className="mt-5 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.92] tracking-[-0.055em]"
                        >
                            Shop the{" "}
                            <span className="font-serif italic text-black/35">
                                extraordinary.
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
                        className="max-w-xl"
                    >
                        <p className="text-base leading-7 text-black/60 md:text-lg md:leading-8">
                            Dominion Mall is designed to become a new retail
                            and lifestyle destination for Lagos. Across five
                            floors, the mall brings together premium retail,
                            anchor stores, restaurants, cinemas, lifestyle
                            outlets and entertainment zones within one
                            contemporary environment.
                        </p>
                    </motion.div>
                </div>

                {/* ==================================================
                    MALL IMAGE
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
                    className="mt-16 overflow-hidden md:mt-24"
                >
                    <div className="aspect-[16/9] overflow-hidden bg-neutral-100 md:min-h-[620px] lg:min-h-[720px]">
                        <motion.img
                            src={mallImage}
                            alt="Dominion Mall"
                            className="h-full w-full object-cover"
                            initial={{ scale: 1.05 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        />
                    </div>
                </motion.div>

                {/* ==================================================
                    PROJECT STATISTICS
                ================================================== */}

                <div className="mt-12 grid border-y border-black/10 md:grid-cols-3">
                    {mallStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                margin: "-10% 0px",
                            }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={[
                                "py-8 md:px-8 md:py-10",
                                index !== 0
                                    ? "border-t border-black/10 md:border-l md:border-t-0"
                                    : "",
                            ].join(" ")}
                        >
                            <div className="flex items-end gap-2">
                                <span className="text-[clamp(2.75rem,5vw,5rem)] font-medium leading-none tracking-[-0.05em]">
                                    {stat.value}
                                </span>

                                {stat.unit && (
                                    <span className="pb-1 text-sm uppercase tracking-[0.15em] text-black/40">
                                        {stat.unit}
                                    </span>
                                )}
                            </div>

                            <p className="mt-4 text-sm text-black/50">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* ==================================================
                    BRAND CATEGORIES
                ================================================== */}

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
                    className="mt-16 md:mt-24"
                >
                    <div className="flex flex-col gap-8 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
                        <div>
                            <SectionLabel>
                                Brand Categories
                            </SectionLabel>

                            <h3 className="mt-4 max-w-xl text-2xl font-normal tracking-[-0.03em] md:text-3xl">
                                A destination built around the way people
                                shop, discover and experience.
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        {mallCategories.map((category, index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    margin: "-5% 0px",
                                }}
                                transition={{
                                    delay: index * 0.06,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="border-b border-black/10 py-6 pr-5 text-sm text-black/55 md:py-7 md:pr-6 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0"
                            >
                                {category}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ==================================================
                    CALL TO ACTIONS
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
                    className="mt-12 flex flex-col gap-4 sm:flex-row"
                >
                    <Button href="#brands">
                        Explore the Mall
                    </Button>

                    <Button
                        href="#partnership"
                        variant="secondary"
                    >
                        Become a Dominion Brand
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}