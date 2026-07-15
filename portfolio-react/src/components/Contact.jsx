import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  const form = useRef();
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
 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_8p5piqv",
      "template_f87bjr3",
      form.current,
      "UUI-JA-uLJHfVWEAD"
    )
    .then(() => {
      form.current.reset();

      alert("✅ Thank you! Your message has been sent successfully.");
    })
    .catch((error) => {
      console.error(error);

      alert("❌ Something went wrong. Please try again.");
    });
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
        "https://mail.google.com/mail/?view=cm&fs=1&to=codewithsqln@gmail.com&su=Portfolio Inquiry",
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
      <div className="max-w-[800px] mx-auto mt-10 my-7 p-6 bg-white rounded-2xl border border-gray-300 shadow-sm w-full">

       <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-6"
        >


          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700 text-sm">
              Full Name
            </label>

            <input
              name="from_name"
              maxLength={40}
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
              name="from_email"
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
              name="message"
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