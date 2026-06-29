import { assets } from '../assets/assetPaths.js';
import { scrollToId } from '../utils/scrollToId.js';

function Profile() {
  function downloadResume() {
    window.open(assets.resumePdf, '_blank');
  }

  function goToContact() {
    scrollToId('contact');
  }

  function openExternal(url) {
    if (url) window.open(url, '_blank');
  }

  return (
    <section
      id="profile"
      className="flex justify-center gap-20 pt-32 min-h-[fit-content] mx-10 lg:mx-40 max-[1200px]:mx-[5%] max-[1200px]:block"
    >
      <div className="flex h-[400px] w-[400px] m-auto max-[1200px]:w-[275px] max-[1200px]:h-[275px] max-[1200px]:mx-auto max-[1200px]:mb-8 max-[600px]:w-auto max-[600px]:h-[46vw]">
        <img src={assets.profilePic} alt="John Doe profile picture" />
      </div>
      <div className="self-center text-center">
        <p className="text-center">Hello, I'm</p>
        {/* TODO: replace with your name */}
        <h1 className="text-5xl max-[600px]:text-3xl text-center">Aashay Wase</h1>
        {/* TODO: replace with your title */}
        <p className="text-3xl max-[600px]:text-xl mb-4">Salesforce Developer</p>
        <div className="flex justify-center gap-4">
          <button
            className="font-semibold p-4 w-32 rounded-full border border-ink hover:cursor-pointer"
            onClick={downloadResume}
          >
            Download CV
          </button>
          <button
            className="font-semibold p-4 w-32 rounded-full border border-ink hover:cursor-pointer"
            onClick={goToContact}
          >
            Contact
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <img
            src={assets.linkedinIcon}
            alt="My LinkedIn profile"
            className="cursor-pointer h-8"
            onClick={() =>
              openExternal('https://www.linkedin.com/in/aashay-wase-%E2%98%81%EF%B8%8F-1647b3165/')
            }
          />
          <img
            src={assets.githubIcon}
            alt="My Github profile"
            className="cursor-pointer h-8"
            onClick={() => openExternal('https://github.com/Aashay2701')}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
