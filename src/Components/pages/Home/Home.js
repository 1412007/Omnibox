import React from "react";
import HomeBanner from "../../HomeBanner/HomeBanner";
import AboutUs from "../../HomeAboutUs/AboutUs";
import HomeLorem from "../../HomeLorem/HomeLorem";
import HomeTestimonal from "../../HomeTestimonal/HomeTestimonal";
import HomeForm from "../../HomeForm/HomeForm";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <AboutUs />
      <HomeLorem />
      <HomeTestimonal />
      <HomeForm />
    </div>
  );
};

export default Home;
