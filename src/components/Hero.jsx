import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const Motion = motion;

  return (
    <section 
      id="home"
      className="relative h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-[120px] md:pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center relative z-10">
        {/* Text content - now at the top for mobile */}
        <div className="w-full md:w-1/2 order-1 md:order-none mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Hi, I'm <span className="text-blue-600">Pankaj Singh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium">
            CNG Operations & SCADA Specialist
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            7+ years experience in Oil & Gas industry
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all">
              <FaDownload /> Download CV
            </button>
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md border border-gray-200 transition-all">
              Contact Me
            </button>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Image - now below text on mobile */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 order-0 md:order-none">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="images/pnk.jpg" 
                alt="Pankaj Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100">
              <span className="font-bold text-blue-600">7+ Years</span>
              <span className="text-gray-600 ml-1">Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg className="w-6 h-6 text-blue-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;