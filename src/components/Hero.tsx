import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-sky-50 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Maneendra
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8">
            Software Developer
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specialized in building scalable applications with{' '}
            <span className="text-blue-500 font-medium">Java</span>,{' '}
            <span className="text-sky-500 font-medium">Spring Boot</span>,{' '}
            <span className="text-blue-400 font-medium">.NET</span>,{' '}
            <span className="text-sky-600 font-medium">AWS</span>,{' '}
            <span className="text-blue-500 font-medium">Angular</span>, and{' '}
            <span className="text-sky-400 font-medium">Azure</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* DOWNLOAD RESUME BUTTON */}
            <a
              href="/My-Portfolio/Maneendra-Resume.pdf"
              download="Maneendra-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </a>

            {/* VIEW PROJECTS BUTTON */}
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-white text-blue-500 rounded-full font-semibold shadow-lg hover:shadow-xl border-2 border-blue-500 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={20} className="animate-bounce" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

