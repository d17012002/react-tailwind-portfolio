import { motion, useMotionValue, useTransform } from "framer-motion";

function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);

  const handleMouse = (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  return (
    <section
      className="bg-gray-900 p-5 sm:p-20"
      onMouseMove={handleMouse}
    >
      <div className="container mx-auto px-4 mt-15 mb-15 sm:mb-20 ">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6">
            A showcase of my skills, experience, and creative endeavors. Within these digital pages, you will find a collection of my work, highlighting my skills and dedication to various fields.
            </p>
            <a href="https://drive.google.com/file/d/1n1TYC59tUykIbkfBoPA4cfS0hHqTdTQO/view?usp=drive_link" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold text-sm md:text-base">
              Get Resume
            </a>
          </div>
          <motion.div
            className="md:w-1/2"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              perspective: "1000px",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://i.ibb.co/vD2ZwDD/profile.jpg"
              alt="Portfolio Hero Image"
              className="w-[14rem] sm:w-[20rem] mt-[3rem] sm:mt-[0rem] mx-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
