import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Assign motion to variable to prevent unused warning
const MotionDiv = motion.div;

const App = () => {
  return (
    <MotionDiv 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      
      <main className="overflow-hidden">
        <Hero/>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </MotionDiv>
  );
};

export default App;