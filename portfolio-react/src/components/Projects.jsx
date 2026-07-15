import { assets } from '../assets/assetPaths.js';
import { ArrowDown } from "lucide-react";

// TODO: replace with your own projects
const PROJECTS = [
  {
    title: 'Andaaz An Online Watch Store',
    githubUrl: 'https://github.com/sqln-ctrl/behreadab-store',
    liveUrl: 'https://dqy00000xs9kxmab-dev-ed.develop.my.site.com/AashayWase/s/',
  }
 
];

function ProjectCard({ title, image, githubUrl, liveUrl }) {
  function openExternal(url) {
    if (url) window.open(url, '_blank');
  }

  return (
    <div className="p-6 flex-1 bg-offwhite rounded-2xl border border-line text-center pt-[15vh]">
      
      <h2 className="text-slate font-semibold text-3xl m-4 max-[600px]:text-xl">
        {title}
      </h2>
      <div className="flex justify-center gap-4">
        <button
          className="font-semibold p-4 w-32 rounded-full border border-ink hover:cursor-pointer"
          onClick={() => openExternal(githubUrl)}
        >
          Github
        </button>
        <button
          className="font-semibold p-4 w-32 rounded-full border border-ink hover:cursor-pointer"
          onClick={() => openExternal(liveUrl)}
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
      className="pt-[15vh] mt-8 mx-10 lg:mx-40 max-[1200px]:mx-[5%] min-h-[fit-content]"
    >
      <p className="text-center">Browse My Recent</p>
      <h1 className="text-5xl text-center">Projects</h1>
      <div className="flex justify-center flex-col">
        <div className="flex gap-8 mb-8 mt-8 flex-wrap">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 max-[1200px]:hidden">
        <ArrowDown
          size={36}
          strokeWidth={2}
          className="cursor-pointer text-gray-800 hover:text-black transition-all duration-300 animate-bounce"  
        />
      </div>
    </section>
  );
}

export default Projects;
