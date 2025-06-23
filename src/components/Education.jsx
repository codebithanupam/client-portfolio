import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from "react-icons/fa";

const Education = () => {
  const Motion = motion;

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
    }
  };

  const educationData = [
    {
      degree: "Bachelor in Technology",
      institution: "Madhu Vachaspati Institute of Technology",
      university: "Dr. A P J Abdul Kalam Technical University, Lucknow",
      year: "2013 - 2017",
      marks: "70% (Division I)",
      description: "Specialized in Mechanical Engineering with coursework in CAD, thermodynamics, and material science."
    },
    {
      degree: "Higher Secondary School",
      institution: "R.D. Memorial Abu Bakarpur",
      university: "UP Board",
      year: "2011 - 2012",
      marks: "72% (Division I)",
      description: "Science stream with focus on Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Senior Secondary School",
      institution: "Riyaz Intermediate College Ukhaiya",
      university: "UP Board",
      year: "2009",
      marks: "72.5% (Division I)",
      description: "Completed with distinction in Science and Mathematics."
    }
  ];

  return (
    <Motion.section 
      id="education"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Educational Journey
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            My academic background that shaped my technical expertise
          </Motion.p>
          <Motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6 }}
            className="w-24 h-1 bg-blue-600 mx-auto mt-6"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <Motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaGraduationCap className="text-blue-600 text-xl"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                  </div>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-blue-200 ml-9">
                  <div className="flex items-center">
                    <FaUniversity className="text-gray-400 mr-3"/>
                    <p className="text-gray-600">{edu.university}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-gray-400 mr-3"/>
                    <p className="text-gray-600">{edu.year}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <FaAward className="text-gray-400 mr-3"/>
                    <p className="font-medium text-gray-700">{edu.marks}</p>
                  </div>
                </div>

                <Motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-gray-600"
                >
                  {edu.description}
                </Motion.p>
              </div>
              
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Completed</span>
                  <Motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                  >
                    Verified
                  </Motion.span>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Additional Certifications
          </h3>
          <p className="text-gray-600">
            Fire and Safety Training from Delhi Institute of Fire Engineering
          </p>
          <p className="text-gray-600">
            Vocational Training from BPCL and NCR
          </p>
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default Education;