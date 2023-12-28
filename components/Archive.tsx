import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="GST Calculator"
          des=" Calculates the GST in more details and GUI is used for the same purpose."
          listItem={["Python", "Thinkter", "Pandas", "SQL Lite"]}
          link="https://github.com/Soumya-Chakraborty/GST_Calculator/"
        />

        <ArchiveCard
          title="Dataframe using C"
          des=" Uses C language for dataframe creation and GUI is used to make the dataframe more interactive."
          listItem={["C language"]}
          link="https://github.com/Soumya-Chakraborty/Dataframes"
        />

        <ArchiveCard
          title="Suduku Solver"
          des=" Solves sudoku in Python and GUI is used to make the sudokumore optimized."
          listItem={["Python", "Thinkter"]}
          link="https://github.com/Soumya-Chakraborty/Sudoku"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Recursive-function"
                des=" Given an unsorted array, A, of integers and an integer k, 
                write recursive program using C language for rearranging the 
                elements in A so that all elements less than or equal to k come 
                before any elements larger than k."
                listItem={["C language"]}
                link="https://github.com/Soumya-Chakraborty/Recursive-function"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Greatest common divisor"
                des=" This is made using C language for finding the greatest 
                common divisor of two numbers and understanding recurssion in detail."
                listItem={["C language"]}
                link="https://noorshop.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Recurssion of series"
                des=" Write a C function to evaluate the series to 'n' significant digits sin(x)=x-(x/3!)+(x+/5!)-(x/7!) +......"
                listItem={["C language"]}
                link="https://github.com/Soumya-Chakraborty/Expand-sinx-series"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
