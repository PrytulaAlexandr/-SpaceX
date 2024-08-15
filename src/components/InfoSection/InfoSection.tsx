import React from 'react';
import style from './InfoSection.module.css';

const InfoSection: React.FC  = () => {
  const infoSectionCardInfo: { name: string; value: string | number }[] = [
    {
      name: "Total launches",
      value: 43,
    },
    {
      name: "Visits to the ISS",
      value: 46,
    },
    {
      name: "Total reflights",
      value: 25,
    },
  ];
  return (
    <section className={style.infoSection}>
      {infoSectionCardInfo.map((cardInfo) => (
        <div key={cardInfo.name} className={style.infoSectionCard}>
          <span className={style.infoSectionCardValue}>{cardInfo.value}</span>
          <span className={style.infoSectionCardName}>{cardInfo.name}</span>
        </div>
      ))}
    </section>
  );
}

export default InfoSection;