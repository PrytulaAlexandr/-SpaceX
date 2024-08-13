import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import OurRockets from "./components/OurRockets/OurRockets";

function App() {
  return (
    <div className="app">
      <div className="container">
        <MainSection />
        <OurRockets />
      </div>
    </div>
  );
}

export default App;
