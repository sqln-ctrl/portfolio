import { assets } from '../assets/assetPaths.js';
import { scrollToId } from '../utils/scrollToId.js';

// TODO: update these lists with your own skills/tools
const SALESFORCE_SKILLS = [
  { name: 'APEX', level: 'Experienced' },
  { name: 'LWC', level: 'Experienced' },
  { name: 'FLOWS', level: 'Experienced' },
  { name: 'Integration', level: 'Experienced' },
  { name: 'Experience Cloud', level: 'Intermediate' },
  { name: 'Sales & Service Cloud', level: 'Basic' },
];

const TOOLS = [
  { name: 'Github Actions', level: 'Intermediate' },
  { name: 'Conga Composer', level: 'Intermediate' },
  { name: 'Copado', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' },
];

function SkillArticle({ name, level }) {
  return (
    <article className="flex w-40 gap-2 text-left">
      <img src={assets.checkIcon} alt="Experience icon" className="h-8" />
      <div>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="pt-[15vh] mt-8 mx-10 lg:mx-40 max-[1200px]:mx-[5%] min-h-[fit-content]"
    >
      <p className="text-center">Explore My</p>
      <h1 className="text-5xl text-center">Experience</h1>
      <div className="flex justify-center flex-col">
        <div className="flex gap-8 mb-8 mt-8 flex-wrap">
          <div className="p-6 flex-1 bg-white rounded-2xl border border-line text-center">
            <h2 className="text-slate font-semibold text-3xl mb-8 max-[600px]:text-xl">
              Salesforce Development
            </h2>
            <div className="flex flex-wrap gap-10 justify-around">
              {SALESFORCE_SKILLS.map((skill) => (
                <SkillArticle key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="p-6 flex-1 bg-white rounded-2xl border border-line text-center">
            <h2 className="text-slate font-semibold text-3xl mb-8 max-[600px]:text-xl">Tools</h2>
            <div className="flex flex-wrap gap-10 justify-around">
              {TOOLS.map((tool) => (
                <SkillArticle key={tool.name} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-[1200px]:hidden">
        <img
          src={assets.arrowIcon}
          alt="Arrow icon"
          className="cursor-pointer h-8 max-w-full max-h-full"
          onClick={() => scrollToId('projects')}
        />
      </div>
    </section>
  );
}

export default Experience;
