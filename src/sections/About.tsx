import { motion } from "motion/react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

import destinationBackdrop from "../assets/images/dominion-intro-01.jpeg";
import destinationImage from "../assets/images/dominion-hero-alt.jpeg";

export function About() {
    return (
        <section
            id="about"
            className="relative isolate overflow-hidden py-20 md:py-24 lg:py-32"
        >
            {/* ==================================================
                FULL-WIDTH DOMINION VISUAL BACKDROP
            ================================================== */}
            <div aria-hidden="true" className="absolute inset-0 -z-10">
                <img
                    src={destinationBackdrop}
                    alt=""
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-neutral-950/75" />
            </div>

            <Container>
                <div className="overflow-hidden bg-stone-50 text-neutral-950">
                    {/* ==================================================
                        ABOUT CONTENT
                    ================================================== */}
                    <div className="p-6 sm:p-10 md:p-14 lg:p-20">
                        {/* About introduction */}
                        <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            {/* Company identity */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
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
                                    ABOUT US
                                </SectionLabel>

                                <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.75rem,5vw,5rem)] font-normal italic leading-[0.95] tracking-[-0.05em]">
                                    S.I.S. Realtors Limited
                                </h2>
                            </motion.div>

                            {/* Company story */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
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
                                className="max-w-3xl lg:pt-8"
                            >
                                <p className="text-base leading-7 text-black/65 md:text-lg md:leading-8">
                                    S.I.S. Realtors Limited is a forward-thinking
                                    real estate development company focused on
                                    developing landmarks and creating destinations.
                                    We create thoughtfully planned residential,
                                    commercial, hospitality and lifestyle
                                    developments designed for lasting value.
                                </p>

                                <p className="mt-6 text-base leading-7 text-black/65 md:text-lg md:leading-8">
                                    Our flagship Dominion Leisure City is envisioned
                                    as an integrated destination combining shopping,
                                    hospitality, entertainment and leisure along
                                    the Lekki–Epe corridor. Beyond its commercial
                                    value, the project is designed to create jobs,
                                    support local businesses, develop skills and
                                    contribute to the growth of the surrounding
                                    economy. We build places that people want to
                                    live in, work in, invest in and experience.
                                </p>
                            </motion.div>
                        </div>

                        {/* ==================================================
                            DESTINATION IMAGE
                        ================================================== */}
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                margin: "-5% 0px",
                            }}
                            transition={{
                                delay: 0.12,
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-12"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-neutral-200 sm:aspect-[16/9]">
                                <img
                                    src={destinationImage}
                                    alt="Dominion Leisure City exterior and surrounding grounds"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}