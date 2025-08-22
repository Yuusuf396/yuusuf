import React from "react";
import { Link } from "gatsby";
import { FaGithub, FaAt, FaLinkedin } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const routes = [
  {
    to: "",
    text: "work",
  },
  // {
  //   to: "resume",
  //   text: "resume",
  // },
  // {
  //   to: "blogs",
  //   text: "articles",
  // },
];

const DesktopIntro = ({ active }) => {
  return (
    <div className="flex h-full flex-col justify-between py-[10%] pl-[8%] pr-[5%]">
      <div className="animate-fadeIn">
        <h1 className="mb-2.5 text-4xl font-bold animate-slideUp">
          Hello, I&apos;m <br />
          <span className="animate-float">Yuusuf Adebayo.</span>
        </h1>
        <p className="text-sm leading-loose text-dark-grey break-all">
          I am a{" "}
          <span className="animate-float2 text-white opacity-90 font-bold">Computer Science major</span>{" "}
          <span className="animate-float3 text-white opacity-90">at the University of Prince Edward Island</span>,{" "}
          <span className="animate-float text-white opacity-90">passionate about</span>{" "}
          <span className="animate-float2 text-white opacity-90 font-bold">web development</span>{" "}
          <span className="animate-float3 text-white opacity-90">and</span>{" "}
          <span className="animate-float text-white opacity-90 font-bold">machine learning</span>.{" "}
          <span className="animate-float2 text-white opacity-90">I focus on building</span>{" "}
          <span className="animate-float3 text-white opacity-90 font-bold">scalable applications</span>{" "}
          <span className="animate-float text-white opacity-90">and solving</span>{" "}
          <span className="animate-float2 text-white opacity-90 font-bold">real-world problems</span>.
        </p>

      </div>

      <ol className="mt-[0.9rem] inline-flex flex-col items-start gap-y-5 uppercase animate-fadeIn">
        {routes.map(({ to, text }, i) => (
          <li key={i} className="group flex items-center text-[0.7rem]">
            <span
              className={`cursor-pointer transition-all duration-300 ease-linear group-hover:text-white ${
                to === active ? "text-white" : "text-dark-grey"
              }`}
            >
              0{i}
            </span>
            <Link
              to={"/" + to}
              className={`flex items-center group-hover:text-white ${
                to === active ? "text-white" : "text-dark-grey"
              }
    `}
            >
              <span
                className={`mx-4 h-px transition-all duration-300 ease-linear group-hover:w-16 group-hover:bg-white ${
                  to === active ? "w-16 bg-white" : "w-10 bg-dark-grey "
                }`}
              ></span>
              <span className="tracking-widest">{text}</span>
            </Link>
          </li>
        ))}
      </ol>

      <footer className="animate-fadeIn">
        <div className="flex items-center">
          <div className="mr-6 h-12 w-12 rounded-full bg-black"></div>
          <div className="flex items-center gap-x-4 text-xs">
            <a
              href="https://github.com/Yuusuf396"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 hover:text-white transition-colors duration-300 group"
            >
              <FaGithub className="group-hover:scale-110 transition-transform duration-300" color="grey" />
              <span>Github</span>
              <BsArrowUpRight className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/yuusuf-adebayo-222680229/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 hover:text-white transition-colors duration-300 group"
            >
              <FaLinkedin className="group-hover:scale-110 transition-transform duration-300" color="grey" />
              <span>LinkedIn</span>
              <BsArrowUpRight className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="mailto:adebayotoon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 hover:text-white transition-colors duration-300 group"
            >
              <FaAt className="group-hover:scale-110 transition-transform duration-300" color="grey" />
              <span>Email</span>
              <BsArrowUpRight className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
        <p className="mr-3 pt-5 text-[11px] text-dark-grey">
          Inspired by{" "}
          <a
            href="https://kadet.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#cecece]"
          >
            Collins Enebeli
          </a>
        </p>
      </footer>
    </div>
  );
};

export default DesktopIntro;
