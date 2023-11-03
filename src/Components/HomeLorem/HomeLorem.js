import React, { useRef } from "react";
import { Button, Carousel } from "antd";

const HomeLorem = () => {
  const ref = useRef();

  return (
    <div className="carousel">
      <div className="carouselContent">
        <div className="title">
          <h3>LOREM IPSUM</h3>
        </div>
        <div className="flex">
          <div className="carouselButton mx-auto mr-0">
            <Button
              onClick={() => {
                ref.current.prev();
              }}
              className="mr-0.5"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </Button>
            <Button
              onClick={() => {
                ref.current.next();
              }}
              className="ml-0.5"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </Button>
          </div>
          <div className="mx-auto max-w-screen-xl ml-0">
            <Carousel autoplay slidesToShow={4} dots={false} ref={ref}>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img src={"./img/carousel_1.png"} alt="carousel_1" />
                  <p>Lorem ipsum dolor</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img src={"./img/carousel_2.png"} alt="carousel_2" />
                  <p>Lorem ipsum dolor</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img src={"./img/carousel_3.png"} alt="carousel_3" />
                  <p>Lorem ipsum dolor</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img src={"./img/carousel_2.png"} alt="carousel_4" />
                  <p>Lorem ipsum dolor</p>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img src={"./img/carousel_3.png"} alt="carousel_5" />
                  <p>Lorem ipsum dolor</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLorem;
