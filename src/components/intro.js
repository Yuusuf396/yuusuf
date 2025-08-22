import React from "react";
import {BsFillCaretRightFill} from "react-icons/bs";
import {Link} from "gatsby";

const Intro = () => {
  return (
    <div className="flex flex-col justify-center animate-fadeIn">
      <div className="flex flex-col items-center">
      <div className="h-[8rem] w-[8rem] rounded-full bg-black animate-float"></div>
        <h1 className="px-4 pt-4 text-2xl font-semibold animate-slideUp">
          Hello, I&apos;m Yuusuf Adebayo.
        </h1>
      </div>
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


      <div className="m-1 my-5 flex items-center justify-center">
        <Link
          to="/work"
          className="flex items-center gap-x-2 bg-box-bg px-8 py-[0.6rem] text-xs text-white"
        >
          <span>Explore</span>
          <BsFillCaretRightFill />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
