import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

import shopImage from "../assets/images/dominion-shop.jpeg";
import dineImage from "../assets/images/dominion-dine.jpeg";
import playImage from "../assets/images/dominion-play.jpeg";
import stayImage from "../assets/images/dominion-stay.jpeg";

// Experience content used to generate the four destination cards.
const experiences = [
    {
        number: "01",
        title: "Shop",
        statement: "Shop the Extraordinary.",
        description:
            "Premium retail, flagship brands and everyday essentials brought together in one destination.",
        image: shopImage,
        href: "#mall",
    },
    {
        number: "02",
        title: "Dine",
        statement: "Taste Something New.",
        description:
            "From coffee and casual dining to refined experiences, discover new ways to eat, meet and linger.",
        image: dineImage,
        href: "#dining",
    },
    {
        number: "03",
        title: "Play",
        statement: "Where the Fun Begins.",
        description:
            "Entertainment and experiences designed for families, friends and everyone in between.",
        image: playImage,
        href: "#entertainment",
    },
    {
        number: "04",
        title: "Stay",
        statement: "Stay a Little Longer.",
        description:
            "A complete destination where hospitality gives you another reason to stay, recharge and return.",
        image: stayImage,
        href: "#hotel",
    },
];

export function Experience() {
    return (
        <section
            id="experience"
            className="bg-[#f4f4f2] py-24 text-black md:py-32 lg:py-40"
        >
            <Container>
                {/* Section introduction */}
                <div className="mb-12 md:mb-16 lg:mb-20">
                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <SectionLabel>The Dominion Experience</SectionLabel>
                    </motion.div>

                    {/* Main section heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            delay: 0.1,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-5 max-w-5xl text-[clamp(2.25rem,4vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.04em]"
                    >
                        Four ways to experience a destination designed around how people
                        shop, connect, gather, stay and return.
                    </motion.h2>
                </div>

                {/* Experience cards */}
                <div className="grid gap-2 border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">
                    {experiences.map((experience, index) => (
                        <motion.a
                            key={experience.number}
                            href={experience.href}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden border-b border-r border-black/10 bg-white p-6 transition-colors duration-500 md:min-h-[460px] lg:min-h-[500px] lg:p-7"
                        >
                            {/* Hover image layer */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <img
                                    src={experience.image}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />

                                {/* Dark overlay keeps the card content readable */}
                                <div className="absolute inset-0 bg-black/45" />
                            </div>

                            {/* Card top: number and arrow */}
                            <div className="relative z-10 flex items-start justify-between">
                                <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/45 transition-colors duration-500 group-hover:text-white/65">
                                    {experience.number}
                                </span>

                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1.7}
                                    className="text-black/45 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                                />
                            </div>

                            {/* Card bottom: title, statement and description */}
                            <div className="relative z-10">
                                <h3 className="text-[clamp(2rem,3vw,3rem)] font-medium leading-none tracking-[-0.04em] text-black transition-colors duration-500 group-hover:text-white">
                                    {experience.title}
                                </h3>

                                <p className="mt-3 text-base font-medium text-black/55 transition-colors duration-500 group-hover:text-white/85">
                                    {experience.statement}
                                </p>

                                {/* Description reveals when the card is hovered */}
                                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                                    <div className="overflow-hidden">
                                        <p className="mt-4 max-w-xs text-sm leading-6 text-white/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            {experience.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </Container>
        </section>
    );
}