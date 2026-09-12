import {
  FaGithub,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const SKILLS = [
  { name: "React JS", Icon: FaReact, color: "text-sky-500" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-black" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
  { name: "Python", Icon: FaPython, color: "text-blue-500" },
  { name: "Django", Icon: SiDjango, color: "text-green-700" },
  { name: "FastAPI", Icon: SiFastapi, color: "text-emerald-500" },
  { name: "Express.js", Icon: SiExpress, color: "text-gray-800" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-700" },
  { name: "GitHub", Icon: FaGithub, color: "text-black" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative pt-[15vh] mx-10 lg:mx-40 max-[1200px]:mx-[5%]"
    >
      <p className="text-center text-gray-600">Tools I Work With</p>

      <h1 className="text-5xl font-bold text-center mt-2 mb-12">
        My Expertise
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {SKILLS.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Icon className={`text-5xl ${color} mb-3`} />
            <p className="font-medium">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
