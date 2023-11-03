import React from "react";
import PortfolioBanner from "../../PortfolioBanner/PortfolioBanner";
import PortfolioLorem from "../../PortfolioLorem/PortfolioLorem";
import PortfolioImage from "../../PortfolioImage/PortfolioImage";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <PortfolioLorem />
      <PortfolioImage />
    </div>
  );
};

export default Portfolio;
