import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 h-32 text-textLight">
      <a href="mailto:soumyachakraborty198181@gmail.com">
        <p className="text-sm rotate-90 w-20 tracking-wider hover:text-textGreen hover:-translate-y-2 transition-all duration-300" style={{ marginBottom: "15rem" }}>
          Soumyachakraborty198181@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;