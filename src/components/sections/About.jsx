import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Typescript", "TailwindCSS", "Unity"];
  const backendSkills = [
    "Javascript",
    "Java",
    "C#",
    "PHP",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Laravel",
    "Express.js",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Diligent, creative, and adaptable second year coding student who
              is a great problem solver and able to work well under pressure.
              Experienced with working in a team, and learning how to use new
              technology quickly. Seeking the position of Junior Backend
              Developer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📚 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Highschool Diploma </strong> - University High
                  (2021-2025)
                </li>
                <li>
                  Relevant Coursework: AP Computer Science Principles, AP
                  Computer Science A, AP Calculus
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                💼 Volunteer Experience{" "}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Hopebridge | Assistant (2023 - 2025)
                  </h4>
                  <p>
                    Responsibilities include: Supervising the children while the
                    Behavior Analyst conducts important tasks, assisting the
                    Behavior Analysts to gather supplies and moving the supplies
                    from room to room to improve efficiency, creating visuals
                    for the children.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Future Business Leaders of America | Treasurer
                    (2024-Present)
                  </h4>
                  <p>
                    Chosen as treasurer of the class CTSO. Participated in
                    various events such as conferences and competitions. Placed
                    in regional competition for Computer Game and Simulation
                    Programming and competed in the State competition. Improved
                    presentation and leadership skills.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Tolleson Food Bank | Food Unpacker (2024-Present)
                  </h4>
                  <p>
                    Chosen as treasurer of the class CTSO. Participated in
                    various events such as conferences and competitions. Placed
                    in regional competition for Computer Game and Simulation
                    Programming and competed in the State competition. Improved
                    presentation and leadership skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
