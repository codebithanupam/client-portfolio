import { motion } from "framer-motion";

// Enhanced animations
const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

const textVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      stiffness: 100,
      damping: 10
    },
  },
};

const experiences = [
  {
    title: "Engineer of Operation and Maintenance",
    company: "HPCL CGD Bareilly (Phistream Consulting Pvt. Ltd)",
    duration: "Nov 2024 - Present",
    points: [
      "Managed operations of 5+ CNG stations with 100% uptime through preventive maintenance",
      "Implemented new safety protocols that reduced incidents by 40%",
      "Led a team of 8 technicians for daily operations and emergency response",
      "Developed automated reporting system that saved 10+ hours/week",
      "Conducted monthly training sessions on HSE standards for staff"
    ],
    technologies: ["SCADA Systems", "CNG Dispensers", "Safety Compliance", "Team Leadership"],
    achievements: [
      "Employee of the Month (March 2025)",
      "Best Safety Initiative Award (2024)"
    ]
  },
  {
    title: "SCADA Control Room Engineer",
    company: "AG&P PRATHAM CGD India Pvt. Ltd. (Rhino Services)",
    duration: "March 2023 – November 2024",
    points: [
      "Monitored and controlled 12+ CNG stations through SCADA systems",
      "Reduced response time to critical alerts by 35% through process optimization",
      "Implemented remote diagnostics saving ₹5L/year in service costs",
      "Trained 15+ operators on SCADA monitoring best practices",
      "Developed predictive maintenance schedules increasing equipment lifespan"
    ],
    technologies: ["ABB RTU Panels", "Cloud Monitoring", "Data Analysis", "Remote Diagnostics"],
    achievements: [
      "Innovation Excellence Award (2023)",
      "Perfect Attendance Record (2023-2024)"
    ]
  },
  {
    title: "Operation & Maintenance Engineer",
    company: "S R Technocrats Services Pvt. Ltd (IGL)",
    duration: "September 2017 - August 2019",
    points: [
      "Maintained Delta 600/1200/2400 SCMH compressors with 98% efficiency",
      "Reduced energy consumption by 15% through optimized operations",
      "Coordinated with vendors for AMC of critical equipment",
      "Prepared technical feasibility reports for station upgrades",
      "Implemented 5S methodology in maintenance operations"
    ],
    technologies: ["CNG Compressors", "Energy Optimization", "Vendor Management", "5S Methodology"],
    achievements: [
      "Rookie of the Year (2017)",
      "Cost Saving Champion (2018)"
    ]
  }
];

const ExperienceCard = ({ experience, index }) => {
  const Motion = motion;
  
  return (
    <Motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.8)}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-lg mb-8 relative overflow-hidden group border-l-4 border-blue-600"
    >
      <div className="absolute -left-4 top-0 h-full w-1 bg-blue-600 group-hover:w-2 transition-all duration-300"></div>
      
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="md:w-3/4">
          <h3 className="text-2xl font-bold text-gray-800">{experience.title}</h3>
          <p className="text-blue-600 font-medium text-lg">{experience.company}</p>
          <p className="text-gray-500 text-sm mb-4">{experience.duration}</p>
          
          <ul className="list-disc pl-5 space-y-2 mb-6">
            {experience.points.map((point, i) => (
              <Motion.li 
                key={i} 
                className="text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                viewport={{ once: true }}
              >
                {point}
              </Motion.li>
            ))}
          </ul>
        </div>
        
        <div className="md:w-1/4 md:pl-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <Motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </Motion.span>
              ))}
            </div>
          </div>
          
          {experience.achievements && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Achievements</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <Motion.li 
                    key={i}
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-yellow-500 mr-2">★</span>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </Motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Motion.div>
  );
};

const Experience = () => {
  const Motion = motion;
  
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <Motion.div 
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 7 years of hands-on experience in CNG operations and maintenance
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </Motion.div>
        
        <div className="max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
          
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-8"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Additional Experience</h3>
            <p className="text-gray-700 mb-4">
              Prior to my professional roles, I completed vocational training at BPCL and NCR Prayagraj, 
              where I gained foundational knowledge in gas operations and safety protocols.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Vocational Training at BPCL (4 weeks, 2016)</li>
              <li>Summer Training at NCR Prayagraj (4 weeks, 2016)</li>
              <li>Fire and Safety Certification from Delhi Institute of Fire Engineering</li>
            </ul>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;