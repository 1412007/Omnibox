import React from "react";
import PortfolioBanner from "../../PortfolioBanner/PortfolioBanner";
import PortfolioLorem from "../../PortfolioLorem/PortfolioLorem";
import PortfolioImage from "../../PortfolioImage/PortfolioImage";
import PortfolioArticle from "../../PortfolioArticle/PortfolioArticle";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <PortfolioLorem />
      <PortfolioImage />
      <div className="portfolio">
        <PortfolioArticle />
      </div>
    </div>
  );
};

export default Portfolio;
