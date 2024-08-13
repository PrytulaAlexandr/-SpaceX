import React from "react";
import Navigation from "../Navigation/Navigation";
import HeroSection from "../HeroSection/HeroSection";
import style from './MainSection.module.css';

const MainSection: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <Navigation />
      <HeroSection />
      <div className={style.footerMainSection}>
        <img className={style.sfere} src="img/sfere.svg" alt="sfere" />
        <div className={style.lineGradient}></div>
      </div>
    </div>
    
  );
};

export default MainSection;
