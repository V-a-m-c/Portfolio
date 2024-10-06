import React from "react";
import Pic from "./Me.jpg";
import "./About.css";
import about from "./about.png";
const About = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
        <img src={about} alt="me" style={{ height: "50px", width: "50px", margin: "0 auto 16px auto" }} />
    About <b className="text-yellow-300">Me</b>
        </h2>

        <div className="bg-black rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Section with Fancy Hover Effect */}
            <div className="flex justify-center">
              <div className="relative group">
                {/* Adjusted inset for better alignment */}
                <div className="absolute inset-20 top-0 left-0 right-0 bottom-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img
                  src={Pic}
                  alt="Profile"
                  className="relative z-10 rounded-full object-cover shadow-md transition-all duration-300 ease-in-out group-hover:shadow-xl animate-tilt"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>

            {/* Text Section */}
            <div>
              <p className="text-lg text-white mb-4">
                Hello! I’m <span className="highlight">Korla Vamsi</span>, a{" "}
                <span className="highlight">Full-Stack Developer </span>
                pursuing a Bachelor’s in Technology at VIT-AP University. I
                specialize in web development, focusing on building responsive
                and user-friendly applications using{" "}
                <span className="highlight">React</span>,{" "}
                <span className="highlight">Tailwind CSS</span>, and{" "}
                <span className="highlight">Firebase</span>.
              </p>
              <p className="text-lg text-white mb-4">
                I recently completed an internship at{" "}
                <span className="highlight">Symbiosys Technologies</span>, where
                I gained experience in computer networks and information
                security with tools like Cisco Packet Tracer. As an{" "}
                <span className="highlight">
                  AWS Certified Cloud Practitioner
                </span>
                , I understand cloud technologies and their applications in
                enhancing performance and reliability.
              </p>
              <p className="text-lg text-white mb-4">
                I’m committed to continuous learning and enjoy collaborating on
                innovative projects. Outside of work, I have a passion for
                electronic projects and playing cricket. I look forward to
                connecting with professionals who share my enthusiasm for
                technology.
              </p>
              <a
                href="https://drive.google.com/file/d/1dqi6v1HtVODUQdSxnnE34dRWdU0rs3LC/view?usp=sharing"
                target="blank"
              >
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                   Resume
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
