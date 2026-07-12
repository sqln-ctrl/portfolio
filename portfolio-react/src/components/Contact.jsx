import { useEffect } from "react";
import { Mail } from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const inputClasses =
  "rounded-2xl px-4 py-3 border border-gray-300 bg-white text-sm outline-none " +
  "transition-all duration-200 focus:shadow-md focus:border-gray-500";

function Contact() {
  useEffect(() => {
    if (document.querySelector('script[src*="recaptcha"]')) return;

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
  }, []);

  const openExternal = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="flex justify-center flex-col min-h-[70vh] max-[1400px]:h-fit pt-[15vh] mx-10 lg:mx-40 max-[1200px]:mx-[5%]"
    >
      <p className="text-center text-gray-600">
        Get in Touch
      </p>

      <h1 className="text-5xl text-center font-bold">
        Contact Me
      </h1>


      {/* Social Icons */}
      <div className="flex justify-center mt-8">
  <div className="flex items-center gap-5 flex-wrap justify-center">


    {/* LinkedIn */}
    <div className="flex items-center gap-3 px-3  rounded-full bg-[#1f1f1f] shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">

      <div
        className="h-12 w-12 rounded-full bg-[#1f1f1f] flex items-center justify-center"
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

      <span className="text-gray-300 text-sm font-medium">
        Saqlain Shah
      </span>

    </div>



    {/* Gmail */}
    <div
      className="flex items-center gap-3 px-3 rounded-full bg-[#1f1f1f] 
      cursor-pointer hover:scale-105 transition-all duration-300 shadow-md"
      onClick={() =>
        window.open(
          "mailto:codewithsqln@gmail.com",
          "_blank"
        )
      }
    >

      <div className="h-12 w-12 rounded-full bg-[#1f1f1f] flex items-center justify-center">

        <Mail
          size={22}
          className="text-gray-300 hover:text-red-500"
        />

      </div>


      <span className="text-gray-300 text-sm font-medium">
        codewithsqln@gmail.com
      </span>


    </div>


  </div>
</div>

      {/* Contact Form */}
      <div className="max-w-[800px] mx-auto my-7 p-6 bg-white rounded-2xl border border-gray-300 shadow-sm w-full">

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6"
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQy00000Xs9kx"
          method="POST"
        >

          <input
            type="hidden"
            name="oid"
            value="00DQy00000Xs9kx"
          />

          <input
            type="hidden"
            name="retURL"
            value="https://dqy00000xs9kxmab-dev-ed.develop.my.site.com/AashayWase/s/"
          />


          {/* First Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700 text-sm">
              First Name
            </label>

            <input
              name="first_name"
              maxLength={40}
              required
              className={inputClasses}
            />
          </div>


          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700 text-sm">
              Last Name
            </label>

            <input
              name="last_name"
              maxLength={80}
              required
              className={inputClasses}
            />
          </div>


          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700 text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              maxLength={80}
              required
              className={inputClasses}
            />
          </div>


          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700 text-sm">
              Company
            </label>

            <input
              name="company"
              maxLength={40}
              className={inputClasses}
            />
          </div>


          {/* Mobile */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700 text-sm">
              Mobile
            </label>

            <input
              type="tel"
              name="mobile"
              maxLength={40}
              className={inputClasses}
            />
          </div>


          {/* Message */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">

            <label className="font-semibold text-gray-700 text-sm">
              Message
            </label>

            <textarea
              name="description"
              maxLength={2000}
              placeholder="Tell me about your project, timeline, or how I can help."
              className={`${inputClasses} min-h-[140px] resize-y`}
            />

          </div>


         

          {/* Button */}
          <div className="col-span-1 md:col-span-2">

            <button
              type="submit"
              className="rounded-full px-8 py-3.5 font-bold bg-black text-white hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Send Message
            </button>

          </div>


        </form>

      </div>

    </section>
  );
}

export default Contact;