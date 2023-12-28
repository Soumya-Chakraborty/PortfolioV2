import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        C language optimization
        <span className="text-textGreen tracking-wide">@ISI Inturn</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented a C language optimization for managing Databases like
          Pandas in Python.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implement DataFrame operations in C language, demonstrating basic
          operations on a DataFrame, including creation, addition of rows,
          printing, summary statistics, and aggregation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Storing and manipulating data in C language.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
