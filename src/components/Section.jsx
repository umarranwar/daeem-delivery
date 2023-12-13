import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const textVariants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};
const textVariants2 = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};

function Section() {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col w-screen justify-center items-center mt-10">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-orange-600 text-center"
      >
        <h3>
          {t('Section_h1')} <br /> {t('Section_h2')}
        </h3>
        <motion.div variants={textVariants} className="mt-12 mb-12 flex flex-row">
          <motion.div
            variants={textVariants}
            whileHover={{ scale: 1.1 }}
            className="mr-5 hover:cursor-pointer"
          >
            <img src="/playstore.png" alt="image" width={150} />
          </motion.div>
          <motion.div
            variants={textVariants}
            className="hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/appstore.png" alt="image" width={150} />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div>
        <motion.div
          className="flex flex-row mb-20"
          initial="initial"
          animate="animate"
          variants={textVariants2}
        >
          <motion.img
            variants={textVariants2}
            whileHover={{ scale: 1.02 }}
            src="/app1.png"
            width={200}
            alt="icon"
          />
          <motion.img
            variants={textVariants2}
            whileHover={{ scale: 1.02 }}
            src="/app2.png"
            width={200}
            alt="icon"
          />
          <motion.img
            variants={textVariants2}
            whileHover={{ scale: 1.02 }}
            src="/app3.png"
            width={200}
            alt="icon"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Section;
