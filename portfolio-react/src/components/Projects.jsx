import { assets } from "../assets/assetPaths.js";
import { ArrowDown } from "lucide-react";

const PROJECTS = [
  {
    title: "Andaaz - Online Watch Store",
    description:
      "A full-stack e-commerce watch store featuring product listings, secure checkout, order confirmation, inventory management, and a comprehensive admin dashboard. Built with customizable homepage sections, accounting tools, and an intuitive interface for seamless store management.",
    tech: ["React", "Tailwind CSS", "Nodejs","PostgreSQL"],
    githubUrl: "https://github.com/sqln-ctrl/behreadab-store",
    liveUrl: "https://behreadab-store.vercel.app",
    image: assets.Project1_image,
  },
];

function ProjectCard({
  title,
  description,
  tech,
  image,
  githubUrl,
  liveUrl,
}) {
  const openExternal = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex-1 bg-offwhite rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      <img
        src={image}
        alt={title}
        onClick={() => openExternal(liveUrl)}
        className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
      />

      <h2 className="text-slate font-semibold text-3xl mt-6 mb-3 max-[600px]:text-2xl">
        {title}
      </h2>

      <p className="text-gray-600 leading-7 mb-5">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm rounded-full bg-gray-100 border border-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          aria-label={`View ${title} source code`}
          onClick={() => openExternal(githubUrl)}
          className="w-32 rounded-full border border-black py-3 font-semibold transition-all duration-300 hover:bg-black hover:text-white"
        >
          GitHub
        </button>

        <button
          aria-label={`View ${title} live demo`}
          onClick={() => openExternal(liveUrl)}
          className="w-32 rounded-full border border-black py-3 font-semibold transition-all duration-300 hover:bg-black hover:text-white"
        >
          Live Demo
        </button>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="pt-[15vh] mt-8 mx-10 lg:mx-40 max-[1200px]:mx-[5%]"
    >
      <p className="text-center text-lg text-gray-600">
        Browse My Recent
      </p>

      <h1 className="text-5xl font-bold text-center mb-12">
        Projects
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>

      <div className="hidden lg:flex justify-center mt-14">
        <ArrowDown
          size={36}
          strokeWidth={2}
          className="cursor-pointer animate-bounce text-gray-800 hover:text-black transition-colors duration-300"
        />
      </div>
    </section>
  );
}

export default Projects;