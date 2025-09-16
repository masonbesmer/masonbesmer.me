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
    }, 1000); // Reset to 1 second for normal operation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#0a0a0f', color: '#f0f0f5', minHeight: '100vh', fontFamily: 'monospace' }}>
      <LoadingScreen isLoading={isLoading} />
      
      <main style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        backgroundColor: '#0a0a0f', 
        overflow: 'hidden',
        color: '#f0f0f5'
      }}>
        {/* Background Grid */}
        <div style={{
          position: 'fixed',
          inset: '0',
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: '0.1',
          pointerEvents: 'none'
        }}></div>
        
        {/* Scanning Line */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
          animation: 'scanLine 3s linear infinite',
          zIndex: 1,
          opacity: '0.3'
        }}></div>

        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: 40,
          backgroundColor: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #404050'
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{
                fontSize: '20px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: '#00ffff',
                filter: 'drop-shadow(0 0 10px #00ffff)'
              }}>
                MASON.EXE
              </div>
              <div style={{ display: 'flex', gap: '32px' }}>
                {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item.toLowerCase())}
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '14px',
                      background: 'none',
                      border: 'none',
                      color: activeSection === item.toLowerCase() ? '#00ffff' : '#c0c0d0',
                      cursor: 'pointer',
                      transition: 'color 0.3s',
                      filter: activeSection === item.toLowerCase() ? 'drop-shadow(0 0 10px #00ffff)' : 'none'
                    }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#00ffff'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = activeSection === item.toLowerCase() ? '#00ffff' : '#c0c0d0'}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px'
        }}>
          <div style={{ maxWidth: '1024px', textAlign: 'center' }}>
            {/* Glitch Effect Background Text */}
            <div style={{
              position: 'absolute',
              inset: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: '0.2'
            }}>
              <h1 style={{
                fontSize: '128px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: '#ff007f',
                margin: '0'
              }}>
                MASON
              </h1>
            </div>
            
            {/* Main Content */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{
                fontSize: '14px',
                fontFamily: 'monospace',
                color: '#808090',
                marginBottom: '16px'
              }}>
                &gt; WELCOME TO NIGHT CITY
              </div>
              
              <h1 style={{
                fontSize: '96px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                marginBottom: '24px',
                margin: '0 0 24px 0'
              }}>
                <span style={{ color: '#f0f0f5' }}>MASON</span>
                <span style={{ color: '#00ffff', filter: 'drop-shadow(0 0 10px #00ffff)' }}>.</span>
                <span style={{ color: '#ff007f', filter: 'drop-shadow(0 0 10px #ff007f)' }}>BESMER</span>
              </h1>
              
              <div style={{
                fontSize: '32px',
                fontFamily: 'monospace',
                color: '#c0c0d0',
                marginBottom: '32px'
              }}>
                <span style={{ color: '#ffff00' }}>[</span>
                FULL STACK DEVELOPER
                <span style={{ color: '#ffff00' }}>]</span>
              </div>
              
              <p style={{
                fontSize: '18px',
                color: '#a0a0b0',
                maxWidth: '512px',
                margin: '0 auto 48px',
                lineHeight: '1.6'
              }}>
                Crafting digital experiences in the neon-lit corridors of cyberspace. 
                Specializing in modern web technologies and creating immersive user interfaces 
                that bridge the gap between human and machine.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <button 
                  onClick={() => setActiveSection('projects')}
                  style={{
                    padding: '12px 32px',
                    backgroundColor: 'transparent',
                    border: '2px solid #00ffff',
                    color: '#00ffff',
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    filter: 'drop-shadow(0 0 10px #00ffff)'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#00ffff';
                    (e.target as HTMLButtonElement).style.color = '#0a0a0f';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLButtonElement).style.color = '#00ffff';
                  }}
                >
                  VIEW PROJECTS
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  style={{
                    padding: '12px 32px',
                    backgroundColor: 'transparent',
                    border: '2px solid #ff007f',
                    color: '#ff007f',
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    filter: 'drop-shadow(0 0 10px #ff007f)'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#ff007f';
                    (e.target as HTMLButtonElement).style.color = '#0a0a0f';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLButtonElement).style.color = '#ff007f';
                  }}
                >
                  CONNECT
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '40px',
            width: '16px',
            height: '16px',
            backgroundColor: '#ffff00',
            animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            right: '40px',
            width: '8px',
            height: '8px',
            backgroundColor: '#9d00ff',
            animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            animationDelay: '1s'
          }}></div>
        </section>

        {/* About Section */}
        <section style={{ position: 'relative', padding: '80px 24px', backgroundColor: '#111118' }}>
          <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#00ffff',
              filter: 'drop-shadow(0 0 10px #00ffff)',
              marginBottom: '48px',
              textAlign: 'center'
            }}>
              &gt; NEURAL PROFILE
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#ff007f', fontFamily: 'monospace', fontSize: '14px', marginBottom: '16px' }}>
                  [BACKGROUND.exe]
                </div>
                <p style={{ color: '#c0c0d0', lineHeight: '1.6', marginBottom: '24px' }}>
                  I&apos;m a passionate full-stack developer who thrives in the digital realm. 
                  With expertise spanning modern web technologies, I create seamless experiences 
                  that feel both futuristic and intuitive.
                </p>
                <p style={{ color: '#c0c0d0', lineHeight: '1.6', marginBottom: '24px' }}>
                  My journey through the digital landscape has equipped me with the skills to 
                  navigate complex technical challenges while maintaining a focus on clean, 
                  efficient code and exceptional user experiences.
                </p>
                <div style={{ fontFamily: 'monospace', fontSize: '14px', color: '#808090' }}>
                  &gt; STATUS: <span style={{ color: '#00ffff' }}>ONLINE</span><br/>
                  &gt; LOCATION: <span style={{ color: '#ffff00' }}>NIGHT CITY</span><br/>
                  &gt; SPECIALIZATION: <span style={{ color: '#ff007f' }}>WEB DEVELOPMENT</span>
                </div>
              </div>
              
              <div style={{ position: 'relative' }}>
                <div style={{ width: '320px', height: '320px', margin: '0 auto', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    border: '1px solid #00ffff',
                    opacity: '0.5',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    inset: '16px',
                    border: '1px solid #ff007f',
                    opacity: '0.3',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    animationDelay: '1s'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ fontSize: '96px', fontFamily: 'monospace', color: '#404050' }}>&lt;/&gt;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ position: 'relative', padding: '80px 24px', backgroundColor: 'rgba(26, 26, 46, 0.5)' }}>
          <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#ff007f',
              filter: 'drop-shadow(0 0 10px #ff007f)',
              marginBottom: '48px',
              textAlign: 'center'
            }}>
              &gt; SKILL_MATRIX
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                {
                  category: 'FRONTEND',
                  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
                  color: '#00ffff'
                },
                {
                  category: 'BACKEND',
                  skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'API Design'],
                  color: '#ff007f'
                },
                {
                  category: 'TOOLS',
                  skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD'],
                  color: '#ffff00'
                }
              ].map((category) => (
                <div key={category.category} style={{
                  border: '1px solid #404050',
                  padding: '24px',
                  transition: 'border-color 0.3s'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    color: category.color,
                    marginBottom: '24px'
                  }}>
                    [{category.category}]
                  </h3>
                  <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {category.skills.map((skill) => (
                      <li key={skill} style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#c0c0d0',
                        marginBottom: '12px'
                      }}>
                        <span style={{ color: category.color, marginRight: '12px' }}>&gt;</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ position: 'relative', padding: '80px 24px', backgroundColor: 'rgba(26, 26, 46, 0.5)', textAlign: 'center' }}>
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#9d00ff',
              filter: 'drop-shadow(0 0 10px #9d00ff)',
              marginBottom: '48px'
            }}>
              &gt; ESTABLISH_CONNECTION
            </h2>
            
            <p style={{
              fontSize: '20px',
              color: '#c0c0d0',
              marginBottom: '48px'
            }}>
              Ready to jack into collaborative cyberspace? 
              Let&apos;s build something extraordinary together.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' }}>
              {[
                { label: 'EMAIL', value: 'mason@besmer.me', color: '#00ffff' },
                { label: 'GITHUB', value: '@masonbesmer', color: '#ff007f' },
                { label: 'LINKEDIN', value: '/in/masonbesmer', color: '#ffff00' }
              ].map((contact) => (
                <div key={contact.label} style={{
                  border: '1px solid #404050',
                  padding: '16px',
                  transition: 'border-color 0.3s'
                }}>
                  <div style={{
                    color: contact.color,
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    marginBottom: '8px'
                  }}>
                    [{contact.label}]
                  </div>
                  <div style={{ color: '#c0c0d0', fontFamily: 'monospace' }}>
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ fontFamily: 'monospace', fontSize: '14px', color: '#808090' }}>
              &gt; TRANSMISSION_ENDS
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ position: 'relative', padding: '32px 24px', borderTop: '1px solid #404050' }}>
          <div style={{ maxWidth: '1152px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ color: '#808090', fontFamily: 'monospace', fontSize: '14px' }}>
              © 2024 MASON.BESMER | ALL_RIGHTS_RESERVED | NIGHT_CITY_DIVISION
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
