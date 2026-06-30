import { assets } from '../assets/assetPaths.js';
import { scrollToId } from '../utils/scrollToId.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


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
      <div className="flex h-[380px] w-[300px] m-auto rounded-full overflow-hidden max-[1200px]:w-[275px] max-[1200px]:h-[275px] max-[1200px]:mx-auto max-[1200px]:mb-8 max-[600px]:w-auto max-[600px]:h-[46vw] ml-20">
        <img src={assets.profilePic} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="self-center text-center mr-20 mt-10 flex flex-col items-center gap-3">
        <p className="text-center">Hello, I'm</p>
        {/* TODO: replace with your name */}
        <h1 className="text-6xl max-[600px]:text-3xl text-center">Saqlain Shah</h1>
        {/* TODO: replace with your title */}
        <p className="text-2xl max-[600px]:text-xl">Software Developer</p>

        

        <div className="flex justify-center items-center gap-6 px-7 py-2.5 bg-[#1f1f1f] mt-4 rounded-lg w-fit shadow-lg shadow-black/20">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="cursor-pointer text-lg text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            onClick={() =>
              openExternal('https://www.linkedin.com/in/saqlain-shah-9a200126a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4UB9gIgASxik%2FHkzfywzlA%3D%3D')
            }
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="cursor-pointer text-lg text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            onClick={() => openExternal('https://github.com/sqln-ctrl')}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="cursor-pointer text-lg text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
            onClick={() => openExternal('https://www.instagram.com/your-handle')}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
