

import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => { 
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-400 leading-right bg-clip-text text-transparent">
              Hi, I'm Luis Torres
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I'm a full-stack developer who is well versed in JavaScript. Creative, adaptable and a great problem solver who is able to work
              well under pressure. Experienced with working in a team, and
              learning how to use new technology quickly.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="flow-button bg-amber-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                <span className="relative z-20">View Projects</span>
              </a>
              <a
                href="#contact"
                className="reverse-flow-button bg-amber-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden z-10"
              >
                <span className="relative z-20">Contact Me</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}