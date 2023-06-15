import React from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id commodo elit, sed mattis metus. Integer et est ac neque sagittis lobortis eu vel augue.",
    image: "https://i.ibb.co/S7ZXdt5/project1.jpg",
    url: "https://invite-onweb.vercel.app/",
  },
  {
    title: "Project 2",
    description:
      "Duis sed mauris ut ex sagittis dapibus. Nulla non purus ullamcorper, eleifend ipsum vel, volutpat libero. Sed luctus convallis tellus non facilisis.",
    image: "https://i.ibb.co/5YT0h3s/project2.jpg",
    url: "https://vitb-review-system.onrender.com/",
  },
  {
    title: "Project 3",
    description:
      "Maecenas consequat aliquam neque, quis vestibulum velit accumsan quis. In hac habitasse platea dictumst. Suspendisse a purus lacinia, vulputate sapien vitae, tincidunt nisi.",
    image: "https://i.ibb.co/PrjzkQY/project3.jpg",
    url: "https://github.com/d17012002/recommendation-system",
  },
  {
    title: "Project 4",
    description:
      "Maecenas consequat aliquam neque, quis vestibulum velit accumsan quis. In hac habitasse platea dictumst. Suspendisse a purus lacinia, vulputate sapien vitae, tincidunt nisi.",
    image: "https://i.ibb.co/7JJcG91/project4.png",
    url: "https://github.com/d17012002/CrowdQuest-SIH-2022",
  },
];

const Project = () => {
  return (
    <div className="py-12 bg-gray-900 px-5 sm:px-20" id="projects">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-3xl mt-20 md:text-4xl font-bold text-white mb-4">
            Projects
          </p>
          <h2 className="text-base mt-5 text-red-500 font-semibold tracking-wide uppercase">
            Checkout Some of my recent works
          </h2>
        </div>
         <center>
        <div className="mt-10 text-start">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 w-[100%] sm:w-[90%] ml-1 sm:ml-20">
            {projects.map((project) => (
              <li key={project.title} className="mt-10">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <div className="relative">
                    <img
                      className="h-64 w-full object-cover rounded-lg shadow-md"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-medium text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        </center>
      </div>
    </div>
  );
};

export default Project;
