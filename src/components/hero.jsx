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
      className="bg-gray-900 p-20"
      onMouseMove={handleMouse}
    >
      <div className="container mx-auto px-4 mt-15 mb-15 sm:mb-20 ">
        <div className="md:flex md:items-center  ">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold text-sm md:text-base">
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
              src="../src/assets/profile.jpg"
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
