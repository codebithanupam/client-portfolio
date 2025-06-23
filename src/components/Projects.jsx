import { motion } from 'framer-motion';
import { FaIndustry, FaTools, FaChartLine, FaShieldAlt, FaCogs } from 'react-icons/fa';

const Projects = () => {
  const Motion = motion;

  // Enhanced project data with more details
  const projects = [
    {
      title: "CNG Station Automation System",
      description: "Designed and implemented a comprehensive SCADA-based automation system for 15+ CNG stations, enabling real-time monitoring and remote control of critical parameters.",
      technologies: ["SCADA Systems", "ABB RTU Panels", "Cloud Monitoring", "Data Analytics"],
      duration: "Nov 2022 - Present",
      impact: "• Reduced manual errors by 40%\n• Improved station uptime to 99.8%\n• Enabled predictive maintenance",
      icon: <FaIndustry className="text-blue-500 text-2xl" />
    },
    {
      title: "Gas Pipeline Network Optimization",
      description: "Led a cross-functional team to optimize the natural gas distribution network across 5 districts, implementing advanced pressure monitoring systems.",
      technologies: ["AutoCAD", "Hydraulic Modeling", "CATIA", "Leak Detection"],
      duration: "Mar 2021 - Oct 2022",
      impact: "• Reduced gas leakage by 23%\n• Improved supply efficiency by 18%\n• Saved ₹4.2M annually",
      icon: <FaChartLine className="text-blue-500 text-2xl" />
    },
    {
      title: "Safety Compliance Program",
      description: "Developed and implemented a comprehensive safety training program for field technicians across multiple CNG stations, ensuring full PESO compliance.",
      technologies: ["HSE Training", "Fire Safety", "Emergency Protocols", "Risk Assessment"],
      duration: "Aug 2020 - Feb 2021",
      impact: "• Zero safety incidents in 18 months\n• 100% compliance audit score\n• Trained 200+ technicians",
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />
    },
    {
      title: "CNG Compressor Maintenance",
      description: "Established preventive maintenance protocols for Delta 600/1200/2400 SCMH compressors across multiple stations, significantly reducing downtime.",
      technologies: ["Predictive Maintenance", "Vibration Analysis", "Performance Testing"],
      duration: "Jun 2019 - Jul 2020",
      impact: "• Reduced downtime by 35%\n• Extended equipment life by 3 years\n• Saved ₹2.8M in repairs",
      icon: <FaTools className="text-blue-500 text-2xl" />
    },
    {
      title: "Daughter Booster Stations",
      description: "Spearheaded the commissioning of 8 daughter booster stations, optimizing gas distribution to remote areas while maintaining pressure standards.",
      technologies: ["Pressure Regulation", "Flow Control", "SS Tubing", "Commissioning"],
      duration: "Jan 2018 - May 2019",
      impact: "• Expanded coverage by 30km radius\n• Maintained 98% pressure consistency\n• Reduced transportation costs",
      icon: <FaCogs className="text-blue-500 text-2xl" />
    },
    {
      title: "Mobile Cascade Operations",
      description: "Developed optimized routing and scheduling system for mobile cascade vehicles serving multiple CNG stations, improving fill rate efficiency.",
      technologies: ["Route Optimization", "Vehicle Tracking", "Scheduling Algorithm"],
      duration: "Sep 2017 - Dec 2017",
      impact: "• Improved fill rate by 28%\n• Reduced fuel costs by 15%\n• Enhanced driver safety",
      icon: <FaIndustry className="text-blue-500 text-2xl" />
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Motion.section 
      id="projects"
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
            My Professional Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key initiatives I've led in the oil & gas sector, delivering measurable results through technical expertise
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              className="group"
              variants={cardVariants}
              whileHover="hover"
            >
              <Motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-200 hover:border-blue-300 transition-all duration-300"
                variants={hoverVariants}
              >
                <div className="p-2 bg-blue-50 flex justify-center">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {project.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Motion.span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </Motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Impact:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {project.impact.split('\n').map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            Interested in more details about my projects?
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

export default Projects;