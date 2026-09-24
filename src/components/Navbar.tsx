import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "./Container";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Mall", href: "#mall" },
  { label: "Hotel", href: "#hotel" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Location", href: "#location" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <Container>
        <div className="flex h-20 items-center justify-between md:h-24">
          <a
            href="#"
            className="text-sm font-semibold uppercase tracking-[0.18em]"
          >
            Dominion
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#partner"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02] lg:flex"
          >
            Partner With Us
            <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#080808]/95 px-6 py-8 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-2xl font-medium"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#partner"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
            >
              Partner With Us
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}