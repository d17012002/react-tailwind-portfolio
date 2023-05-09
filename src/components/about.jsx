import React from "react";

const About = () => {
 
  return (
    <section className="bg-gray-900 px-5 sm:px-20 text-start">
      <div className=" bg-gray-900">
        <h2 className="text-3xl ml-[0rem] sm:ml-[6rem] md:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <div className=" flex flex-wrap mt-0 sm:mt-20">
          <div className=" flex-auto w-32 sm:w-0">
          <img
              src="https://cdn.dribbble.com/users/4908/screenshots/2760742/launching-rocket-dribbble.gif"
              alt="Portfolio About Image"
              className="w-[14rem] mb-10 sm:mb-5 sm:w-[20rem] mt-[3rem] sm:mt-[0rem] mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className=" flex-auto w-60">
            <p className="text-lg md:text-xl text-gray-400 mb-6 w-[98%] sm:w-[40rem]">
              Hi, my name is John Doe and I am a full-stack web developer with 5
              years of experience. I have worked on various projects ranging
              from e-commerce websites to social networking applications. I am
              passionate about building elegant and functional web applications
              that provide great user experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-6 w-[98%] sm:w-[40rem]">
              I am proficient in React.js, Node.js, and MongoDB, and have
              experience working with other technologies such as Redux, Express,
              and PostgreSQL. In my free time, I enjoy contributing to
              open-source projects and learning
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
