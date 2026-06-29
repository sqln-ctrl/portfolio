import { assets } from '../assets/assetPaths.js';
import { scrollToId } from '../utils/scrollToId.js';

function About() {
  return (
    <section
      id="about"
      className="relative pt-[15vh] mx-10 lg:mx-40 max-[1200px]:mx-[5%] min-h-[fit-content]"
    >
      <p className="text-center">Get To Know More</p>
      <h1 className="text-5xl text-center">About Me</h1>
      <div className="flex gap-16 h-[80%] max-[1200px]:block">
        <div className="flex m-auto max-w-[300px] max-h-[440px] w-auto h-auto">
          <img src={assets.aboutPic} alt="Profile picture" className="rounded-2xl" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex gap-8 mb-8 mt-8 flex-wrap">
            <div className="p-6 flex-1 bg-white rounded-2xl border border-line text-center">
              <img src={assets.experienceIcon} alt="Experience icon" className="h-8 mx-auto" />
              <h3>Experience</h3>
              {/* TODO: update with your own experience */}
              <p>
                5+ years <br />
                Salesforce Development
              </p>
            </div>
            <div className="p-6 flex-1 bg-white rounded-2xl border border-line text-center">
              <img src={assets.educationIcon} alt="Education icon" className="h-8 mx-auto" />
              <h3>Education</h3>
              {/* TODO: update with your own education */}
              <p>
                B.E. Electronics
                <br />
                MBA Marketing
              </p>
            </div>
          </div>
          <div className="max-[600px]:text-justify">
            {/* TODO: replace with your own bio */}
            <p>
              Experienced Salesforce Developer with 5+ years delivering robust solutions across
              Sales, Service, and Experience Clouds. Expert in Apex, LWC, Flows, and Integration,
              with a proven track record of automating processes and optimizing performance.
              Skilled in CI/CD (Copado/Git), Adaptive Card UI, and Conga Composer automation.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-[1200px]:hidden">
        <img
          src={assets.arrowIcon}
          alt="Arrow icon"
          className="cursor-pointer h-8 max-w-full max-h-full"
          onClick={() => scrollToId('experience')}
        />
      </div>
    </section>
  );
}

export default About;
