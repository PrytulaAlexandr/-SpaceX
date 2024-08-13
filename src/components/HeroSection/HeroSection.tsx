import React from 'react';
import style from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={style.heroSection}>
      <div className={style.heroContent}>
        <h1 className={style.heroContentText}>DIVE DEEP IN TO THE FUTURE</h1>
      </div>
    </section>
  );
};

export default HeroSection;
