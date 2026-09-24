import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

import introImageOne from "../assets/images/dominion-intro-01.jpeg";
import introImageTwo from "../assets/images/dominion-intro-02.jpeg";

const stats = [
    {
        value: "300,000",
        unit: "SQM",
        label: "Development Site",
    },
    {
        value: "5",
        unit: "Floors",
        label: "Dominion Mall",
    },
    {
        value: "12",
        unit: "Storeys",
        label: "Dominion Hotel",
    },
];

export function Introduction() {
    return (
        <section
            id="experience"
            className="bg-white py-24 text-black md:py-32 lg:py-40"
        >
            <Container>
                {/* Editorial introduction */}
                <div className="w-full lg:w-[82%]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <SectionLabel>Welcome to Dominion</SectionLabel>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            delay: 0.1,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8"
                    >
                        <p className="max-w-5xl text-[clamp(2rem,3.8vw,4rem)] font-normal leading-[1.08] tracking-[-0.025em]">
                            More than a mall.{" "}
                            <span className="text-black/45">
                                A destination designed around how people shop, connect,
                                experience, stay and return.
                            </span>
                        </p>
                    </motion.div>
                </div>

                {/* Supporting story */}
                <div className="mt-1 sm:mt-12 md:mt-20 lg:mt-5 lg:w-[82%]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            delay: 0.1,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-3xl"
                    >
                        <p className="text-base leading-7 text-black/65 md:text-lg md:leading-8">
                            Dominion is designed around a simple idea: bring everything
                            people love about modern city life together in one extraordinary
                            place. From premium retail and dining to hospitality and
                            entertainment, Dominion creates an environment where people can
                            shop, connect, experience, stay and return.
                        </p>

                        <a
                            href="#destination"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-medium !text-black transition-transform duration-300 hover:translate-x-1"
                        >
                            Discover the destination
                            <ArrowUpRight size={16} strokeWidth={1.8} />
                        </a>
                    </motion.div>
                </div>

                {/* Editorial image composition */}
                <div className="mt-16 grid gap-6 md:mt-24 lg:grid-cols-2 lg:gap-8">
                    {/* Image One */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                            <img
                                src={introImageOne}
                                alt="Dominion Leisure City architectural view"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>

                    {/* Image Two */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            delay: 0.15,
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                            <img
                                src={introImageTwo}
                                alt="Dominion Leisure City destination"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Project statistics */}
                <div className="mt-12 grid gap-px bg-black/10 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="bg-white p-7 md:p-8 lg:p-10"
                        >
                            <div className="flex items-baseline gap-2">
                                <span className="text-[clamp(2.5rem,4vw,4.5rem)] font-medium leading-none tracking-[-0.05em]">
                                    {stat.value}
                                </span>

                                <span className="text-sm uppercase tracking-[0.15em] text-black/45">
                                    {stat.unit}
                                </span>
                            </div>

                            <p className="mt-10 text-sm text-black/50">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}