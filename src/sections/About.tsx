import { motion } from "motion/react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

import destinationBackdrop from "../assets/images/dominion-intro-01.jpeg";
import developmentImage from "../assets/images/dominion-intro-02.jpeg";
import destinationImage from "../assets/images/dominion-hero-alt.jpeg";

export function About() {
    return (
        <section id="about" className="relative isolate overflow-hidden p-16 md:p-24 lg:py-32">
            {/* Full-width Dominion visual backdrop */}
            <div aria-hidden="true" className="absolute inset-0 -z-10">
                <img
                    src={destinationBackdrop}
                    alt=""
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-950/75" />
            </div>

            <Container>
                <div className="overflow-hidden rounded-2xl bg-stone-50 text-neutral-950">
                    {/* About introduction */}
                    <div className="grid gap-10 p-6 sm:p-10 md:gap-14 md:p-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:p-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <SectionLabel>ABOUT US</SectionLabel>
                            <h2 className="mt-6 max-w-xl text-[clamp(2.5rem,5vw,5rem)] font-normal leading-[0.98] tracking-[-0.05em] font-serif italic">
                               S.I.S. Realtors Limited
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{
                                delay: 0.1,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-3xl lg:pt-10"
                        >
                            <p className="text-base leading-7 text-black/65 md:text-lg md:leading-8">
                                S.I.S. Realtors Limited is a forward-thinking real estate development company focused on developing landmarks and creating destinations. We create thoughtfully planned residential, commercial, hospitality and lifestyle developments designed for lasting value.
                            </p>
                            <p className="mt-6 text-base leading-7 text-black/65 md:text-lg md:leading-8">
                                Our flagship Dominion Leisure City is envisioned as an integrated destination combining shopping, hospitality, entertainment and leisure along the Lekki–Epe corridor. Beyond its commercial value, the project is designed to create jobs, support local businesses, develop skills and contribute to the growth of the surrounding economy.
                            </p>
                        </motion.div>
                    </div>

                    {/* Architectural image composition */}
                    <div className="grid gap-4 p-6 sm:p-10 md:gap-6 md:p-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-8 lg:p-20">
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5% 0px" }}
                            transition={{
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="aspect-[4/3] overflow-hidden bg-neutral-200 lg:mb-16"
                        >
                            <img
                                src={developmentImage}
                                alt="Architectural view of Dominion Leisure City"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5% 0px" }}
                            transition={{
                                delay: 0.12,
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="aspect-[4/3] overflow-hidden bg-neutral-200 lg:aspect-[1.35/1]"
                        >
                            <img
                                src={destinationImage}
                                alt="Dominion Leisure City exterior and surrounding grounds"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </motion.div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
