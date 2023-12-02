import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Hero() {

  useEffect(() => {
    Aos.init({
      duration:1500
    });
  }, [])

  return (
    <section
      className="bg-gray-900 p-5 sm:p-20 "
    >
      <div className="container max-w-6xl mx-auto px-4 mt-15 mb-15 sm:mb-20 ">
        <div className="md:flex md:items-center">
          <div data-aos="fade-right" className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-md md:text-lg text-gray-400 mb-6">
            A showcase of my skills, experience, and creative endeavors. Within these digital pages, you will find a collection of my work, highlighting my skills and dedication to various fields.
            </p>
            <a href="https://drive.google.com/file/d/1n1TYC59tUykIbkfBoPA4cfS0hHqTdTQO/view?usp=drive_link" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold text-sm md:text-base">
              Get Resume
            </a>
          </div>
          <div data-aos="fade-left" className='md:ml-32'>

            <img
              src="https://i.ibb.co/vD2ZwDD/profile.jpg"
              alt="Portfolio Hero Image"
              className="w-[14rem] sm:w-[20rem] mt-[3rem] sm:mt-[0rem] mx-auto rounded-lg shadow-lg"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
