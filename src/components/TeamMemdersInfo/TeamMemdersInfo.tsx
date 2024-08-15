import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import style from "./TeamMemdersInfo.module.css";
import { Swiper as SwiperType } from "swiper/types";
interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "DAVE JOHNSON",
    role: "ST. MECHANIC",
    imageUrl: "./img/teamMember.png",
  },
  {
    id: 2,
    name: "JOHN DOE",
    role: "Developer",
    imageUrl: "./img/teamMember.png",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Jn. Mechanic",
    imageUrl: "img/teamMember.png",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Engineer",
    imageUrl: "img/teamMember.png",
  },
  {
    id: 5,
    name: "Sophia Wilson",
    role: "Engineer",
    imageUrl: "img/teamMember.png",
  },
  {
    id: 6,
    name: "Maria Lopez",
    role: "St. Mechanic",
    imageUrl: "img/teamMember.png",
  },
  {
    id: 7,
    name: "James Smith",
    role: "Jn. Mechanic",
    imageUrl: "img/teamMember.png",
  },
];

const TeamMembersInfo: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className={style.teamSliderContainer}>
      <div className={style.leftContainer}>
        <div>
          <h2 className={style.headerTitle}>TEAM</h2>
          <p className={style.subTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis
            metus id, congue semper neque. Sed suscipit eget ipsum ut gravida.
            Fusce 
          </p>
        </div>
        <div className={style.navigationContainer}>
          <button className={style.prevButton} onClick={handlePrev}></button>
          <button className={style.nextButton} onClick={handleNext}></button>
        </div>
      </div>
      <div className={style.rightContainer}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          cssMode={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          speed={2000}
          effect="slide"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className={style.teamMember}>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className={style.teamImage}
                />
                <div className={style.infoTeam}>
                  <p className={style.teamRole}>{member.role}</p>
                  <p className={style.teamName}>{member.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamMembersInfo;
