import React, {useEffect} from "react";
import { FaBriefcase } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {

  useEffect(() => {
    Aos.init({
      duration:1000
    });
  }, [])

  return (
    <div className="bg-gray-900 px-5 sm:px-20">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div data-aos="fade-left" className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience{" "}
            <FaBriefcase className="inline-block text-4xl text-red-500 dark:text-red-500 mb-2 ml-2" />
          </h2>
        </div>
        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Xerocodee Pvt. Ltd.
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Oct 2023 - Dec 2023
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              <span className="font-bold">Role:</span> Full Stack Developer <br />
              <br />
              Responsible for creating engaging web pages for upcoming events. Worked with foreign clients to build a backend wrapper for their smart lock. Managed the implementation of a robust auth system and streamlined user registration processes.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              AngryBaaz Services
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Sep 2022 - Nov 2022
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              <span className="font-bold">Role:</span> Backend Developer <br />
              <br />
              Designed complete database schema for the project using SQL and No SQL as per the requirements. Worked on microservices, building an API for user auth via OTP using AWS services like Dynamo and SNS. Wrote business logics for the project.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Bit By Bit
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Aug 2021 - Sep 2022
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              <span className="font-bold">Role:</span> Technical Team Lead <br />
              <br />
              Led a team of six members in building a complete club website. Developed a fully functional platform managing online event registrations and maintaining a leaderboard. Conducted various hackathons and coding contests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
