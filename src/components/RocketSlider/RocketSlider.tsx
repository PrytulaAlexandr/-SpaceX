import React from "react";
import style from "./RocketSlider.module.css";
import Rocket from "../../types/Rocket";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

type RocketSliderProps = {
  rockets: Rocket[];
};

const RocketSlider: React.FC<RocketSliderProps> = ({ rockets }) => {
  return (
    <div className={style.rocketSliderContainer}>
      <h2 className={style.headerTitle}>OUR ROCKETS</h2>
      <div className={style.swiperContainer}></div>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: `.${style.swiperButtonNext}`,
          prevEl: `.${style.swiperButtonPrev}`,
        }}
        pagination={{
          el: `.${style.swiperPagination}`,
          clickable: true,
          bulletClass: style.swiperPaginationBullet,
          bulletActiveClass: style.swiperPaginationBulletActive,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        mousewheel={true}
        keyboard={true}
        slidesPerView={3}
        watchOverflow={false}
        spaceBetween={20}
        className="mySwiper"
      >
        {rockets.map((rocket) => (
          <SwiperSlide key={rocket.id}>
            <Link to={`rockets/${rocket.id}`}>
              <div className={style.rocketCard}>
                <div className={style.rocketImageContainer}>
                  <img
                    src={rocket?.flickr_images[0]}
                    alt="Rocket"
                    className={style.rocketImage}
                  />
                </div>
                <h2 className={style.rocketTitle}>{rocket.name}</h2>
                <ul className={style.rocketSpecs}>
                  <li>
                    <strong>Height</strong> {rocket.height_w_trunk.meters} M /{" "}
                    {rocket.height_w_trunk.feet} FT
                  </li>
                  <li>
                    <strong>Diameter</strong> {rocket.diameter.meters} M /{" "}
                    {rocket.diameter.feet} FT
                  </li>
                  <li>
                    <strong>Spacecraft Volume</strong>{" "}
                    {rocket.launch_payload_vol.cubic_meters} M³ /{" "}
                    {rocket.launch_payload_vol.cubic_feet} FT³
                  </li>
                  <li>
                    <strong>Trunk Volume</strong>{" "}
                    {rocket.trunk.trunk_volume.cubic_meters} M³ /{" "}
                    {rocket.trunk.trunk_volume.cubic_feet} FT³
                  </li>
                  <li>
                    <strong>Launch Payload Mass</strong>{" "}
                    {rocket.launch_payload_mass.kg} KG /{" "}
                    {rocket.launch_payload_mass.lb} LBS
                  </li>
                  <li>
                    <strong>Return Payload Mass</strong>{" "}
                    {rocket.return_payload_mass.kg} KG /{" "}
                    {rocket.return_payload_mass.lb} LBS
                  </li>
                </ul>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.navButtons}>
        <div className={style.swiperButtonPrev}></div>
        <div className={style.swiperPagination}></div>
        <div className={style.swiperButtonNext}></div>
      </div>
    </div>
  );
};

export default RocketSlider;
