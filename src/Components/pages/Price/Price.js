import React from "react";
import PriceBanner from "../../PriceBanner/PriceBanner";
import PriceArticle from "../../PriceArticle/PriceArticle";

const Price = () => {
  return (
    <div className="price">
      <PriceBanner />
      <div className="title">
        <h3>Lorem ipsum</h3>
      </div>
      <PriceArticle />
    </div>
  );
};

export default Price;
