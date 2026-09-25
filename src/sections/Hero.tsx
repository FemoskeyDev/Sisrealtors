import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "../components/Container";

export function Hero() {
  return (
    <section className="bg-white text-black">
      <Container className="pt-32 md:pt-40 lg:pt-44">
        {/* Editorial introduction */}
        <div className="grid gap-10 pb-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.7fr)] lg:items-end lg:gap-20">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-black/45">
              Dominion Leisure City
            </p>

            <h1 className="max-w-4xl text-[clamp(3.25rem,5.5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.055em]">
              Lagos is about to have{" "}
              <span className="font-serif font-normal italic">
                a new destination.
              </span>
            </h1>
          </motion.div>

          {/* Supporting content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md lg:pb-2"
          >
            <p className="text-base leading-7 text-black/60 md:text-lg">
              A new destination for shopping, dining, the amusement park,
              hospitality and lifestyle rising along the Lekki–Epe corridor.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-black px-6 py-3.5 text-sm font-medium !text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Discover Dominion
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-black/15 bg-white px-6 py-3.5 text-sm font-medium !text-black transition-colors duration-300 hover:bg-black hover:!text-white"
              >
                Partner With Us
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Cinematic video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden"
        >
          <div className="relative aspect-[16/9] w-full bg-neutral-900 md:min-h-[560px] lg:min-h-[680px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/dominion-hero-alt.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="/videos/dominion-hero.mp4"
                type="video/mp4"
              />
            </video>

            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Video metadata */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Lekki–Epe Expressway · Lagos, Nigeria
              </p>

              <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
                <ArrowDown size={14} />
                Explore
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting category line */}
        <div className="flex justify-between border-b border-black/10 py-5 text-xs uppercase tracking-[0.18em] text-black/45">
          <span>Retail · Lifestyle · Hospitality · Amusement Park</span>

          <span className="hidden md:block">
            Lagos, Nigeria
          </span>
        </div>
      </Container>
    </section>
  );
}
