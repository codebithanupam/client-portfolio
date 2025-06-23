import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const Motion = motion;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardHover = {
    hover: { 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  return (
    <Motion.section
      id="contact"
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <Motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Motion.div
            variants={itemVariants}
            whileHover="hover"
            variants={cardHover}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                      Full Name
                    </label>
                    <Motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #3b82f6" }}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                      Email Address
                    </label>
                    <Motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #3b82f6" }}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
                    Subject
                  </label>
                  <Motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #3b82f6" }}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                    Your Message
                  </label>
                  <Motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #3b82f6" }}
                    id="message"
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></Motion.textarea>
                </div>

                <Motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 4px 6px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all"
                >
                  Send Message
                </Motion.button>
              </form>
            </div>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <Motion.div
              whileHover="hover"
              variants={cardHover}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 text-xl"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">07398889950</p>
                    <p className="text-gray-600">09415508306</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 text-xl"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">pankajsingh4200@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Bala ji Dham colony, Bareilly - 243001</p>
                  </div>
                </div>
              </div>
            </Motion.div>

            {/* Social Links */}
            <Motion.div
              whileHover="hover"
              variants={cardHover}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <Motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-100 hover:bg-blue-200 p-4 rounded-full transition-colors"
                >
                  <FaLinkedin className="text-blue-600 text-xl"/>
                </Motion.a>
                <Motion.a
                  href="#"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-100 hover:bg-blue-200 p-4 rounded-full transition-colors"
                >
                  <FaGithub className="text-blue-600 text-xl"/>
                </Motion.a>
              </div>
            </Motion.div>

            {/* Availability */}
            <Motion.div
              whileHover="hover"
              variants={cardHover}
              className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Availability</h3>
              <p className="mb-4">I'm currently available for:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Full-time positions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  Consulting work
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  CNG project collaborations
                </li>
              </ul>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </Motion.section>
  );
};

export default Contact;