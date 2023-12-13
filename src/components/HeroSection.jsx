import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const textVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="flex flex-col justify-center bg-cover"
      style={{
        backgroundImage: `url(/background.gif)`,
        height: 300,
      }}
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center text-center text-white text-3xl w-screen"
      >
        <motion.h1 variants={textVariants}>{t("HeroSection_h1")}</motion.h1>
        <motion.div
          variants={textVariants}
          className="text-center mt-2 text-white text-sm"
        >
          <h4> {t("HeroSection_h2")}</h4>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="relative h-9 mt-10 w-5/12 flex items-center text-gray-400"
        >
          <FaMapMarkerAlt className="w-8 h-6 hover:cursor-pointer hover:scale-105 duration-500 hover:fill-orange-600 fill-blue-900 absolute cursor-default" />
          <input
            className="px-9 h-9 w-full focus:ring-2 focus:ring-offset-5 focus:ring-orange-500 focus:outline-none text-sm py-2 rounded-full fn border-none text-black"
            type="text"
            name="search"
            placeholder={t('HeroSection_placeholder')}
          />
          <IoSearchCircle className="w-9 h-9 right-0 hover:scale-105 duration-500 hover:fill-orange-600 hover:cursor-pointer fill-blue-900 absolute cursor-default" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
