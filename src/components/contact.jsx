import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  

const Contact = () => {
  return (
    <section className="bg-gray-900 py-20 justify-center w-[100%] px-5 sm:px-20 ">
        <center>
      <div className="container mt-7">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <h2 className="text-base mt-5 text-red-500 font-semibold tracking-wide uppercase">
            You can reach out to me by following ways
          </h2>
        <br />
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className=' w-[95%] sm:w-[60%] shadow-xl'
          >
        
          <div className=" text-white bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center">
            <FaEnvelope className="text-3xl mb-2" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href="mailto:youremail@example.com" className="text-white-500 hover:text-blue-500 transition duration-300">
              2002anuragksingh@gmail.com
            </a>
          </div>
          <div className="text-white bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center">
            <FaPhoneAlt className="text-3xl mb-2" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-white-500 hover:text-blue-500 transition duration-300">
              +91 8839298745
            </a>
          </div>
          <div className="text-white bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center">
            <div className="flex items-center mb-8">
              <FaLinkedin className="text-3xl mr-2" />
              <a href="https://www.linkedin.com/in/anuragkumar17/" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:text-blue-500 transition duration-300">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaGithub className="text-3xl mr-2" />
              <a href="https://github.com/d17012002" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:text-blue-500 transition duration-300">
                GitHub
              </a>
            </div>
          </div>
        </Carousel>
      </div>
      </center>
    </section>
  );
};

export default Contact;
