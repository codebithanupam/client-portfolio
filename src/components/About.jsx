import { motion } from "framer-motion";

// Animation variants
const aboutVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const About = () => {
  const Motion = motion;

  return (
    <Motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={aboutVariants}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <Motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">About</span> Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </Motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Profile Image */}
          <Motion.div 
            variants={fadeInLeft}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300 opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl">👨‍🔧</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-80 text-white p-4 text-center">
                <h3 className="font-bold text-lg">Pankaj Singh</h3>
                <p className="text-blue-200 text-sm">CNG Operations Specialist</p>
              </div>
            </div>
          </Motion.div>

          {/* Content */}
          <div className="lg:w-2/3">
            <Motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 relative inline-block">
                <span className="relative z-10">Professional Journey</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-40 -z-0"></span>
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With <span className="font-semibold text-blue-600">7+ years</span> of hands-on experience in the Oil & Gas sector, I specialize in CNG station operations, maintenance, and SCADA system management. Currently spearheading operations at <span className="font-semibold">HPCL CGD Bareilly</span> as an Operation and Maintenance Engineer.
                </p>
                <p>
                  My expertise spans the entire lifecycle of CNG infrastructure - from commissioning new stations to optimizing existing operations while ensuring <span className="font-semibold">100% safety compliance</span> with PESO regulations.
                </p>
                <p>
                  Recognized for troubleshooting complex technical issues and implementing process improvements that have increased station uptime by <span className="font-semibold">30%</span> at previous roles with AG&P PRATHAM and IGL.
                </p>
              </div>
            </Motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Motion.div variants={itemVariants}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">✓</span>
                    Technical Expertise
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "CNG Compression Systems",
                      "SCADA Monitoring & Control",
                      "Pipeline Network Operations",
                      "Dispenser Maintenance",
                      "PESO Compliance",
                      "Emergency Response",
                      "Preventive Maintenance",
                      "Technical Documentation"
                    ].map((item, index) => (
                      <Motion.li 
                        key={index}
                        variants={itemVariants}
                        className="flex items-start pl-2"
                        custom={index * 0.1}
                      >
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </Motion.li>
                    ))}
                  </ul>
                </div>
              </Motion.div>

              <Motion.div variants={itemVariants}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">✓</span>
                    Professional Highlights
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Managed operations for 15+ CNG stations",
                      "Reduced maintenance costs by 25% through process optimization",
                      "Trained 50+ technicians in safety protocols",
                      "Implemented SCADA upgrades improving monitoring efficiency",
                      "Led commissioning of 8 new daughter booster stations",
                      "Maintained 99.8% equipment uptime for 3 consecutive years"
                    ].map((item, index) => (
                      <Motion.li 
                        key={index}
                        variants={itemVariants}
                        className="flex items-start"
                        custom={index * 0.1}
                      >
                        <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </Motion.li>
                    ))}
                  </ul>
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default About;