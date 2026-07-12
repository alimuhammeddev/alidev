import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}
