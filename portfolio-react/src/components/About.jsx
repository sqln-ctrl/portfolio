import { GraduationCap, BriefcaseBusiness } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative pt-[15vh] mx-10 lg:mx-40 max-[1200px]:mx-[5%] min-h-[fit-content]"
    >
      <p className="text-center text-gray-600">Get To Know More</p>

      <h1 className="text-5xl font-bold text-center mt-2">
        About Me
      </h1>

      <div className="flex gap-16 h-[80%] mt-12 max-[1200px]:block">
        {/* Profile Image */}
        <div className="flex m-auto max-w-[300px] max-h-[440px] w-auto h-auto">
          {/* Uncomment when you add your image */}
          {/* <img
            src={assets.aboutPic}
            alt="Profile"
            className="rounded-2xl object-cover"
          /> */}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center flex-1">
          {/* Cards */}
          <div className="flex gap-8 mb-8 flex-wrap">
            {/* Experience Card */}
            <div className="flex-1 rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <BriefcaseBusiness
                  size={34}
                  className="text-gray-800"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-xl font-semibold">
                Experience
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                <span className="font-semibold">1+ Year</span>
                <br />
                Full Stack Development
                <br />
                (Web & App)
              </p>
            </div>

            {/* Education Card */}
            <div className="flex-1 rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <GraduationCap
                  size={34}
                  className="text-gray-800"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-xl font-semibold">
                Education
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                BS Software Engineering
              </p>
            </div>
          </div>

          {/* About Text */}
          <div className="max-[600px]:text-justify">
            <p className="text-gray-600 leading-8">
              I'm a passionate Full Stack Developer dedicated to building
              modern, responsive, and scalable web and mobile applications.
              I enjoy transforming ideas into high-quality digital products
              by combining intuitive user interfaces with robust backend
              systems.

              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;