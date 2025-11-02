'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <main className="relative min-h-screen bg-night overflow-hidden">
        {/* Background Grid */}
        <div className="fixed inset-0 grid-bg opacity-10 pointer-events-none"></div>
        
        {/* Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent scan-line opacity-30 z-10"></div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-night/80 backdrop-blur-sm border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-mono font-bold text-cyan text-glow">
                MASON.EXE
              </div>
              <div className="hidden md:flex space-x-8">
                {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className={`font-mono text-sm transition-colors hover:text-cyan ${
                      activeSection === item.toLowerCase() 
                        ? 'text-cyan text-glow' 
                        : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Glitch Effect Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <h1 className="text-8xl font-mono font-bold text-pink">
                MASON
              </h1>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10">
              <div className="text-sm font-mono text-gray-500 mb-4">
                &gt; WELCOME TO NIGHT CITY
              </div>
              
              <h1 className="text-6xl md:text-8xl font-mono font-bold mb-6">
                <span className="text-gray-100">MASON</span>
                <span className="text-cyan text-glow">.</span>
                <span className="text-pink text-glow">BESMER</span>
              </h1>
              
              <div className="text-xl md:text-2xl font-mono text-gray-300 mb-8">
                <span className="text-yellow">[</span>
                FULL STACK DEVELOPER
                <span className="text-yellow">]</span>
              </div>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Crafting digital experiences in the neon-lit corridors of cyberspace. 
                Specializing in modern web technologies and creating immersive user interfaces 
                that bridge the gap between human and machine.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="px-8 py-3 bg-transparent border-2 border-cyan text-cyan font-mono hover:bg-cyan hover:text-night transition-all duration-300 neon-glow"
                >
                  VIEW PROJECTS
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-3 bg-transparent border-2 border-pink text-pink font-mono hover:bg-pink hover:text-night transition-all duration-300 neon-glow"
                >
                  CONNECT
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow animate-ping"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-cyan animate-ping" style={{ animationDelay: '2s' }}></div>
        </section>

        {/* About Section */}
        <section className="relative py-20 px-6 bg-dark">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-cyan text-glow mb-12 text-center">
              &gt; NEURAL PROFILE
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-pink font-mono text-sm mb-4">[BACKGROUND.exe]</div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I&apos;m a passionate full-stack developer who thrives in the digital realm. 
                  With expertise spanning modern web technologies, I create seamless experiences 
                  that feel both futuristic and intuitive.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey through the digital landscape has equipped me with the skills to 
                  navigate complex technical challenges while maintaining a focus on clean, 
                  efficient code and exceptional user experiences.
                </p>
                <div className="font-mono text-sm text-gray-500">
                  &gt; STATUS: <span className="text-cyan">ONLINE</span><br/>
                  &gt; LOCATION: <span className="text-yellow">NIGHT CITY</span><br/>
                  &gt; SPECIALIZATION: <span className="text-pink">WEB DEVELOPMENT</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 border border-cyan opacity-50 animate-pulse"></div>
                  <div className="absolute inset-4 border border-pink opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute inset-8 border border-yellow opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-mono text-gray-700">&lt;/&gt;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative py-20 px-6 bg-darker/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-pink text-glow mb-12 text-center">
              &gt; SKILL_MATRIX
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'FRONTEND',
                  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
                  color: 'cyan'
                },
                {
                  category: 'BACKEND',
                  skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'API Design'],
                  color: 'pink'
                },
                {
                  category: 'TOOLS',
                  skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD'],
                  color: 'yellow'
                }
              ].map((category) => (
                <div key={category.category} className="border border-gray-700 p-6 hover:border-gray-500 transition-colors">
                  <h3 className={`text-xl font-mono font-bold text-${category.color} mb-6`}>
                    [{category.category}]
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center text-gray-300">
                        <span className={`text-${category.color} mr-3`}>&gt;</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-yellow text-glow mb-12 text-center">
              &gt; PROJECT_FILES
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'NEURAL_NETWORK_DASHBOARD',
                  description: 'Real-time data visualization platform with cyberpunk aesthetics',
                  tech: ['React', 'D3.js', 'WebSocket'],
                  status: 'DEPLOYED'
                },
                {
                  name: 'CRYPTO_WALLET_INTERFACE',
                  description: 'Secure cryptocurrency management system',
                  tech: ['Next.js', 'Web3', 'TypeScript'],
                  status: 'IN_PROGRESS'
                },
                {
                  name: 'AI_CHATBOT_CLIENT',
                  description: 'Conversational AI interface with natural language processing',
                  tech: ['Python', 'FastAPI', 'OpenAI'],
                  status: 'DEPLOYED'
                }
              ].map((project) => (
                <div key={project.name} className="border border-gray-700 p-6 hover:border-cyan transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-mono font-bold text-gray-100 group-hover:text-cyan transition-colors">
                      {project.name}
                    </h3>
                    <span className={`text-xs font-mono px-2 py-1 ${
                      project.status === 'DEPLOYED' 
                        ? 'text-cyan bg-cyan/20' 
                        : 'text-yellow bg-yellow/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-pink bg-pink/20 px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20 px-6 bg-darker/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-mono font-bold text-purple text-glow mb-12">
              &gt; ESTABLISH_CONNECTION
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              Ready to jack into collaborative cyberspace? 
              Let&apos;s build something extraordinary together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { label: 'EMAIL', value: 'mason@besmer.me', color: 'cyan' },
                { label: 'GITHUB', value: '@masonbesmer', color: 'pink' },
                { label: 'LINKEDIN', value: '/in/masonbesmer', color: 'yellow' }
              ].map((contact) => (
                <div key={contact.label} className="border border-gray-700 p-4 hover:border-gray-500 transition-colors">
                  <div className={`text-${contact.color} font-mono text-sm mb-2`}>
                    [{contact.label}]
                  </div>
                  <div className="text-gray-300 font-mono">
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="font-mono text-sm text-gray-500">
              &gt; TRANSMISSION_ENDS
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-8 px-6 border-t border-gray-700">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-gray-500 font-mono text-sm">
              © 2024 MASON.BESMER | ALL_RIGHTS_RESERVED | NIGHT_CITY_DIVISION
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
