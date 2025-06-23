import { motion } from "framer-motion";
import { FaTools, FaLaptopCode, FaChartLine, FaCogs, FaShieldAlt } from "react-icons/fa";

const Skills = () => {
  const Motion = motion;

  // Enhanced skills data with categories and icons
  const skillCategories = [
    {
      title: "CNG Operations",
      icon: <FaTools className="text-blue-500 text-2xl" />,
      skills: [
        { name: "Station Operations", level: 98 },
        { name: "Compressor Maintenance", level: 95 },
        { name: "Safety Compliance", level: 92 },
        { name: "PESO Regulations", level: 90 },
        { name: "Gas Quality Control", level: 88 }
      ]
    },
    {
      title: "SCADA & Automation",
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      skills: [
        { name: "ABB RTU Systems", level: 92 },
        { name: "Cloud Monitoring", level: 85 },
        { name: "Data Analytics", level: 80 },
        { name: "Alarm Management", level: 88 },
        { name: "Remote Diagnostics", level: 83 }
      ]
    },
    {
      title: "Technical Software",
      icon: <FaCogs className="text-blue-500 text-2xl" />,
      skills: [
        { name: "AutoCAD", level: 90 },
        { name: "CATIA", level: 82 },
        { name: "MS Excel", level: 95 },
        { name: "SCADA Software", level: 88 },
        { name: "Pressure Analysis Tools", level: 85 }
      ]
    },
    {
      title: "Project Management",
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      skills: [
        { name: "Commissioning", level: 90 },
        { name: "Preventive Maintenance", level: 92 },
        { name: "Team Leadership", level: 88 },
        { name: "Vendor Coordination", level: 85 },
        { name: "Cost Optimization", level: 87 }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        type: "spring",
        damping: 10
      }
    })
  };

  return (
    <Motion.section 
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            7+ years of hands-on experience in CNG operations and technical management
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={categoryVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <Motion.div
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={skillBarVariants}
                        className="bg-blue-600 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <Motion.div
          className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <FaShieldAlt className="text-blue-500 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Safety & Compliance Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Fire Safety Management",
              "HSE Training",
              "PESO Compliance",
              "Emergency Response",
              "Risk Assessment",
              "Equipment Certification"
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-blue-50 rounded-lg px-4 py-2"
                whileHover={{ x: 5 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            Looking for specific technical expertise not listed here?
          </p>
          <Motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Motion.button>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default Skills;