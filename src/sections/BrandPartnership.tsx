import { motion } from "motion/react";
import {
    BriefcaseBusiness,
    Gamepad2,
    Heart,
    House,
    Laptop,
    Shirt,
    ShoppingCart,
    Sparkles,
    Utensils,
} from "lucide-react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";
import { Button } from "../components/Button";

// ============================================================
// TENANT CATEGORIES
// Content follows the Dominion Leisure City project brief.
// ============================================================

const tenantCategories = [
    { name: "Fashion", icon: Shirt },
    { name: "Beauty", icon: Sparkles },
    { name: "Technology", icon: Laptop },
    { name: "Supermarket", icon: ShoppingCart },
    { name: "Dining", icon: Utensils },
    { name: "Entertainment", icon: Gamepad2 },
    { name: "Lifestyle", icon: Heart },
    { name: "Home & Living", icon: House },
    { name: "Services", icon: BriefcaseBusiness },
];

export function BrandPartnership() {
    return (
        <section
            id="brands"
            className="bg-yellow-700 py-24 text-white md:py-32 lg:py-40"
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
                    className="mt-16 md:mt-24"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                        Ideal Tenant Categories
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                        {tenantCategories.map(({ name, icon: Icon }, index) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.04,
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="flex min-h-36 flex-col items-start justify-between gap-6 rounded-lg border border-white/15 bg-black/10 p-4 transition-colors duration-300 hover:bg-black/15 sm:min-h-40 sm:p-6"
                            >
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white/80">
                                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                                </span>
                                <span className="text-sm font-medium text-white/80 sm:text-base">
                                    {name}
                                </span>
                            </motion.div>
                        ))}
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
                            href="/contact"
                            variant="tertiary"
                        >
                            Become a Dominion Brand
                        </Button>

                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
