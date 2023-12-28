import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import Google from "./works/ISI_Inturn";
import RCCIIT from "./works/RCCIIT";
import Splash from "./works/Splash";

const Experience = () => {
  const [workRCCIIT, setWorkRCCIIT] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  //const [workApple, setWorkApple] = useState(false);
  //const [workSplash, setWorkSplash] = useState(false);
  //const [workAmazon, setWorkAmazon] = useState(false);

  const handleRCCIIT = () => {
    setWorkRCCIIT(true);
    setWorkGoogle(false);
    //setWorkApple(false);
    //setWorkSplash(false);
    //setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setWorkRCCIIT(false);
    setWorkGoogle(true);
    //setWorkApple(false);
    //setWorkSplash(false);
    //setWorkAmazon(false);
  };

  const handleApple = () => {
    setWorkRCCIIT(false);
    setWorkGoogle(false);
    //setWorkApple(true);
    //setWorkSplash(false);
    //setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkRCCIIT(false);
    setWorkGoogle(false);
    //setWorkApple(false);
    //setWorkSplash(true);
    //setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkRCCIIT(false);
    setWorkGoogle(false);
    //setWorkApple(false);
    //setWorkSplash(false);
    //setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleRCCIIT}
            className={`${
              workRCCIIT
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            RCC IIT Art and Cultural Club
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            ISI Inturn
          </li>
        </ul>
        {workRCCIIT && <RCCIIT />}
        {workGoogle && <Google />}
      </div>
    </section>
  );
};

export default Experience;
