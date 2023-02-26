import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#03fa6e]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Mayank Joshi, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              With a passion for programming and a strong foundation in the MERN
              stack, I am dedicated to creating meaningful and engaging user
              experiences. I look forward to taking on new challenges to further
              develop my skills as a web developer and stay up-to-date with the
              latest technologies and trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
