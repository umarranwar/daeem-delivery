import React from "react";
import { GiWorld } from "react-icons/gi";
import { BsBasket } from "react-icons/bs";
import { TbLogin2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-blue-900 flex justify-around items-center h-16">
      <div className="flex flex-row border-1 hover:border-orange-600 border-blue-800 justify-center h-9 rounded-full items-center bg-white">
        <Link to="/">
          <img
            src="/daeem-logo.png"
            width={100}
            height={100}
            alt="logo"
            className="hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex row-auto space-x-1">
        <h4
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
          className="text-gray-300 duration-300 hover:text-orange-600 hover:cursor-pointer"
        >
          اللغة العربية
        </h4>
        <h4
          onClick={() => {
            i18n.changeLanguage("en");
          }}
          className="text-gray-300 duration-300 hover:text-orange-600 hover:cursor-pointer"
        >
          English
        </h4>
        <GiWorld
          style={{
            width: 16,
            height: 16,
            color: "lightgrey",
            marginTop: 3,
            marginRight: 5,
          }}
        />
        <h4 className="text-gray-300 hover:text-orange-600 hover:cursor-pointer">
          {t("Header_login")}
        </h4>
        <TbLogin2
          style={{ width: 18, height: 18, color: "lightgrey", marginTop: 3 }}
        />
      </div>
      <div className="flex hover:cursor-pointer row-auto space-x-1">
        <h4 className="text-gray-300 hover:text-orange-600 hover:cursor-pointer">
        {t('Header_login2')}
        </h4>
        <FaRegUser
          style={{
            width: 16,
            height: 16,
            color: "lightgrey",
            marginTop: 3,
          }}
        />
        <span className="text-gray-300">|</span>
        <h4 className="text-gray-300 hover:text-orange-600 hover:cursor-pointer">
          {t('Header_login3')}
        </h4>
        <FaCar
          style={{ width: 16, height: 16, color: "lightgrey", marginTop: 5 }}
        />

        <h4 className="text-gray-300 hover:text-orange-600 hover:cursor-pointer">
          <Link to="contact">{t('Header_contact')}</Link>
        </h4>
      </div>
    </div>
  );
}

export default Header;
