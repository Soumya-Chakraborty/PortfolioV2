import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import { FaCloud, FaChartLine, FaRobot, FaDatabase, FaCode, FaServer } from "react-icons/fa";
import { fadeIn, staggerContainer, textVariant, zoomIn } from "../motionVariants";

const Apple = () => {
  const experienceDetails = [
    "Developed and deployed cloud-native SAAS solutions for industrial automation, serving 100+ manufacturing clients",
    "Implemented AI-powered predictive analytics platform that reduced client operational costs by 35%",
    "Created a scalable microservices architecture handling 1M+ daily API requests with 99.99% uptime",
    "Led the development of a real-time monitoring dashboard with custom data visualization components",
    "Integrated machine learning models into the SAAS platform for automated quality control and process optimization",
    "Implemented CI/CD pipelines and automated testing, reducing deployment time by 60%",
  ];

  const techStack = [
    { icon: <FaCloud />, name: "AWS/GCP", color: "#4dabf7" },
    { icon: <FaChartLine />, name: "Data Analytics", color: "#ff6b6b" },
    { icon: <FaRobot />, name: "AI/ML", color: "#64ffda" },
    { icon: <FaDatabase />, name: "Big Data", color: "#fcc419" },
    { icon: <FaCode />, name: "Microservices", color: "#845ef7" },
    { icon: <FaServer />, name: "DevOps", color: "#20c997" },
  ];

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      <motion.div 
        className="flex flex-col gap-2"
        variants={fadeIn("up", 0.2)}
      >
        <motion.h3 
          className="flex gap-1 font-medium text-xl font-titleFont"
          variants={textVariant(0.2)}
        >
          Senior Software Engineer
          <span className="text-textGreen tracking-wide">@Hi-Tech System & Services Ltd.</span>
        </motion.h3>
        <motion.p 
          className="text-sm font-medium text-textDark"
          variants={textVariant(0.3)}
        >
          Nov 2023 - Present
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-2 mt-2"
          variants={fadeIn("up", 0.4)}
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-[#112240] text-textGreen border border-textGreen/20 flex items-center gap-1"
              variants={zoomIn(0.2 + index * 0.1)}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: tech.color + "10",
                borderColor: tech.color,
                color: tech.color
              }}
              style={{ borderColor: tech.color + "40" }}
            >
              <span style={{ color: tech.color }}>{tech.icon}</span>
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.ul 
        className="mt-6 flex flex-col gap-3"
        variants={staggerContainer(0.1, 0.2)}
      >
        {experienceDetails.map((detail, index) => (
          <motion.li
            key={index}
            variants={fadeIn("left", 0.2 + index * 0.1)}
            className="text-base flex gap-2 text-textDark group"
            whileHover={{ x: 5 }}
          >
            <motion.span 
              className="text-textGreen mt-1 group-hover:translate-x-1 transition-transform duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <TiArrowForward />
            </motion.span>
            <motion.span 
              className="group-hover:text-textGreen transition-colors duration-300"
              whileHover={{ color: "#64ffda" }}
            >
              {detail}
            </motion.span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Apple;
