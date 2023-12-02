import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({
      duration:1500,
      delay: 1000
    });
  }, [])
  return (
    <section data-aos="zoom-in" className="bg-gray-900 text-start  about-section">
        <center>
      <div className="max-w-7xl bg-gray-900 ">
          <h2 className="text-3xl ml-[0rem] sm:ml-[6rem] md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
        <div className="text-left flex flex-wrap mt-0 sm:mt-10">
          <div className=" flex-auto sm:w-0">
            <img
              src="https://cdn.dribbble.com/users/4908/screenshots/2760742/launching-rocket-dribbble.gif"
              alt="Portfolio About Image"
              className="w-[14rem] mb-10 sm:mb-5 sm:w-[20rem] mt-[3rem] sm:mt-[0rem] mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="px-5 sm:px-20">
            <p className="text-md md:text-lg text-gray-400 mb-6 w-[98%] sm:w-[40rem]">
              Hi, my name is Anurag Kumar and I am a full-stack web developer. I have worked on various projects ranging
              from e-commerce websites to social networking applications. I am
              passionate about building elegant and functional web applications
              that provide great user experiences.
            </p>
            <p className="text-md md:text-lg text-gray-400 mb-6 w-[98%] sm:w-[40rem]">
              I am proficient in React.js, Node.js, and MongoDB, and have
              experience working with other technologies such as Express, PostgreSQL and AWS. In my free time, I enjoy contributing to
              open-source projects, playing games and listening to music.
            </p>
          </div>
        </div>
      </div>
        </center>
    </section>
  );
};

export default About;
