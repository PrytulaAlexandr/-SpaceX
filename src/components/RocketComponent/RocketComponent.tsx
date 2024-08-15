import React, { useEffect, useState } from "react";
import { getRockets } from "../../api/getRockets";
import Rocket from "../../types/Rocket";
import RocketSlider from "../RocketSlider/RocketSlider";

const RocketComponent: React.FC = () => {
  const [rockets, setRockets] = useState<Rocket[]>([]);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const rockets = await getRockets();
        setRockets(rockets);
      } catch (error) {
        console.error("Failed to fetch rockets:", error);
      }
    };

    fetchRockets();
  }, []);

  if (!rockets) {
    return <p>Loading...</p>;
  }

  return <RocketSlider rockets={rockets} />;
};

export default RocketComponent;
