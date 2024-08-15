import React, { useEffect, useState } from "react";
import { getRockets } from "../../api/getRockets";
import Rocket from "../../types/Rocket";
import RocketSlider from "../RocketSlider/RocketSlider";
import Loader from "../Loader/Loader";

const RocketComponent: React.FC = () => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getRockets().then((response) => {
      setLoading(false);
      setTimeout(() => {
        setRockets(response)
      }, 0);;
    });
  }, []); 

  if (loading) {
    return <Loader/>;
  }

  return <RocketSlider rockets={rockets} />;
};

export default RocketComponent;
