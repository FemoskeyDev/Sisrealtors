import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "./Container";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Mall", href: "#mall" },
  { label: "Hotel", href: "#hotel" },
  { label: "Amusement Park", href: "#entertainment" },
  { label: "Brands", href: "#brands" },
  { label: "Location", href: "#location" },
  { label: "About", href: "#about" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const isContactPage = window.location.pathname.replace(/\/+$/, "") === "/contact";
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-black/10 bg-white/90 backdrop-blur-xl"
            : "bg-white",
        ].join(" ")}
      >
        <Container>
          <div className="flex h-20 items-center justify-between lg:h-24">
            {/* Logo */}
            <a
              href={isContactPage ? "/" : "#"}
              onClick={closeMobileMenu}
              aria-label="SIS Realtors Limited"
              className="relative z-50 flex shrink-0 items-center"
            >
              <img
                src={logo}
                alt="SIS Realtors Limited"
                className="block h-auto w-[120px] object-contain md:w-[140px]"
              />
            </a>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-5 lg:flex"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={
                    isContactPage && item.href.startsWith("#")
                      ? `/${item.href}`
                      : item.href
                  }
                  className="whitespace-nowrap text-sm font-normal !text-black/60 transition-colors duration-300 hover:!text-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="/contact"
              className="hidden shrink-0 items-center gap-2 !bg-[#051B41] px-5 py-3 text-sm font-medium !text-white transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#092653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark lg:inline-flex"
            >
              Partner With Us
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                mobileOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="relative z-50 flex h-11 w-11 items-center justify-center border border-black/10 !text-black lg:hidden"
            >
              {mobileOpen ? (
                <X size={20} strokeWidth={1.8} />
              ) : (
                <Menu size={20} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation */}
      <div
        className={[
          "fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden",
          mobileOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col pt-20">
          <Container className="flex h-full flex-col">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col pt-6"
            >
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={
                    isContactPage && item.href.startsWith("#")
                      ? `/${item.href}`
                      : item.href
                  }
                  onClick={closeMobileMenu}
                  className={[
                    "border-b border-black/10 py-5 text-[clamp(2rem,7vw,3.5rem)] font-medium leading-none tracking-[-0.04em] !text-black",
                    index === 0 ? "border-t" : "",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}
            </nav>


          </Container>
        </div>
      </div>
    </>
  );
}
