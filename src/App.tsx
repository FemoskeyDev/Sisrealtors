import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Introduction } from "./sections/Introduction";
import { Experience } from "./sections/Experience";
import { DayAtDominion } from "./sections/DayAtDominion";
import { Destination } from "./sections/Destination";
import { Mall } from "./sections/Mall";
import { BrandPartnership } from "./sections/BrandPartnership";
import { Location } from "./sections/Location";
import { Hotel } from "./sections/Hotel";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Introduction />
        <Experience />
        <DayAtDominion />
        <Destination />
        <Mall />
        <BrandPartnership />
        <Location />
        <Hotel />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;