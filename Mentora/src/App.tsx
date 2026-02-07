import { Routes, Route } from "react-router-dom";
import LandingPageLayout from "./Layouts/LandingPageLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />} />
    </Routes>
  );
}

export default App;
