import { Routes, Route } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Portfolio from "./Components/pages/Portfolio";
import Home from "./Components/pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
