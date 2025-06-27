import React from "react";

const ButtonOutline = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-[#31C4F3] text-[#31C4F3] bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#31C4F3] hover:text-white-500 transition-all hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
