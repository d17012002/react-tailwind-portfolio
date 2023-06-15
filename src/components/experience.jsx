import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="bg-gray-900 px-5 sm:px-20">
      <div className="max-w-6xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left mt-9">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience{" "}
            <FaBriefcase className="inline-block text-4xl text-red-500 dark:text-red-500 mb-2 ml-2" />
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg h-auto">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                AngryBaaz
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Sep 2022 - Nov 2022
              </p>
            </div>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Role: Backend Developer <br />
              <br />
              Designed complete database schema for the project using SQL and No SQL as per the requirements. Worked on few micro services where built an API for user auth via OTP using AWS services like Dynamo and SNS. Also, wrote business logics for the project.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg h-auto shadow-ml">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Bit By Bit
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Aug 2021 - Sep 2022
              </p>
            </div>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Role: Technical Team Lead <br />
              <br />I led a team of six members in building a complete club
              website. We successfully developed a fully functional platform
              that managed online event registrations and maintained a
              leaderboard. During my tenure, I consucted various hackathons and
              coding contests.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg h-auto shadow-ml">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Mozilla Club
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Dec 2022 - Jan 2023
              </p>
            </div>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Role: Full Stack Developer <br /> <br />
              I was responsible for creating engaging web pages for upcoming events. I successfully developed interactive web pages that brought events to life. I managed the implementation of a robust auth system and streamlined user registration processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
