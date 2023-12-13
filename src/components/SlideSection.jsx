import React from "react";
import { motion } from "framer-motion";
function SlideSection() {
  return (
    <div
      className="bg-cover flex flex-col justify-between"
      style={{
        backgroundImage: `url(/slider.gif)`,
        height: 580,
        width: "100%"
      }}
    >
      <div className="flex flex-row justify-evenly items-center">
      </div>
    </div>
  );
}

export default SlideSection;
