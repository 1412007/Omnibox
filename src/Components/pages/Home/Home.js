import React from "react";
import HomeBanner from "../../HomeBanner/HomeBanner";
import AboutUs from "../../HomeAboutUs/AboutUs";
import HomeLorem from "../../HomeLorem/HomeLorem";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AboutUs />
      <HomeLorem />
    </div>
  );
};

export default Home;
