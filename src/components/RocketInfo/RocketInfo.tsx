import Rocket from "../../types/Rocket";
import style from "./RocketInfo.module.css";

interface Props {
  rocket: Rocket;
}

const RocketInfo = ({ rocket }: Props) => {
  return (
    <>
      <h2 className={style.headerTitle}>{rocket?.name}</h2>
      <div className={style.rocketCard}>
        <div className={style.rocketImageContainer}>
          <img
            className={style.rocketImage}
            src={rocket?.flickr_images[0]}
            alt="Rocket"
          />
        </div>
        <div className={style.infoSection}>
          <h2 className={style.rocketTitle}>{rocket.name}</h2>
          <ul className={style.rocketSpecs}>
            <li>
              <strong>Heat shield material</strong>{" "}
              {rocket.heat_shield.material}
            </li>
            <li>
              <strong>Heat shield size</strong>{" "}
              {rocket.heat_shield.size_meters} M³
            </li>
            <li>
              <strong>Heat shield temperature</strong>{" "}
              {rocket.heat_shield.temp_degrees} C
            </li>
            <li>
              <strong>Heat shield developer partner</strong>{" "}
              {rocket.heat_shield.dev_partner}
            </li>
            <li>
              <strong>Pressurized capsule</strong>{" "}
              {rocket.pressurized_capsule.payload_volume.cubic_meters} M³ /{" "}
              {rocket.pressurized_capsule.payload_volume.cubic_feet} FT³
            </li>
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
            <li>
              <strong>Pressurized capsule</strong>{" "}
              {rocket.pressurized_capsule.payload_volume.cubic_meters} M³ /{" "}
              {rocket.pressurized_capsule.payload_volume.cubic_feet} FT³
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RocketInfo;
