import { Routes, Route } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Home from "./Components/pages/Home/Home";
import Portfolio from "./Components/pages/Portfolio/Portfolio";
import Portfolio1 from "./Components/pages/Portfolio/Portfolio1";
import Price from "./Components/pages/Price/Price";
import ContactUs from "./Components/pages/ContactUs/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserTemplate />}>
        <Route index element={<Home />}></Route>
        <Route path="/portfolio1" element={<Portfolio />}></Route>
        <Route path="/portfolio2" element={<Portfolio1 />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
