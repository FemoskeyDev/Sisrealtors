import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "../components/Container";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Temporary visual layer.
          Replace this with the approved Dominion architectural image/video. */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(190,160,110,0.22),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(60,80,70,0.2),transparent_35%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black" />

        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <Container className="relative z-10 flex min-h-screen items-end pb-12 pt-32 md:pb-16 lg:pb-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-white/55">
              Lekki–Epe Expressway · Lagos, Nigeria
            </p>

            <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-white">
              Lagos is about to have a new destination.
            </h1>

            <div className="mt-8 max-w-xl">
              <p className="text-base leading-7 text-white/65 md:text-lg">
                A new destination for shopping, dining, entertainment,
                hospitality and lifestyle — rising along the Lekki–Epe
                corridor.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Discover Dominion
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#partner"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Partner With Us
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/45 lg:flex"
          >
            <ArrowDown size={15} />
            Scroll to explore
          </motion.div>
        </div>
      </Container>
    </section>
  );
}