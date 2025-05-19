import { useRef, useState } from "react";

export const ProjectCard = ({ title, description, techs, link }) => {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative p-6 rounded-xl border border-white/10 bg-black hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(251,191,36,0.2)] transition-transform duration-300"
    >
      {/* Mouse-following glow */}
      <div
        className="pointer-events-none absolute w-40 h-40 bg-amber-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          left: pos.x - 80,
          top: pos.y - 80,
        }}
      ></div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(251,191,36,0.15)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <a
          href={link}
          className="text-amber-400 hover:text-amber-300 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};
