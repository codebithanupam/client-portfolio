import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const Motion = motion;

  // Footer data - makes it easy to update
  const footerData = {
    name: "Pankaj Singh",
    title: "CNG Operations Specialist",
    contact: {
      email: "pankajsingh4200@gmail.com",
      phones: ["07398889950", "09415508306"],
      address: "Bala ji Dham colony, Bareilly - 243001"
    },
    socialLinks: [
      { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
      { icon: <FaEnvelope />, url: "mailto:pankajsingh4200@gmail.com", label: "Email" },
      { icon: <FaPhone />, url: "tel:+917398889950", label: "Phone" },
      { icon: <FaGithub />, url: "#", label: "GitHub" }
    ],
    quickLinks: [
      { name: "Home", url: "#home" },
      { name: "About", url: "#about" },
      { name: "Experience", url: "#experience" },
      { name: "Projects", url: "#projects" },
      { name: "Contact", url: "#contact" }
    ],
    copyright: `© ${new Date().getFullYear()} Pankaj Singh. All rights reserved.`
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const iconVariants = {
    hover: { 
      scale: 1.2,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  // Dynamic year update
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <Motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 text-white pt-12 pb-6"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">{footerData.name}</h3>
            <p className="text-gray-400 mb-4">{footerData.title}</p>
            <p className="text-gray-400 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              {footerData.contact.address}
            </p>
          </Motion.div>

          {/* Quick Links */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <Motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </Motion.li>
              ))}
            </ul>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-2" />
                <a 
                  href={`mailto:${footerData.contact.email}`}
                  className="text-gray-400 hover:text-white"
                >
                  {footerData.contact.email}
                </a>
              </li>
              {footerData.contact.phones.map((phone, index) => (
                <li key={index} className="flex items-center">
                  <FaPhone className="text-gray-400 mr-2" />
                  <a 
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Social Links */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {footerData.socialLinks.map((social, index) => (
                <Motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  variants={iconVariants}
                  whileHover="hover"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
                >
                  {social.icon}
                </Motion.a>
              ))}
            </div>
          </Motion.div>
        </div>

        {/* Copyright */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400"
        >
          <p>{footerData.copyright}</p>
          <p className="mt-2 text-sm">
            Designed with ❤️ by <a href="https://codebithanupam.netlify.app/" target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
           className="font-bold"
          >
            codebithanupam
            </a>
          </p>
        </Motion.div>
      </div>
    </Motion.footer>
  );
};

export default Footer;