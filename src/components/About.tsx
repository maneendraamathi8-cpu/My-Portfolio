const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 sm:p-12 shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm a passionate Full-Stack Developer with over{' '}
            <span className="font-semibold text-blue-500">5+ years of experience</span>{' '}
            building robust, scalable applications. My expertise lies in designing and
            implementing{' '}
            <span className="font-semibold text-sky-500">microservices architectures</span> and{' '}
            <span className="font-semibold text-blue-500">cloud-native applications</span> that
            drive business success.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I specialize in backend development using{' '}
            <span className="font-semibold text-blue-500">Java</span> and{' '}
            <span className="font-semibold text-sky-500">.NET</span> frameworks, with extensive
            experience deploying and managing applications on{' '}
            <span className="font-semibold text-blue-400">AWS</span> and{' '}
            <span className="font-semibold text-sky-400">Azure</span> cloud platforms.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            On the frontend, I create intuitive, responsive user interfaces using modern
            technologies like <span className="font-semibold text-blue-500">Angular</span>,{' '}
            <span className="font-semibold text-sky-500">TypeScript</span>, and contemporary
            design patterns. I'm committed to writing clean, maintainable code and staying
            current with industry best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
