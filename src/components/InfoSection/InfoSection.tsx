import React from 'react';
import style from './InfoSection.module.css';

const InfoSection: React.FC  = () => {
  const cardInfo: { name: string; value: string | number }[] = [
    {
      name: "Total launches",
      value: 46,
    },
    {
      name: "Visits to the ISS",
      value: 42,
    },
    {
      name: "Total reflights",
      value: 25,
    },
  ];
  return (
    <section className={style.infoSection}>
      {cardInfo.map((info) => (
        <div key={info.name} className={style.infoSectionCard}>
          <span className={style.infoSectionCardValue}>{info.value}</span>
          <span className={style.infoSectionCardName}>{info.name}</span>
        </div>
      ))}
    </section>
  );
}

export default InfoSection;