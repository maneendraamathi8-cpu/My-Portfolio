import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Information Technology Management',
      institution: 'Cumberland University',
      period: 'Since Sept 2025',
      gpa: null,
      color: 'from-blue-500 to-sky-400',
    },
    {
      degree: 'Master of Science in Data Science',
      institution: 'University of Alabama at Birmingham (UAB)',
      period: 'Dec 2022',
      gpa: 'GPA: 3.9/4.0',
      color: 'from-sky-500 to-cyan-400',
    },
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Lakireddy Bali Reddy College of Engineering (LBRCE), India',
      period: 'Apr 2019',
      gpa: 'GPA: 7.85/10.0',
      color: 'from-blue-400 to-sky-500',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <GraduationCap size={32} className="text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h3>
              <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
              {edu.gpa && (
                <p className="text-gray-700 text-sm font-medium mt-1">{edu.gpa}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

