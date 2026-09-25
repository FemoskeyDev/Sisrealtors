import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
    AnimatePresence,
    motion,
    useInView,
    useReducedMotion,
} from "motion/react";
import { Container } from "../components/Container";
import { SectionLabel } from "../components/SectionLabel";

import morningImage from "../assets/images/dominion-intro-01.jpeg";
import exploreImage from "../assets/images/dominion-shop.jpg";
import dineImage from "../assets/images/dominion-dine.jpeg";
import playImage from "../assets/images/dominion-play.jpeg";
import eveningImage from "../assets/images/dominion-intro-02.jpeg";
import stayImage from "../assets/images/dominion-stay.jpeg";

// Timeline content follows the supplied Dominion Leisure City brief.
// Duration is an interaction decision and can be changed per stage.
const dayTimeline = [
    {
        time: "10:00 AM",
        title: "Start the Day.",
        description: "Coffee. Breakfast. Conversations.",
        image: morningImage,
        label: "Morning",
        duration: 5000,
    },
    {
        time: "12:00 PM",
        title: "Explore.",
        description:
            "Discover new brands, fashion, technology, lifestyle and retail.",
        image: exploreImage,
        label: "Discovery",
        duration: 5000,
    },
    {
        time: "2:00 PM",
        title: "Dine.",
        description: "Lunch, meetings and great food.",
        image: dineImage,
        label: "Dining",
        duration: 5000,
    },
    {
        time: "4:00 PM",
        title: "Play.",
        description:
            "Amusement park activities and family experiences.",
        image: playImage,
        label: "Amusement Park",
        duration: 5000,
    },
    {
        time: "7:00 PM",
        title: "Unwind.",
        description:
            "Dinner, social experiences and evening entertainment.",
        image: eveningImage,
        label: "Evening",
        duration: 5000,
    },
    {
        time: "10:00 PM",
        title: "Stay.",
        description:
            "Retreat to the comfort of Dominion’s hospitality experience.",
        image: stayImage,
        label: "Hospitality",
        duration: 5000,
    },
];

