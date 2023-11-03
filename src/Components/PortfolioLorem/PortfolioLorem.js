import React, { useRef } from "react";
import { Button, Carousel } from "antd";

const PortfolioLorem = () => {
  const ref = useRef();

  return (
    <div className="portfolioLoremCarousel py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="title mb-8">
          <h3>Lorem ipsum</h3>
        </div>
        <div className="flex">
          <Button
            onClick={() => {
              ref.current.prev();
            }}
            className="mr-0.5"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </Button>
          <div className="max-w-screen-xl">
            <Carousel slidesToShow={6} dots={false} ref={ref}>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <button>Lorem ipsum</button>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <button>Lorem ipsum</button>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <button>Lorem ipsum</button>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <button>Lorem ipsum</button>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <button>Lorem ipsum</button>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <button>Lorem ipsum</button>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <button>Lorem ipsum</button>
                </div>
              </div>
            </Carousel>
          </div>
          <Button
            onClick={() => {
              ref.current.next();
            }}
            className="ml-0.5"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
        <div className="content flex">
          <div className="contentLeft">
            <div className="subTitle">
              <h4>Lorem ipsum dolor ngồi amet consectetue</h4>
            </div>
            <p className="my-6">
              Lorem ipsum dolor ngồi amet consectetuer lorem ipsum dolor ngồi
              amet consectetuer lorem ipsum dolor ngồi amet consectetuer lorem
              ipsum dolor ngồi amet consectetuer lorem ipsum dolor{" "}
            </p>
            <ul className="list">
              <li className="mb-4">
                <img src={"./img/wool-ball.png"} alt="wool-ball" />
                <p>
                  Lorem ipsum dolor ngồi amet consectetuer Lorem ipsum dolor
                  ngồi amet
                </p>
              </li>
              <li className="mb-4">
                <img src={"./img/wool-ball.png"} alt="wool-ball" />
                <p>
                  Lorem ipsum dolor ngồi amet consectetuer Lorem ipsum dolor
                  ngồi amet
                </p>
              </li>
              <li>
                <img src={"./img/wool-ball.png"} alt="wool-ball" />
                <p>
                  Lorem ipsum dolor ngồi amet consectetuer Lorem ipsum dolor
                  ngồi amet
                </p>
              </li>
            </ul>
          </div>
          <div className="contentRight">
            <img
              src={"./img/landingnamia_anh10.png"}
              alt="landingnamia_anh10.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLorem;
