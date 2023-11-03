import React from "react";

const PortfolioImage = () => {
  return (
    <div className="portfolioImage grid grid-cols-[28.65%_repeat(2,_minmax(0,_1fr))] gap-2.5 mx-auto max-w-screen-xl">
      <div>
        <img
          src={"./img/landingnamia_anh30.png"}
          alt="landingnamia_anh30.png"
          className="mb-2.5"
        />
        <img
          src={"./img/landingnamia_anh4.png"}
          alt="landingnamia_anh4.png"
          className="mb-2.5"
        />
        <img
          src={"./img/landingnamia_anh30 1.png"}
          alt="landingnamia_anh30 1.png"
        />
      </div>
      <img
        src={"./img/landingnamia_anh2.png"}
        alt="landingnamia_anh2.png"
        className="col-span-2 row-span-3"
      />
    </div>
  );
};

export default PortfolioImage;
