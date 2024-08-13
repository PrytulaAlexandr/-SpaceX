import React, { useEffect, useState } from "react";
import style from "./RocketCard.module.css";
import { getRockets } from "../../api/getRockets";
import Rocket from "../../types/Rocket";

const RocketCard: React.FC = () => {
  const [rocket, setRocket] = useState<Rocket | null>(null);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const rockets = await getRockets();
        setRocket(rockets[0]); // Assuming getRockets() returns an array and you want the first rocket
      } catch (error) {
        console.error("Failed to fetch rockets:", error);
      }
    };

    fetchRockets();
  }, []);

  if (!rocket) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style.rocketCard}>
      <div className={style.rocketImageContainer}>
        <img
          src={rocket?.flickr_images[0]}
          alt="Rocket"
          className={style.rocketImage}
        />
      </div>
      <h2 className={style.rocketTitle}>rocket 1</h2>
      <ul className={style.rocketSpecs}>
        <li>
          <strong>Height</strong> {rocket.height_w_trunk.meters} M / {rocket.height_w_trunk.feet} FT
        </li>
        <li>
          <strong>Diameter</strong> {rocket.diameter.meters} M / {rocket.diameter.feet} FT
        </li>
        <li>
          <strong>Spacecraft Volume</strong> {rocket.launch_payload_vol.cubic_meters} M³ / {rocket.launch_payload_vol.cubic_feet} FT³
        </li>
        <li>
          <strong>Trunk Volume</strong> {rocket.trunk.trunk_volume.cubic_meters} M³ / {rocket.trunk.trunk_volume.cubic_feet} FT³
        </li>
        <li>
          <strong>Launch Payload Mass</strong> {rocket.launch_payload_mass.kg} KG / {rocket.launch_payload_mass.lb} LBS
        </li>
        <li>
          <strong>Return Payload Mass</strong> {rocket.return_payload_mass.kg} KG / {rocket.return_payload_mass.lb} LBS
        </li>
      </ul>
    </div>
  );
};

export default RocketCard;
