import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
function Services() {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      animate="animate"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div variants={textVariants}>
        <h2 style={{ fontSize: 22, marginTop: 50, color: "orange" }}>
          {t("Services_h1")}
        </h2>
      </motion.div>
      <motion.div
        variants={textVariants}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: 900,
          marginTop: 60,
        }}
      >
        <motion.div
          variants={textVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 5,
          }}
        >
          <img
            src="fast-delivery.png"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg mt-1">{t("Services_h2")}</h2>
          <div style={{ textAlign: "center", color: "gray" }}>
            <p>{t("Services_p1")}</p>
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <img
            src="pin.png"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg mt-2">{t("Services_h3")}</h2>
          <div style={{ textAlign: "center", color: "gray" }}>
            <p>{t("Services_p2")}</p>
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <img
            src="shop.png"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg mt-2">{t("Services_h4")}</h2>
          <div style={{ textAlign: "center", color: "gray" }}>
            <p>{t("Services_p3")}</p>
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <img
            src="booking.png"
            className="w-24 h-24 hover:scale-105 duration-500"
          />
          <h2 className="text-lg mt-2">{t("Services_h5")}</h2>
          <div style={{ textAlign: "center", color: "gray" }}>
            <p>{t("Services_p4")}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div style={{ width: 500, textAlign: "center", marginTop: 40 }}>
        <p className="text-gray-500 mb-6">
          {t('Services_p5')}
        </p>
        <h3>{t('Services_p6')}</h3>
        <div className="flex justify-evenly items-center rounded-2xl flex-col duration-500 transition-colors hover:bg-orange-400 bg-orange-300 mt-24 h-52 w-full">
          <h1 style={{ color: "white", fontSize: 30 }}>{t('Services_h6')}</h1>
          <p style={{ color: "white", fontWeight: "lighter" }}>
          {t('Services_t')}
          </p>
          <div className="flex flex-row justify-between">
            <button className="flex justify-center text-black hover:text-white text-sm items-center hover:scale-105 ease-in-out duration-700 transition hover:bg-blue-600 mr-3 h-9 w-40 bg-white rounded-full hover:cursor-pointer">
            {t('Services_b')}
            </button>
            <button className="flex justify-center text-black hover:text-white text-sm items-center hover:scale-105 ease-in-out duration-700 transition hover:bg-blue-600 h-9 w-40 bg-white rounded-full hover:cursor-pointer">
            {t('Services_b2')}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
