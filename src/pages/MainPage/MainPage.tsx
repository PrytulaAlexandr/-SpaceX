import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import InfoSection from "../../components/InfoSection/InfoSection";
import MainSection from "../../components/MainSection/MainSection";
import OurRockets from "../../components/OurRockets/OurRockets";
import TeamMembersInfo from "../../components/TeamMemdersInfo/TeamMemdersInfo";

function MainPage() {
  return (
    <div className="app">
      <div className="container">
        <MainSection />
        <OurRockets />
        <InfoSection />
        <AboutUsSection />
        <TeamMembersInfo />
      </div>
    </div>
  );
}

export default MainPage;
