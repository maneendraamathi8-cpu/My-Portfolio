const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-blue-100 to-blue-200',
      textColor: 'text-blue-700',
      skills: ['Java', 'C#', 'SQL', 'TypeScript', 'JavaScript', 'Python'],
    },
    {
      title: 'Backend Frameworks',
      color: 'from-sky-100 to-sky-200',
      textColor: 'text-sky-700',
      skills: ['Spring Boot', '.NET Core', 'ASP.NET', 'Hibernate', 'Entity Framework'],
    },
    {
      title: 'Frontend',
      color: 'from-cyan-100 to-cyan-200',
      textColor: 'text-cyan-700',
      skills: ['Angular', 'React', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-blue-100 to-sky-100',
      textColor: 'text-blue-600',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Jenkins', 'CI/CD'],
    },
    {
      title: 'Databases',
      color: 'from-teal-100 to-teal-200',
      textColor: 'text-teal-700',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Redis'],
    },
    {
      title: 'Tools',
      color: 'from-indigo-100 to-blue-100',
      textColor: 'text-blue-700',
      skills: ['Git', 'Postman', 'Swagger', 'JIRA', 'VS Code', 'IntelliJ IDEA'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className={`text-xl font-semibold mb-4 ${category.textColor}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} ${category.textColor} rounded-full text-sm font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
