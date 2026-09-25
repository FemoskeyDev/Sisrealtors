import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Introduction } from "./sections/Introduction";
import { Experience } from "./sections/Experience";
import { DayAtDominion } from "./sections/DayAtDominion";
import { Destination } from "./sections/Destination";
import { Mall } from "./sections/Mall";
import { AmusementPark } from "./sections/AmusementPark";
import { BrandPartnership } from "./sections/BrandPartnership";
import { Location } from "./sections/Location";
import { Hotel } from "./sections/Hotel";
import { About } from "./sections/About";
import { ContactPage } from "./pages/Contact";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  const isContactPage = window.location.pathname.replace(/\/+$/, "") === "/contact";

  useEffect(() => {
    document.title = isContactPage
      ? "Contact Us | Dominion Leisure City"
      : "Dominion Leisure City | S.I.S. Realtors Limited";
  }, [isContactPage]);

  return (
    <>
      <Navbar />

      {isContactPage ? (
        <ContactPage />
      ) : (
        <main>
          <Hero />
          <Introduction />
          <Experience />
          <DayAtDominion />
          <Destination />
          <Mall />
          <Hotel />
          <AmusementPark />
          <BrandPartnership />
          <Location />
          <About />
          <Contact />
        </main>
      )}

      <Footer />
    </>
  );
}

export default App;
