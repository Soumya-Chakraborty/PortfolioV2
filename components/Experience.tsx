import { useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import Apple from "./works/Apple";
import Google from "./works/ISI_Inturn";
import RCCIIT from "./works/RCCIIT";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackgroundCanvas from "./BackgroundCanvas";
import { scrapeCompanyLogo } from "../utils/imageScraper";
import { 
  FadeIn, 
  ScaleIn, 
  StaggerContainer, 
  StaggerItem, 
  useParallax
} from "./animationUtils";

// Define work experience types
type WorkExperience = {
  id: string;
  company: string;
  component: React.ComponentType;
  color?: string;
};

const workExperiences: WorkExperience[] = [
  {
    id: "hitech",
    company: "Hi-Tech System & Services Ltd.",
    component: Apple,
    color: "#64ffda",
  },
  {
    id: "rccit",
    company: "RCC IIT Art and Cultural Club",
    component: RCCIIT,
    color: "#ff6b6b",
  },
  {
    id: "google",
    company: "ISI Inturn",
    component: Google,
    color: "#4dabf7",
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<string>("hitech");
  const [companyLogos, setCompanyLogos] = useState<Record<string, string>>({});
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxY = useParallax(30);

  useEffect(() => {
    const fetchLogos = async () => {
      const logos: Record<string, string> = {};
      for (const exp of workExperiences) {
        const scrapedImage = await scrapeCompanyLogo(exp.company);
        if (scrapedImage?.url) {
          logos[exp.id] = scrapedImage.url;
        }
      }
      setCompanyLogos(logos);
    };

    fetchLogos();
  }, []);

  const handleExperienceClick = (id: string) => {
    setActiveExperience(id);
  };

  const ActiveComponent = workExperiences.find(
    (exp) => exp.id === activeExperience
  )?.component;

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="relative max-w-containerxs mx-auto py-10 lgl:py-24 px-4 overflow-hidden"
      style={{ y: parallaxY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundCanvas />
      
      <motion.div 
        ref={containerRef} 
        className="relative z-10"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <SectionTitle title="Where I have Worked" titleNo="02" />
      </motion.div>
      
      <StaggerContainer>
        <motion.div 
          className="relative z-10 w-full mt-10 flex flex-col md:flex-row gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul 
            className="md:w-40 flex flex-col"
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1 }
            }}
          >
            {workExperiences.map((exp, index) => (
              <StaggerItem key={exp.id}>
                <motion.li
                  onClick={() => handleExperienceClick(exp.id)}
                  className={`${
                    activeExperience === exp.id
                      ? "border-l-textGreen text-textGreen bg-[#112240]/80 backdrop-blur-sm"
                      : "border-l-hoverColor text-textDark hover:bg-[#112240]/80 backdrop-blur-sm"
                  } border-l-2 bg-transparent py-3 text-sm cursor-pointer duration-300 px-8 font-medium relative group overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2">
                    {companyLogos[exp.id] && (
                      <ScaleIn delay={index * 0.2}>
                        <motion.img
                          src={companyLogos[exp.id]}
                          alt={`${exp.company} logo`}
                          className="w-5 h-5 object-contain"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        />
                      </ScaleIn>
                    )}
                    <span>{exp.company}</span>
                  </div>
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full"
                    style={{ backgroundColor: exp.color }}
                    initial={{ scaleY: 0 }}
                    animate={activeExperience === exp.id ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full opacity-20"
                    style={{ backgroundColor: exp.color }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              </StaggerItem>
            ))}
          </motion.ul>

          <AnimatePresence mode="wait">
            <FadeIn>
              <motion.div 
                key={activeExperience}
                className="relative z-10 w-full bg-[#112240]/80 backdrop-blur-sm rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {ActiveComponent && <ActiveComponent />}
              </motion.div>
            </FadeIn>
          </AnimatePresence>
        </motion.div>
      </StaggerContainer>
    </motion.section>
  );
};

export default Experience;
