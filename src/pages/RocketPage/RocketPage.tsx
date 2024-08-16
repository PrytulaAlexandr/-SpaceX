import { Link, useParams } from "react-router-dom";
import FullWidthSlider from "../../components/FullWidthSlider/FullWidthSlider";
import Navigation from "../../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import { getRocket } from "../../api/getRockets";
import Rocket from "../../types/Rocket";
import Loader from "../../components/Loader/Loader";
import RocketInfo from "../../components/RocketInfo/RocketInfo";
import style from "./RocketPage.module.css";

const RocketPage: React.FC = () => {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState<Rocket | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (rocketId) {
      getRocket(rocketId).then((response) => {
        setRocket(response);

        setLoading(false);
      });
    }
  }, [rocketId]);

  if (loading) {
    return <Loader />;
  }

  if (!rocket) {
    return (
      <div className="container">
        <p>This rocket doesn't seem to exist...</p>
        <Link to="/">Home page</Link>
      </div>
    );
  }

  return (
    <main>
      <div className="container">
        <Navigation />
        <RocketInfo rocket={rocket} />
      </div>
      <FullWidthSlider />
      <section className={style.starbaseSection}>
        <div className={style.starbasePhoto}>
          <div className="container">
            <div className={style.sectionText}>
              <h2 className={style.title}>Starbase</h2>
              <p className={style.description}>
                Development and manufacturing of Starship takes place at
                Starbase, one of the world’s first commercial spaceports
                designed for orbital missions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RocketPage;
