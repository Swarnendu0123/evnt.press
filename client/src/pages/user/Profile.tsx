import { Github, Twitter, Linkedin, Mail, MapPin, Building2 } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="relative px-8 pb-8">
          <div className="relative -mt-16 mb-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
              <p className="text-lg text-gray-600">Senior Software Engineer</p>
            </div>

            <div className="flex items-center space-x-2 text-gray-600">
              <Building2 size={18} />
              <span>Tech Company Inc</span>
              <MapPin size={18} className="ml-4" />
              <span>San Francisco, CA</span>
            </div>

            <p className="text-gray-600 max-w-2xl">
              Passionate about building scalable web applications and solving complex problems.
              Experienced in React, TypeScript, and cloud technologies. Always eager to learn
              and share knowledge with the developer community.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:john@example.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>

            <div className="pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}