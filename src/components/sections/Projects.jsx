import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)]">
              <h3 className="text-xl font-bold mb-2">Mecazon Project</h3>
              <p className="text-gray-400 mb-4">
                Large team class project. Responsible for the UI, structuring
                components, managing state, and implementing interactive
                features to create a user-friendly application.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/ltorres1952/3pm-teamA-MECAZON-client-dev"
                  className="text-amber-400 hover:text-amber-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)]">
              <h3 className="text-xl font-bold mb-2">Task App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack task management app built with the Laravel PHP
                framework. Through the project my partner and I worked with php
                to connect a functioning MySQL database with the front end of
                the task app.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Laravel", "PHP", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/ltorres1952/laravel-task-app-l"
                  className="text-amber-400 hover:text-amber-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)]">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-amber-400 hover:text-amber-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)]">
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
              <p className="text-gray-400 mb-4">
                Scalable cloud infastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-amber-400 hover:text-amber-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
