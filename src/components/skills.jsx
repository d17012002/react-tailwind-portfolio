import React, {useEffect} from "react";
import { motion } from "framer-motion";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Skill = ({ name, x, y, desc }) => {
  return (
    <motion.div
      className="items-center justify-left rounded-md  shadow-lg text-light py-1 px-3 shadow-dark bg-gray-700 cursor-pointer absolute lg:text-light w-auto md:w-[300px]"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      viewport={{once: true}}
      transition={{ duration: 1.5 }}
    >
      
      <p className="md:font-semibold text-white">{name}</p>
      <p className="text-sm hidden md:block text-gray-300 mt-2">{desc}</p>
      
    </motion.div>
  );
};

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration:1500,
      delay: 1000
    });
  }, [])
  return (
    <>
    <section className="bg-gray-900 mt-20">
      <div className="bg-gray-900 w-full h-screen relative flex justify-center items-center rounded-full">
        <motion.div
          className="hidden items-center justify-center text-xl text-gray-200 rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer lg:flex"
          whileHover={{ scale: 1.05 }}
        >
          Technical Skills
        </motion.div>
        {/* <Skill name="C++" x="0" y="-7vw" 
            desc="Some dummy random text here that should be replaced by some sensible description."
        /> */}
        {/* <Skill name="Java" x="10vw" y="4vw" 
            desc="Some dummy random text here that should be replaced by some sensible description."
        /> */}
        <Skill name="ReactJS" x="-15vw" y="6vw" 
            desc="A JavaScript library for building user interfaces, focusing on a declarative and component-based approach."
        />
        <Skill name="TailwindCSS" x="-22vw" y="-7vw" 
            desc="A utility-first CSS framework that enables rapid and flexible styling of web interfaces."
        />
        <Skill name="NodeJS" x="0vw" y="15vw" 
            desc="A server-side JavaScript runtime for executing JavaScript code outside a web browser."
        />
        <Skill name="ExpressJS" x="-8vw" y="-18vw" 
            desc="A minimalist web application framework for Node.js."
        />
        <Skill name="MongoDB" x="26vw" y="0" 
            desc="A NoSQL database that stores data in flexible, JSON-like documents."
        />
        <Skill name="FireBase" x="25vw" y="-17vw" 
            desc="A comprehensive mobile and web application development platform, offering various cloud services."
        />
        <Skill name="AWS" x="-28vw" y="15vw" 
            desc="A cloud computing platform that provides a wide range of services for computing, storage, machine learning, and more."
        />
      </div>
      </section>
    </>
  );
};

export default Skills;
