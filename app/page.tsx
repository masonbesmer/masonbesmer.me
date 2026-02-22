"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

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

      <main className="bg-night relative min-h-screen overflow-hidden">
        {/* Background Grid */}
        <div className="grid-bg pointer-events-none fixed inset-0 opacity-10"></div>

        {/* Scanlines texture overlay */}
        <div className="scanlines fixed inset-0 opacity-40 z-0"></div>

        {/* Scanning Line */}
        <div className="via-cyan scan-line absolute top-0 left-0 z-10 h-0.5 w-full bg-gradient-to-r from-transparent to-transparent opacity-30"></div>

        {/* Navigation */}
        <nav className="bg-night/80 nav-bottom-glow fixed top-0 right-0 left-0 z-40 border-b border-cyan backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-cyan neon-flicker font-mono text-xl font-bold tracking-widest">
                MASON.EXE
              </div>
              <div className="hidden space-x-8 md:flex">
                {["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setActiveSection(item.toLowerCase())}
                      className={`font-mono text-sm tracking-widest transition-all duration-200 ${
                        activeSection === item.toLowerCase()
                          ? "text-pink text-shadow-glow border-b border-pink"
                          : "text-gray-300 hover:text-cyan hover:text-shadow-glow"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Glitch Effect Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <h1 className="text-pink font-display text-8xl font-bold">
                MASON
              </h1>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              <div className="mb-4 font-mono text-sm text-gray-500 tracking-widest">
                &gt; WELCOME TO NIGHT CITY
              </div>

              <h1
                data-text="MASON.BESMER"
                className="glitch mb-6 font-display text-6xl font-bold tracking-widest md:text-8xl"
              >
                <span className="text-gray-100">MASON</span>
                <span className="text-cyan text-shadow-glow">.</span>
                <span className="text-pink text-shadow-glow">BESMER</span>
              </h1>

              <div className="mb-8 font-mono text-xl text-gray-300 md:text-2xl">
                <span className="text-yellow">[</span>
                FULL STACK DEVELOPER
                <span className="text-yellow">]</span>
              </div>

              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400">
                Crafting digital experiences in the neon-lit corridors of
                cyberspace. Specializing in modern web technologies and creating
                immersive user interfaces that bridge the gap between human and
                machine.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => setActiveSection("projects")}
                  className="clip-btn border-cyan text-cyan hover:bg-cyan hover:text-night neon-glow border-2 bg-transparent px-8 py-3 font-mono tracking-widest transition-all duration-300"
                >
                  VIEW PROJECTS
                </button>
                <button
                  onClick={() => setActiveSection("contact")}
                  className="clip-btn border-pink text-pink hover:bg-pink hover:text-night neon-glow border-2 bg-transparent px-8 py-3 font-mono tracking-widest transition-all duration-300"
                >
                  CONNECT
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="bg-yellow absolute top-20 left-10 h-4 w-4 animate-ping"></div>
          <div
            className="bg-purple absolute right-10 bottom-20 h-2 w-2 animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="bg-cyan absolute top-1/2 right-20 h-1 w-1 animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
        </section>

        <hr className="neon-hr" />

        {/* About Section */}
        <section className="bg-dark relative px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-cyan text-shadow-glow mb-12 text-center font-display text-4xl font-bold tracking-widest">
              &gt; NEURAL PROFILE
            </h2>

            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <div className="text-pink mb-4 font-mono text-sm">
                  [BACKGROUND.exe]
                </div>
                <p className="mb-6 leading-relaxed text-gray-300">
                  I&apos;m a passionate full-stack developer who thrives in the
                  digital realm. With expertise spanning modern web
                  technologies, I create seamless experiences that feel both
                  futuristic and intuitive.
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">
                  My journey through the digital landscape has equipped me with
                  the skills to navigate complex technical challenges while
                  maintaining a focus on clean, efficient code and exceptional
                  user experiences.
                </p>
                <div className="font-mono text-sm text-gray-500">
                  &gt; STATUS: <span className="text-cyan">ONLINE</span>
                  <br />
                  &gt; LOCATION: <span className="text-yellow">NIGHT CITY</span>
                  <br />
                  &gt; SPECIALIZATION:{" "}
                  <span className="text-pink">WEB DEVELOPMENT</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative mx-auto h-80 w-80">
                  <div className="border-cyan absolute inset-0 animate-pulse border opacity-50"></div>
                  <div
                    className="border-pink absolute inset-4 animate-pulse border opacity-30"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="border-yellow absolute inset-8 animate-pulse border opacity-20"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-6xl text-gray-700">
                      &lt;/&gt;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="neon-hr" />

        {/* Skills Section */}
        <section className="bg-darker/50 relative px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-pink text-shadow-glow mb-12 text-center font-display text-4xl font-bold tracking-widest">
              &gt; SKILL_MATRIX
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  category: "FRONTEND",
                  skills: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "JavaScript",
                  ],
                  color: "cyan",
                },
                {
                  category: "BACKEND",
                  skills: [
                    "Node.js",
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "API Design",
                  ],
                  color: "pink",
                },
                {
                  category: "TOOLS",
                  skills: ["Git", "Docker", "AWS", "Linux", "CI/CD"],
                  color: "yellow",
                },
              ].map((category) => (
                <div
                  key={category.category}
                  className="card-hover-glow border border-gray-700 p-6 transition-all duration-300"
                >
                  <h3
                    className={`font-mono text-xl font-bold text-${category.color} mb-6`}
                  >
                    [{category.category}]
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center text-gray-300"
                      >
                        <span className={`text-${category.color} mr-3`}>
                          &gt;
                        </span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="neon-hr" />

        {/* Projects Section */}
        <section className="relative px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-yellow text-shadow-glow mb-12 text-center font-display text-4xl font-bold tracking-widest">
              &gt; PROJECT_FILES
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "NEURAL_NETWORK_DASHBOARD",
                  description:
                    "Real-time data visualization platform with cyberpunk aesthetics",
                  tech: ["React", "D3.js", "WebSocket"],
                  status: "DEPLOYED",
                },
                {
                  name: "CRYPTO_WALLET_INTERFACE",
                  description: "Secure cryptocurrency management system",
                  tech: ["Next.js", "Web3", "TypeScript"],
                  status: "IN_PROGRESS",
                },
                {
                  name: "AI_CHATBOT_CLIENT",
                  description:
                    "Conversational AI interface with natural language processing",
                  tech: ["Python", "FastAPI", "OpenAI"],
                  status: "DEPLOYED",
                },
              ].map((project) => (
                <div
                  key={project.name}
                  className="card-hover-glow group border border-gray-700 p-6 transition-all duration-300"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="group-hover:text-cyan font-mono text-lg font-bold text-gray-100 transition-colors">
                      {project.name}
                    </h3>
                    <span
                      className={`px-2 py-1 font-mono text-xs ${
                        project.status === "DEPLOYED"
                          ? "text-cyan bg-cyan/20"
                          : "text-yellow bg-yellow/20"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-pink bg-pink/20 px-2 py-1 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="neon-hr" />

        {/* Contact Section */}
        <section className="bg-darker/50 relative px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-purple text-shadow-glow mb-12 font-display text-4xl font-bold tracking-widest">
              &gt; ESTABLISH_CONNECTION
            </h2>

            <p className="mb-12 text-xl text-gray-300">
              Ready to jack into collaborative cyberspace? Let&apos;s build
              something extraordinary together.
            </p>

            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {[
                { label: "EMAIL", value: "mason@besmer.me", color: "cyan" },
                { label: "GITHUB", value: "@masonbesmer", color: "pink" },
                {
                  label: "LINKEDIN",
                  value: "/in/masonbesmer",
                  color: "yellow",
                },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="card-hover-glow border border-gray-700 p-4 transition-all duration-300"
                >
                  <div
                    className={`text-${contact.color} mb-2 font-mono text-sm`}
                  >
                    [{contact.label}]
                  </div>
                  <div className="font-mono text-gray-300">{contact.value}</div>
                </div>
              ))}
            </div>

            <div className="font-mono text-sm text-gray-500">
              &gt; TRANSMISSION_ENDS
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-gray-700 px-6 py-8">
          <div className="mx-auto max-w-6xl text-center">
            <div className="font-mono text-sm text-gray-500">
              © 2024 MASON.BESMER | ALL_RIGHTS_RESERVED | NIGHT_CITY_DIVISION
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