export function DayAtDominion() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const sectionRef = useMemo(
        () => ({ current: null as HTMLElement | null }),
        [],
    );

    const sectionInView = useInView(sectionRef, {
        once: true,
        amount: 0.25,
    });

    const activeExperience = dayTimeline[activeIndex];
    const shouldReduceMotion = useReducedMotion();

    // Automatically advances the timeline while the section is visible.
    useEffect(() => {
        if (!sectionInView || isPaused || shouldReduceMotion) {
            return;
        }

        let animationFrame = 0;
        let startTime = performance.now();

        const tick = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const nextProgress = Math.min(
                elapsed / activeExperience.duration,
                1,
            );

            setProgress(nextProgress);

            if (nextProgress >= 1) {
                setActiveIndex(
                    (currentIndex) =>
                        (currentIndex + 1) % dayTimeline.length,
                );
                setProgress(0);
                startTime = performance.now();
            }

            animationFrame = requestAnimationFrame(tick);
        };

        animationFrame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [
        sectionInView,
        isPaused,
        shouldReduceMotion,
        activeIndex,
        activeExperience.duration,
    ]);

    const handleTimelineChange = (index: number) => {
        setActiveIndex(index);
        setProgress(0);
    };

    return (
        <section
            ref={sectionRef}
            id="day-at-dominion"
            className="bg-black py-24 text-white md:py-32 lg:py-40"
        >
            <Container>
                {/* Section introduction */}
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <SectionLabel dark>
                            The Experience
                        </SectionLabel>
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
                        className="mt-5 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-normal leading-[0.92] tracking-[-0.055em]"
                    >
                        Your day.{" "}
                        <span className="font-serif italic text-white/55">
                            Your way.
                        </span>
                    </motion.h2>
                </div>

                {/* Interactive timeline */}
                <div className="mt-16 md:mt-24 lg:mt-28">
                    <div
                        className="overflow-x-auto pb-5"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onFocusCapture={() => setIsPaused(true)}
                        onBlurCapture={() => setIsPaused(false)}
                    >
                        <div className="min-w-[760px]">
                            {/* Timeline line and progress segments */}
                            <div className="relative">
                                <div className="absolute left-0 right-0 top-[11px] h-px bg-white/15" />

                                <div className="relative grid grid-cols-6">
                                    {dayTimeline.map((item, index) => {
                                        const isActive = index === activeIndex;
                                        const isCompleted =
                                            index < activeIndex;

                                        return (
                                            <div
                                                key={item.time}
                                                className="relative"
                                            >
                                                {/* Segment progress */}
                                                {index < dayTimeline.length - 1 && (
                                                    <div className="absolute left-3 right-0 top-[11px] h-px">
                                                        <div
                                                            className={[
                                                                "absolute inset-y-0 left-0 bg-white",
                                                                isCompleted
                                                                    ? "w-full"
                                                                    : "w-0",
                                                            ].join(" ")}
                                                            style={
                                                                isActive
                                                                    ? {
                                                                          width: `${progress * 100}%`,
                                                                      }
                                                                    : undefined
                                                            }
                                                        />
                                                    </div>
                                                )}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleTimelineChange(
                                                            index,
                                                        )
                                                    }
                                                    aria-current={
                                                        isActive
                                                            ? "step"
                                                            : undefined
                                                    }
                                                    className="group relative z-10 text-left"
                                                >
                                                    <span
                                                        className={[
                                                            "flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300",
                                                            isActive
                                                                ? "border-white bg-white"
                                                                : isCompleted
                                                                  ? "border-white bg-white"
                                                                  : "border-white/30 bg-black group-hover:border-white/70",
                                                        ].join(" ")}
                                                    >
                                                        <span
                                                            className={[
                                                                "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                                                                isActive ||
                                                                isCompleted
                                                                    ? "bg-black"
                                                                    : "bg-transparent",
                                                            ].join(" ")}
                                                        />
                                                    </span>

                                                    <span
                                                        className={[
                                                            "mt-5 block text-xs uppercase tracking-[0.18em] transition-colors duration-300",
                                                            isActive
                                                                ? "text-white"
                                                                : "text-white/40 group-hover:text-white/75",
                                                        ].join(" ")}
                                                    >
                                                        {item.time}
                                                    </span>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Active experience */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeExperience.time}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-12 grid overflow-hidden border border-white/10 md:grid-cols-[1.3fr_0.7fr] lg:mt-16"
                        >
                            {/* Experience visual */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 md:aspect-auto md:min-h-[620px]">
                                <motion.img
                                    key={activeExperience.image}
                                    src={activeExperience.image}
                                    alt={`Dominion Leisure City — ${activeExperience.title}`}
                                    className="h-full w-full object-cover"
                                    initial={{ scale: 1.05 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                />

                                <div className="absolute inset-0 bg-black/10" />

                                <div className="absolute left-6 top-6 md:left-8 md:top-8">
                                    <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                                        {activeExperience.label}
                                    </span>
                                </div>
                            </div>

                            {/* Experience content */}
                            <div className="flex flex-col justify-between bg-[#151515] p-7 md:p-10 lg:p-12">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                                        {activeExperience.time}
                                    </p>

                                    <h3 className="mt-8 text-[clamp(2.75rem,5vw,5rem)] font-medium leading-none tracking-[-0.05em]">
                                        {activeExperience.title}
                                    </h3>

                                    <p className="mt-6 max-w-sm text-lg leading-8 text-white/60">
                                        {activeExperience.description}
                                    </p>
                                </div>

                                <a
                                    href="#destination"
                                    className="mt-12 inline-flex w-fit items-center gap-2 border-b border-white/30 pb-2 text-sm font-medium !text-white transition-colors duration-300 hover:border-white"
                                >
                                    Explore Dominion
                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Closing statement */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-16 max-w-3xl text-[clamp(1.75rem,3vw,3rem)] font-normal leading-[1.05] tracking-[-0.035em] text-white/55 md:mt-24"
                >
                    At Dominion, there is always another reason to{" "}
                    <span className="text-white">stay a little longer.</span>
                </motion.p>
            </Container>
        </section>
    );
}
