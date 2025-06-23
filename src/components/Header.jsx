import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sections data
  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" }
  ];

  // Toggle mobile menu - FIXED
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section - FIXED
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // First close the menu
      setMobileMenuOpen(false);
      
      // Then scroll after a small delay to allow menu to close
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth"
        });
        setActiveSection(id);
      }, 100);
    }
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Nav item variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-900 shadow-lg" : "bg-gradient-to-r from-blue-900 to-blue-700"
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            Pankaj Singh
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.li
                key={section.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "text-white"
                      : "text-blue-200 hover:text-white"
                  }`}
                >
                  {section.name}
                  {activeSection === section.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-white"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button - FIXED */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu - FIXED */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden bg-blue-800 overflow-hidden absolute left-0 right-0"
              style={{ top: "80px" }}
            >
              <motion.ul className="px-4 py-2 space-y-2">
                {sections.map((section) => (
                  <motion.li
                    key={`mobile-${section.id}`}
                    variants={navItemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-b border-blue-700 last:border-b-0"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(section.id);
                      }}
                      className={`w-full text-left px-3 py-3 rounded-md text-sm font-medium ${
                        activeSection === section.id
                          ? "bg-blue-700 text-white"
                          : "text-blue-200 hover:bg-blue-600 hover:text-white"
                      }`}
                    >
                      {section.name}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Mobile Contact Info */}
              <motion.div 
                variants={navItemVariants}
                className="px-4 py-3 border-t border-blue-700 flex justify-center space-x-6"
              >
                <a 
                  href="tel:07398889950" 
                  className="text-blue-200 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaPhone className="text-xl" />
                </a>
                <a 
                  href="mailto:pankajsingh4200@gmail.com" 
                  className="text-blue-200 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;