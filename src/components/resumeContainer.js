import React from "react";
import { Link } from "gatsby";
import { FaAt, FaLinkedin } from "react-icons/fa";

const DesktopResumeContainer = () => {
  return (
    <section className="bg-box-bg p-[5%] text-[0.8rem] text-dark-grey">
      <div className="flex items-baseline justify-between text-white">
        <h2 className="text-[2.1rem] font-semibold">Yuusuf Adebayo</h2>

        <span className="flex items-center justify-between gap-x-3 text-lg md:gap-x-4 md:text-[0.8rem]">
          <a
            href="https://www.linkedin.com/in/yuusuf-adebayo-222680229/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <FaLinkedin />
            <span className="hidden md:flex">LinkedIn</span>
          </a>
          <a
            href="mailto:adebayotoon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <FaAt />
            <span className="hidden md:flex">Email</span>
          </a>
        </span>
      </div>
      <b className="my-[6px] text-cfcfcf">Computer Science Student</b>
      <p className="mb-4 text-dark-grey md:mt-6">
        I am a dedicated Computer Science major at the University of Prince Edward Island, passionate about web development and machine learning. I focus on building scalable applications and solving real-world problems. My projects showcase my skills in various technologies and frameworks.
      </p>
      
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Education</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-white font-medium">University of Prince Edward Island</p>
      <p className="text-[0.8rem]">Bachelor of Science in Computer Science</p>
      <p className="text-[0.8rem] text-dark-grey">Current Student</p>
      
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Areas of Interest</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">Web Development, Machine Learning, AI Applications, Scalable Software Solutions</p>
      
      <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Soft Skills</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Problem Solving, Critical Thinking, Adaptability, Research, Teamwork, Communication
      </p>

      {/* ***************** WORK STARTS HERE *********** */}

      {/* <h3 className="my-4 flex items-center font-semibold text-e2e2e2">
        <p className="mr-2.5 font-[Andika] capitalize">Work Experience</p>
        <span className="h-px grow bg-[#77777859]"></span>
      </h3>
      <p className="text-base text-white">
        Caketools - <i>Frontend Engineer</i>
      </p>
      <p className="my-3 ml-[5px] text-xs">MAY 2021 - PRESENT</p>
      <p className="text-[0.8rem]">
        I’m currently building smart solutions on the decentralised web with the
        team at Caketools labs
      </p>
      <ul className="list-box my-3 space-y-2">
        <li>
          Crafted a component library from scratch using SCSS Modules to ensure
          consistency.
        </li>
        <li>
          Used Next Js to deliver optimised, pre-rendered pages when necessary.
        </li>
        <li>Engineered state management with Redux and Hooks.</li>
        <li>
          Pulled data from the blockchain in real time to display live
          statistics and token prices.
        </li>
        <li>
          Visualized blockchain data using charting libraries and custom
          paginated tables.
        </li>
        <li>
          Maintained a well structured codebase and used Typescript to improve
          predictability.
        </li>
        <li>
          Integrated seamless blockchain wallet connection with support for
          about six different wallet providers.
        </li>
        <li>
          Implemented api request caching on the server to save resources,
          improve performance and generally reduce load on the backend.
        </li>
      </ul> */}
      <h3 className="my-4 flex items-center text-[0.8rem] font-semibold text-e2e2e2">
        <p className="mr-3 basis-1/12 font-[Andika] capitalize">Projects</p>
        <span className="h-px basis-10/12 bg-[#77777859]"></span>
      </h3>
      <p className="text-[0.8rem]">
        Links to my works can be found on{" "}
        <Link to="/work" className="text-white">
          /work
        </Link>{" "}
        and more details can be provided upon request.
      </p>
    </section>
  );
};

export default DesktopResumeContainer;
