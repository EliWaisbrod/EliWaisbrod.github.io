import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero index={0} />
      <Projects index={1} />
      <Skills index={2} />
      <Experience index={3} />
      <Education index={4} />
      <Contact index={5} />
    </>
  );
}
