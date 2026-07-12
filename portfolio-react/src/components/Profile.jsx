import { assets } from "../assets/assetPaths.js";
import { scrollToId } from "../utils/scrollToId.js";

import { Mail } from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";


function Profile() {

  function downloadResume() {
    window.open(assets.resumePdf, "_blank");
  }


  function goToContact() {
    scrollToId("contact");
  }


  function openExternal(url) {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }


  return (
    <section
      id="profile"
      className="flex justify-center gap-20 pt-32 min-h-[fit-content] mx-8 lg:mx-40 max-[1200px]:mx-[5%] max-[1200px]:block"
    >

      {/* Profile Image */}
      <div
        className="flex h-[350px] w-[290px] mt-4 rounded-full overflow-hidden 
        max-[1200px]:w-[275px] max-[1200px]:h-[275px] 
        max-[1200px]:mx-auto max-[1200px]:mb-8"
      >
        <img
          src={assets.profilePic}
          alt="Saqlain Shah"
          className="w-full h-full object-cover"
        />
      </div>



      {/* Content */}
      <div
        className="self-center text-center mt-10 flex flex-col items-center gap-3"
      >

        <p>Hello, I'm</p>


        <h1 className="text-6xl max-[600px]:text-3xl">
          Saqlain Shah
        </h1>


        <p className="text-2xl max-[600px]:text-xl">
          Full Stack Developer
        </p>



        {/* Buttons */}
        <div className="flex gap-4 mt-5">

          <button
            onClick={downloadResume}
            className="px-5 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-all"
          >
            Resume
          </button>


          <button
            onClick={goToContact}
            className="px-5 py-2 rounded-full bg-black text-white hover:scale-105 transition-all"
          >
            Contact Me
          </button>

        </div>



        {/* Social Icons */}

        <div className="flex justify-center items-center gap-4 mt-6 flex-wrap">


          {/* LinkedIn */}
          <div
            className="h-12 w-12 rounded-full bg-[#1f1f1f] 
            flex items-center justify-center cursor-pointer
            hover:scale-110 transition-all duration-300"
            onClick={() =>
              openExternal(
                "https://www.linkedin.com/in/saqlain-shah-9a200126a/"
              )
            }
          >
            <FaLinkedin
              size={22}
              className="text-gray-300 hover:text-white"
            />
          </div>



          {/* Github */}
          <div
            className="h-12 w-12 rounded-full bg-[#1f1f1f]
            flex items-center justify-center cursor-pointer
            hover:scale-110 transition-all duration-300"
            onClick={() =>
              openExternal(
                "https://github.com/sqln-ctrl"
              )
            }
          >

            <FaGithub
              size={22}
              className="text-gray-300 hover:text-white"
            />

          </div>



          {/* Instagram */}
          <div
            className="h-12 w-12 rounded-full bg-[#1f1f1f]
            flex items-center justify-center cursor-pointer
            hover:scale-110 transition-all duration-300"
            onClick={() =>
              openExternal(
                "https://www.instagram.com/your-handle"
              )
            }
          >

            <FaInstagram
              size={22}
              className="text-gray-300 hover:text-pink-500"
            />

          </div>




          {/* Gmail */}
          <div
            className="h-12 w-12 rounded-full bg-[#1f1f1f]
            flex items-center justify-center cursor-pointer
            hover:scale-110 transition-all duration-300"
            onClick={() =>
              window.open(
                "mailto:codewithsqln@gmail.com",
                "_blank"
              )
            }
          >

            <div
              className="h-10 w-10 rounded-full flex items-center justify-center"
            >
              <Mail
                size={22}
                className="text-gray-300 hover:text-red-500"
              />
            </div>


            


          </div>


        </div>

      </div>

    </section>
  );
}


export default Profile;