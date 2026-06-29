import { assets } from '../assets/assetPaths.js';
import { scrollToId } from '../utils/scrollToId.js';

// TODO: replace with your own projects
const PROJECTS = [
  {
    title: 'Project One',
    image: assets.project1,
    githubUrl: 'https://github.com/Aashay2701/minimalist_portfolio',
    liveUrl: 'https://dqy00000xs9kxmab-dev-ed.develop.my.site.com/AashayWase/s/',
  },
  {
    title: 'Project Two',
    image: assets.project2,
    githubUrl: 'https://github.com/',
    liveUrl: 'https://github.com/',
  },
  {
    title: 'Project Three',
    image: assets.project3,
    githubUrl: 'https://github.com/',
    liveUrl: 'https://github.com/',
  },
];

function ProjectCard({ title, image, githubUrl, liveUrl }) {
  function openExternal(url) {
    if (url) window.open(url, '_blank');
  }

  return (
    <div className="p-6 flex-1 bg-offwhite rounded-2xl border border-line text-center pt-[15vh]">
      <div className="flex text-left flex-wrap gap-10 justify-around">
        <img src={image} alt={title} className="rounded-2xl w-[90%] h-[90%]" />
      </div>
      <h2 className="text-slate font-semibold text-3xl m-4 text-black max-[600px]:text-xl">
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
      <div className="flex justify-center items-center max-[1200px]:hidden">
        <img
          src={assets.arrowIcon}
          alt="Arrow icon"
          className="cursor-pointer h-8 max-w-full max-h-full"
          onClick={() => scrollToId('contact')}
        />
      </div>
    </section>
  );
}

export default Projects;
