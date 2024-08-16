import React from "react";
import styles from "./FullWidthSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

interface Slidse {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const slides: Slidse[] = [
  {
    id: 1,
    title: "Starship capabilities",
    description:
      "As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.",
    imageUrl: "./img/Falcon9.png",
  },
  {
    id: 2,
    title: "Starship capabilities",
    description:
      "As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.",
    imageUrl: "./img/Falcon9.png",
  },
  {
    id: 3,
    title: "Starship capabilities",
    description:
      "As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.",
    imageUrl: "./img/DRAGON_DRAGON+F9.jpg",
  },
  {
    id: 4,
    title: "Starship capabilities",
    description:
      "As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.",
    imageUrl: "./img/DRAGON_DRAGON+F9.jpg",
  },
  {
    id: 5,
    title: "Starship capabilities",
    description:
      "As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.",
    imageUrl: "./img/DRAGON_DRAGON+F9.jpg",
  },
];

const FullWidthSlider: React.FC = () => {
  return (
    <div className={styles.fullWidthSliderContainer}>
      <div className={styles.swiperContainer}></div>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        pagination={{
          el: `.${styles.swiperPagination}`,
          clickable: true,
          bulletClass: styles.swiperPaginationBullet,
          bulletActiveClass: styles.swiperPaginationBulletActive,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        watchOverflow={false}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={styles.titleWrapper}
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className={styles.swiperContainer}>
                <div className={styles.contentWrapper}>
                  <div className={styles.content}>
                    <div className={styles.title}>{slide.title}</div>
                    <p className={styles.subTitle}>{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperContainer}>
        <div className={styles.navButtons}>
          <div className={styles.swiperButtonPrev}></div>
          <div className={styles.swiperPagination}></div>
          <div className={styles.swiperButtonNext}></div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthSlider;
