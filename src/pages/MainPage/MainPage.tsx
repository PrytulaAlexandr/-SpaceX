import InfoSection from "../../components/InfoSection/InfoSection";
import MainSection from "../../components/MainSection/MainSection";
import OurRockets from "../../components/OurRockets/OurRockets";

function MainPage() {
  return (
    <div className="app">
      <div className="container">
        <MainSection />
        <OurRockets />
        <InfoSection />
      </div>
    </div>
  );
}

export default MainPage;
