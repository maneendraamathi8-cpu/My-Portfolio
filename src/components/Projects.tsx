import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Online Grocery Store',
      description:
        'A Python Flask-based multi-user e-commerce platform with product catalogs, shopping cart, order management, and authentication. Designed as part of my Masters program.',
      tech: ['Python', 'Flask', 'HTML/CSS', 'SQLite'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'IoT Smart Garbage System',
      description:
        'An IoT-based waste management solution using ultrasonic sensors and GSM/GPS modules to monitor bin levels and send real-time alerts to the central system.',
      tech: ['IoT', 'Arduino', 'Sensors', 'GSM/GPS'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Agri Info Services',
      description:
        'A web app built during my internship to help farmers access crop prices, vendor details, and government schemes using a clean, accessible interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-blue-600 rounded-full text-xs font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
              
                <a
                  href={project.codeLink}
                  className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium transition-colors duration-200"
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

