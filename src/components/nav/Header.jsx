import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Header() {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        {t("bugplot")}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <select
              className="nav-link bg-dark border-0 ml-1 mr-2"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="es">spanish</option>
              <option value="fr">french</option>
            </select>
          </li>
          <li className="nav-item  ml-2">
            <Link className="nav-link" to="/profile">
              {t("profile")}
            </Link>
          </li>
          <li className="nav-item  ml-2">
            <Link className="nav-link" to="/useRef">
              useRef
            </Link>
          </li>
          <li className="nav-item  ml-2">
            <Link className="nav-link" to="/bind">
              Bind
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
