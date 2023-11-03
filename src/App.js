import { Routes, Route } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Home from "./Components/pages/Home/Home";
import Portfolio from "./Components/pages/Portfolio/Portfolio";
import Portfolio1 from "./Components/pages/Portfolio/Portfolio1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path="/portfolio1" element={<Portfolio />}></Route>
        <Route path="/portfolio2" element={<Portfolio1 />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
