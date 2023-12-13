import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Footer() {
  const { t } = useTranslation();

  return (
    <div className="flex w-screen duration-300 hover:opacity-100 opacity-90 flex-row h-72 bg-blue-900 text-white mt-40 justify-evenly">
      <div style={{ width: 300, marginTop: 50, marginLeft: 30 }}>
        <Link to="contact">
          <h2 style={{ fontSize: 20, fontWeight: "bold" }}>{t("Footer_h1")}</h2>
        </Link>
        <p>{t("Footer_p1")}</p>
        <p>{t("Footer_n")}</p>
        <p>daeemdelivery@gmail.com</p>
      </div>
      <div style={{ width: 300, marginTop: 50 }}>
        <h2 style={{ fontSize: 20, fontWeight: "bold" }}>{t("Footer_h2")}</h2>
        <h3>{t("Footer_h4")}</h3>
        <div className="flex flex-row my-2 hover:bg-orange-600 justify-between items-center border-solid border">
          <input
            className="p-1 pl-2 focus:ring-1 focus:ring-orange-500 focus:outline-none w-52 text-black"
            placeholder={t("Footer_sp")}
          />
          <button className="fex mr-4 hover:cursor-pointer flex-row text-sm justify-center items-center">
            {t("Footer_spb")}
          </button>
        </div>
        <Link to="terms">
          <button className="mr-2 text-sm text-white">{t("Footer_b1")}</button>
        </Link>
        <Link to="privacy">
          <button className="text-sm text-white">{t("Footer_b2")}</button>
        </Link>
        <Link to="return">
          <button className="mt- mr-2 text-sm text-white">
            {t("Footer_b3")}
          </button>
        </Link>
        <Link to="faq">
          <button className="text-sm text-white">{t("Footer_b4")}</button>
        </Link>
      </div>
      <div style={{ width: 300, marginTop: 50 }}>
        <h2 style={{ fontSize: 20, fontWeight: "bold" }}>{t("Footer_h3")}</h2>
        <div className="flex flex-row mt-5">
          <img
            src="twitter.png"
            className="hover:cursor-pointer mr-5"
            height={30}
            width={30}
          />
          <img
            src="facebook.png"
            className="hover:cursor-pointer mr-5"
            height={30}
            width={30}
          />
          <img
            src="linkedin.png"
            className="hover:cursor-pointer"
            height={30}
            width={30}
          />
        </div>
        <div className="flex flex-row mt-5 items-center">
          <img
            src="playstore.png"
            className="hover:cursor-pointer mr-5"
            width={100}
          />
          <img
            src="appstore.png"
            className="hover:cursor-pointer"
            width={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
