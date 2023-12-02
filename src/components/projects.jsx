import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "InVITe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id commodo elit, sed mattis metus. Integer et est ac neque sagittis lobortis eu vel augue.",
    image: "https://i.ibb.co/S7ZXdt5/project1.jpg",
    url: "https://invite-onweb.vercel.app/",
  },
  {
    title: "Review System",
    description:
      "Duis sed mauris ut ex sagittis dapibus. Nulla non purus ullamcorper, eleifend ipsum vel, volutpat libero. Sed luctus convallis tellus non facilisis.",
    image: "https://i.ibb.co/5YT0h3s/project2.jpg",
    url: "https://vitb-review-system.onrender.com/",
  },
  {
    title: "WeFlix",
    description:
      "Maecenas consequat aliquam neque, quis vestibulum velit accumsan quis. In hac habitasse platea dictumst. Suspendisse a purus lacinia, vulputate sapien vitae, tincidunt nisi.",
    image: "https://i.ibb.co/PrjzkQY/project3.jpg",
    url: "https://github.com/d17012002/recommendation-system",
  },
  {
    title: "CrowdQuest",
    description:
      "Maecenas consequat aliquam neque, quis vestibulum velit accumsan quis. In hac habitasse platea dictumst. Suspendisse a purus lacinia, vulputate sapien vitae, tincidunt nisi.",
    image: "https://i.ibb.co/7JJcG91/project4.png",
    url: "https://github.com/d17012002/CrowdQuest-SIH-2022",
  },
];

const Project = () => {

  useEffect(() => {
    Aos.init({
      duration:1000
    });
  }, [])

  return (
    <div data-aos="fade-up" className="bg-gray-900 px-5 sm:px-20" id="projects">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-3xl mt-20 md:text-4xl font-bold text-white mb-4">
            Projects
          </p>
          <h2 className="text-base mt-5 text-red-500 font-semibold tracking-wide uppercase">
            Checkout Some of my recent works
          </h2>
        </div>
        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 w-[100%] sm:w-[90%] ml-1 sm:ml-20">
            {projects.map((project) => (
              <li key={project.title} className="mt-10 text-gray-500">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group hover:opacity-75 transition duration-300 ease-in-out"
                >
                  <div className="relative">
                    <img
                      className="h-64 w-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition duration-300 ease-in-out"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-medium text-white group-hover:text-red-500 transition duration-300 ease-in-out">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
