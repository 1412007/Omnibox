import React from "react";
import PortfolioBanner from "../../PortfolioBanner/PortfolioBanner";
import PortfolioLorem from "../../PortfolioLorem/PortfolioLorem";
import PortfolioImage from "../../PortfolioImage/PortfolioImage";
import PortfolioNumber from "../../PortfolioNumber/PortfolioNumber";
import PortfolioIcon from "../../PortfolioIcon/PortfolioIcon";

const Portfolio1 = () => {
  return (
    <div>
      <PortfolioBanner />
      <PortfolioNumber />
      <PortfolioIcon />
      <PortfolioLorem />
      <PortfolioImage />
    </div>
  );
};

export default Portfolio1;
