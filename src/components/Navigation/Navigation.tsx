import React from "react";
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <header className={style.navigation}>
      <div className={style.logo}>
        <Link to="/">logo</Link>
      </div>
      <nav className={style.nav}>
        <ul className={style.navContent}>
          <li>
            <Link className={style.navContentLink} to="/">
              home
            </Link>
          </li>
          <li>
            <Link className={style.navContentLink} to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className={style.navContentLink} to="/qa">
              qa
            </Link>
          </li>
          <li>
            <Link className={style.navContentLink} to="/contact">
              contact form
            </Link>
          </li>
        </ul>
      </nav>
      <div className={style.contactFormButton}>
        <Link className={style.contactFormButtonLink} to="/contact">
          contact form
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
