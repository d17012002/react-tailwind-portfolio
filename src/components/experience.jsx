import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="bg-gray-900 ">
      <div className="max-w-6xl  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left mt-9">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience  <FaBriefcase className="inline-block text-4xl text-red-500 dark:text-red-500 mb-2 ml-2" />
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                AngryBaaz 
              </h3>
              <p className="text-gray-500 dark:text-gray-400">May 2019 - Present</p>
            </div>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis hendrerit quam, eu aliquet augue. Donec in leo ut odio euismod molestie sit amet quis quam.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Bit By Bit
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Jun 2017 - Apr 2019</p>
            </div>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis hendrerit quam, eu aliquet augue. Donec in leo ut odio euismod molestie sit amet quis quam.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Mozilla Club
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Mar 2015 - May 2017</p>
            </div>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis hendrerit quam, eu aliquet augue. Donec in leo ut odio euismod molestie sit amet quis quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
