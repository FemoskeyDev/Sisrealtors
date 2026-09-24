import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { Button } from "../components/Button";

// ============================================================
// TENANT CATEGORIES
// Content follows the Dominion Leisure City project brief.
// ============================================================

const tenantCategories = [
    "Fashion",
    "Beauty",
    "Technology",
    "Supermarket",
    "Dining",
    "Entertainment",
    "Lifestyle",
    "Home & Living",
    "Services",
];

export function BrandPartnership() {
    return (
        <section
            id="brands"
            className="bg-neutral-950 py-24 text-white md:py-32 lg:py-40"
        >
            <Container>
                {/* ==================================================
                    SECTION INTRODUCTION
                ================================================== */}

                <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
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
                                For Brands
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
                            Your brand deserves a{" "}
                            <span className="font-serif italic text-white/45">
                                destination.
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
                        <p className="text-base leading-7 text-white/60 md:text-lg md:leading-8">
                            Dominion Leisure City is being created as a
                            meeting point between exceptional brands and a
                            growing community of consumers along the
                            Lekki–Epe corridor.
                        </p>

                        <p className="mt-6 text-base leading-7 text-white/45 md:text-lg md:leading-8">
                            From international names to ambitious Nigerian
                            brands, Dominion is designed to provide a
                            platform for businesses to connect, grow and
                            create lasting customer experiences.
                        </p>
                    </motion.div>
                </div>

                {/* ==================================================
                    TENANT CATEGORIES
                ================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        margin: "-10% 0px",
                    }}
                    transition={{
                        delay: 0.15,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-16 border-y border-white/10 md:mt-24"
                >
                    <div className="grid md:grid-cols-[0.35fr_1fr]">
                        {/* Category heading */}
                        <div className="border-b border-white/10 py-7 md:border-b-0 md:border-r md:py-10 md:pr-8">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                Ideal Tenant Categories
                            </p>
                        </div>

                        {/* Category list */}
                        <div className="grid grid-cols-2 sm:grid-cols-3">
                            {tenantCategories.map(
                                (category, index) => (
                                    <motion.div
                                        key={category}
                                        initial={{
                                            opacity: 0,
                                            y: 12,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: index * 0.04,
                                            duration: 0.5,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        className="group border-b border-white/10 py-6 pr-5 sm:pr-8"
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
                                                {category}
                                            </span>

                                            <ArrowUpRight
                                                size={15}
                                                strokeWidth={1.6}
                                                className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                                            />
                                        </div>
                                    </motion.div>
                                ),
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* ==================================================
                    PARTNERSHIP CTA
                ================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
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
                    className="mt-16 grid gap-8 md:mt-24 md:grid-cols-[1fr_auto] md:items-end"
                >
                    <div>
                        <p className="max-w-2xl text-[clamp(1.75rem,3vw,3rem)] leading-[1.05] tracking-[-0.035em] text-white/70">
                            Build your next chapter in a destination
                            designed to bring brands and people together.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                        <Button
                            href="#partnership"
                            variant="primary"
                        >
                            Become a Dominion Brand
                        </Button>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium !text-white transition-colors duration-300 hover:text-white/65"
                        >
                            Register your interest
                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.8}
                            />
                        </a>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}