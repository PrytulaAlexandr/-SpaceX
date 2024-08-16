import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import UnderDevelop from "./pages/UnderDevelop/UnderDevelop";
import AuthProvider from "./components/Auth/Auth";
import RocketPage from "./pages/RocketPage/RocketPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/rockets/:rocketId" element={<RocketPage />} />
          <Route path="*" element={<UnderDevelop />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
