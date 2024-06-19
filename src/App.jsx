// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      {/* <Service /> */}
      <Projects />
      <Hireme />
      {/* <Contact /> */}
      <footer className="p-3 text-center">
        <div className="flex items-center justify-evenly w-[50%] mx-auto">

       
        <div className="flex items-center justify-center gap-1">
        <FaLinkedin/>
        <a
          href="https://linkedin.com/in/parveen-jaiswal/"
          target="_blank"
          className="text-black">Parveen Jaiswal</a>
        </div>
        <div className="flex items-center justify-center gap-1">
        <FaInstagram/>
        <a
          href="https://www.instagram.com/parveen_jaiswal_/"
          target="_blank"
          className="text-black">parveen_jaiswal_</a>
        </div>
        <div className="flex items-center justify-center gap-1">
        <FaGithub/>
        <a
          href="https://github.com/Rockstar100?tab=repositories"
          target="_blank"
          className="text-black">My Github</a>
        </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
