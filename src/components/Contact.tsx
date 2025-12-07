import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
          Get In Touch
        </h2>

        {/* CONTACT INFO PANEL */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-12 text-center">
          <p className="text-gray-700 text-lg flex items-center justify-center gap-2">
            <Mail size={20} className="text-blue-500" />
            <span className="font-medium">mamathi80@students.cumberland.edu</span>
          </p>

          <p className="text-gray-700 text-lg mt-3 flex items-center justify-center gap-2">
            <Phone size={20} className="text-blue-500" />
            <span className="font-medium">+1 (945) 244-6170</span>
          </p>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors duration-300 bg-gray-50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors duration-300 bg-gray-50"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors duration-300 bg-gray-50 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-sky-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>

        {/* SOCIAL BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* EMAIL */}
          <a
            href="mailto:mamathi80@students.cumberland.edu"
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-500 group"
          >
            <Mail size={24} className="group-hover:text-blue-500 transition-colors duration-300" />
            <span className="font-medium border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">
              Email
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/maneendra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-500 group"
          >
            <Linkedin size={24} className="group-hover:text-blue-500 transition-colors duration-300" />
            <span className="font-medium border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">
              LinkedIn
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/maneendra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 hover:text-blue-500 group"
          >
            <Github size={24} className="group-hover:text-blue-500 transition-colors duration-300" />
            <span className="font-medium border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
