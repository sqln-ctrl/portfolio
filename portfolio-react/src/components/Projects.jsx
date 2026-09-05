
import { assets } from "../assets/assetPaths.js";
import { ArrowDown } from "lucide-react";

const PROJECTS = [
  {
    title: "Andaaz - Online Watch Store",
    description:
      "A full-stack e-commerce watch store featuring product listings, secure checkout, order confirmation, inventory management, and a comprehensive admin dashboard. Built with customizable homepage sections, accounting tools, and an intuitive interface for seamless store management.",
    tech: ["Reactjs", "Tailwind CSS", "Nodejs","Expressjs", "PostgreSQL"],
    githubUrl: "https://github.com/sqln-ctrl/behreadab-store",
    liveUrl: "https://behreadab-store.vercel.app",
    image: assets.Project1_image,
  },
  {
    title: "LeadForge - AI Lead Generation Platform",
    description:
      "LeadForge is a lead generation platform that helps businesses find and connect with potential customers. It provides tools for lead capture, lead scoring, and lead nurturing, making it easier for businesses to convert leads into customers.",
    tech: ["Reactjs", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/sqln-ctrl/leadforge",
    liveUrl: "#",
    image: assets.Project2_image,
  },
  {
  title: "Horizon Boys Hostel - Marketing Website",

  description:
    "A modern, responsive website for Hostels. The website showcases rooms, facilities, meal plans, gallery, and hostel information, with WhatsApp integrated as the primary channel for bookings, room inquiries, meal-plan inquiries, and customer contact.",

  tech: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "React Hook Form",
  ],

  githubUrl: "https://github.com/sqln-ctrl/horizon-hostel",

  liveUrl: "https://horizon-hostel.vercel.app/",

  image: assets.Project3_image,
},
{
  title: "UniShop - University Student Marketplace",
  description:
    "UniShop is a marketplace built for university students to buy, sell, and discover items within their campus community. It allows students to create listings, upload product images, manage their products, save items to a wishlist, contact sellers, and report listings, with an admin dashboard for managing users, listings, and reports.",
  tech: ["Reactjs", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  githubUrl: "https://github.com/sqln-ctrl/unishop",
  liveUrl: "#",
  image: assets.Project4_image,
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
    if (!url || url === "#") return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div
        className="w-full overflow-hidden bg-gray-100 cursor-pointer"
        onClick={() => openExternal(liveUrl)}
      >
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.015]"
        />
      </div>

      {/* Project Content */}
      <div className="px-4 py-6">
        {/* Title */}
        <h2 className="text-slate-900 font-semibold text-lg md:text-3xl text-center mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-7 mb-6 text-center">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-2 mb-7">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 text-sm rounded-full bg-gray-100 border border-gray-300 text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            aria-label={`View ${title} source code`}
            onClick={() => openExternal(githubUrl)}
            className="w-32 rounded-full border border-black py-2.5 font-semibold transition-all duration-300 hover:bg-black hover:text-white"
          >
            GitHub
          </button>

          <button
            type="button"
            aria-label={`View ${title} live demo`}
            onClick={() => openExternal(liveUrl)}
            disabled={!liveUrl || liveUrl === "#"}
            className="w-32 rounded-full border border-black py-2.5 font-semibold transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
          >
            Live Demo
          </button>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const scrollToNext = () => {
    const section = document.getElementById("projects");
    const next = section?.nextElementSibling;

    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="w-full px-4 md:px-8 lg:px-12 py-16">
      {/* Section Subtitle */}
      <p className="text-center text-gray-500 mb-3 text-lg">
        Browse My Recent
      </p>

      {/* Section Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-14">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* Scroll Down */}
      <div className="hidden lg:flex justify-center mt-14">
        <button
          type="button"
          aria-label="Scroll to next section"
          onClick={scrollToNext}
          className="cursor-pointer"
        >
          <ArrowDown
            size={36}
            strokeWidth={2}
            className="animate-bounce text-gray-800 hover:text-black transition-colors duration-300"
          />
        </button>
      </div>
    </section>
  );
}

export default Projects;
