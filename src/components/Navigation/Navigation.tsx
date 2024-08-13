import React from "react";
import style from "./Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <header className={style.navigation}>
      <div className={style.logo}>
        <a href="#logo">logo</a>
      </div>
      <nav className={style.nav}>
        <ul className={style.navContent}>
          <li>
            <a className={style.navContentLink} href="#home">
              home
            </a>
          </li>
          <li>
            <a className={style.navContentLink} href="#about">
              about
            </a>
          </li>
          <li>
            <a className={style.navContentLink} href="#qa">
              qa
            </a>
          </li>
          <li>
            <a className={style.navContentLink} href="#contact">
              contact form
            </a>
          </li>
        </ul>
      </nav>
      <div className={style.contactFormButton}>
        <a className={style.contactFormButtonLink} href="#contact">
          contact form
        </a>
      </div>
    </header>
  );
};

export default Navigation;
