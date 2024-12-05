// Banner.tsx
import { motion } from "framer-motion";
import { bannerVariants } from "./motionVariants";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={bannerVariants}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.8 }}
        variants={bannerVariants}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col cursor-pointer transition-all duration-300 hover:text-textGreen hover:-translate-x-2"
      >
        Soumya Chakraborty.
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the Artificial Intelligence.
        </span>
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.8 }}
        variants={bannerVariants}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a Artificial Intelligent developer with 2+ years of experience  
        in Python and R. I have a strong foundation in Pytorch & TensorFlow and am skilled in
        creating AI for human betterment and research works.{" "}
        <a href="https://github.com/Soumya-Chakraborty" target="_blank">
          {" "}
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/Soumya-Chakraborty" target="_blank">
        <motion.button
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.9 }}
          variants={bannerVariants}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
