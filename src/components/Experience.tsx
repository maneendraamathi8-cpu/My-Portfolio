import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: '.NET Integration Engineer',
      company: 'UPMC (PA)',
      period: 'Jan 2025 – Present',
      description:
        'Modernized services using Azure Functions and Service Bus. Built CI/CD pipelines and monitoring with Azure DevOps and Application Insights.',
    },
    {
      title: 'Full Stack .NET Developer',
      company: 'Loram (MN)',
      period: 'Jul 2024 – Jan 2025',
      description:
        'Integrated Autodesk Vault and IFS Cloud via REST APIs. Enhanced PL/SQL performance and automated API testing for improved reliability.',
    },
    {
      title: 'Java/AWS Developer',
      company: 'Master Minds Consulting',
      period: 'Jan 2023 – Feb 2024',
      description:
        'Deployed microservices on AWS EKS and built CI/CD pipelines. Designed serverless APIs using Lambda, API Gateway, and DynamoDB.',
    },
    {
      title: 'Java Developer',
      company: 'TCS (GE)',
      period: 'May 2020 – Dec 2021',
      description:
        'Led Sybase to PostgreSQL migration and updated application functionality to align with the new database. Built modules using Spring Boot, JPA, and implemented REST APIs with Swagger.',
    },
    {
      title: 'Java/UI Developer',
      company: 'FCA',
      period: 'Sep 2019 – Apr 2020',
      description:
        'Delivered responsive web pages using Spring Boot Microservices framework. Integrated REST controllers and JavaScript-based UI features.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
          Professional Experience
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-sky-400 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                <div className="absolute left-5 top-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-sky-400 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-sky-100 rounded-xl md:hidden">
                      <Briefcase size={24} className="text-blue-500" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-500 font-semibold">{exp.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
