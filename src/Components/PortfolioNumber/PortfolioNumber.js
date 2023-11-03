import React from "react";

const PortfolioNumber = () => {
  return (
    <div className="portfolioNumber py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="title mb-8">
          <h3>Lorem ipsum</h3>
        </div>
        <div className="content flex justify-between">
          <div className="item">
            <p className="number" style={{ color: "#0086D6" }}>
              100+
            </p>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="item">
            <p className="number" style={{ color: "#F614A6" }}>
              500+
            </p>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="item">
            <p className="number" style={{ color: "#F49B23" }}>
              100%
            </p>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioNumber;
