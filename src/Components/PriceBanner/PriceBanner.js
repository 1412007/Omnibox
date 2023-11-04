import React from "react";

const PriceBanner = () => {
  return (
    <div className="priceBanner">
      <div className="mx-auto max-w-screen-xl">
        <div className="priceBannerContent flex justify-between">
          <div className="leftContent">
            <h2>LOREM IPSUM DOLOR</h2>
            <p className="my-5">
              Lorem ipsum dolor ngồi amet consectetuer lorem ipsum dolor ngồi
              amet consectetuer lorem ipsum dolor ngồi amet consectetuer lorem
              ipsum dolor{" "}
            </p>
            <button>Contact us</button>
          </div>
          <div className="rightContent">
            <img src={"./img/priceBanner.png"} alt="priceBanner.png" />
            <img
              src={"./img/Group_174.png"}
              alt="Group_174.png"
              className="subImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBanner;
