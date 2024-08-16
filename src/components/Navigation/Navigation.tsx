import React from "react";
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Auth/Auth";

const Navigation: React.FC = () => {
  const { user, signIn, signOutUser } = useAuth();

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
      {!user ? (
          <button
            className={style.contactFormButtonLink}
            onClick={signIn}
          >
            Log in
          </button>
        ) : (
          <>
            <span className={style.userName}>Welcome, {user.displayName}</span>
            <button
              className={style.contactFormButtonLink}
              onClick={signOutUser}
            >
              Log out
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navigation;
