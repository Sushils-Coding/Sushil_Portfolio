import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const GoToTopButton = () => {

  return (
    <div
      className={`fixed bottom-8 right-8 z-[99] transition-opacity duration-300 pointer-events-none"}`}
    >
      <Link to="#home" smooth>
        <button
          className="bg-amber-300 text-black p-3 rounded-full shadow-lg hover:bg-amber-400 duration-300 flex items-center justify-center sm:cursor-none hover:scale-150 transition-all ease-in-out"
        >
          <FaAngleUp className="text-2xl" />
        </button>
      </Link>
    </div>
  );
};

export default GoToTopButton;
