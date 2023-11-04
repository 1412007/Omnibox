import React, { useRef } from "react";
import { Button, Carousel } from "antd";

const PortfolioArticle = () => {
  const ref = useRef();

  return (
    <div className="portfolioArticle py-20">
      <div className="mx-auto max-w-screen-xl">
        <button className="lorem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-right inline-block"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"
            />
          </svg>
          Lorem ipsum
        </button>
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
            <Carousel slidesToShow={3} dots={false} ref={ref}>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img
                    src={"./img/portfolioArticle_1.png"}
                    alt="portfolioArticle_1.png"
                  />
                  <div className="text flex justify-between">
                    <p>Lorem ipsum dolor ngồi amet consectetue</p>
                    <button>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img
                    src={"./img/portfolioArticle_2.png"}
                    alt="portfolioArticle_2.png"
                  />
                  <div className="text flex justify-between">
                    <p>Lorem ipsum dolor ngồi amet consectetue</p>
                    <button>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img
                    src={"./img/portfolioArticle_1.png"}
                    alt="portfolioArticle_1.png"
                  />
                  <div className="text flex justify-between">
                    <p>Lorem ipsum dolor ngồi amet consectetue</p>
                    <button>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="carouselItem">
                <div className="carouselItemContent">
                  <img
                    src={"./img/portfolioArticle_2.png"}
                    alt="portfolioArticle_2.png"
                  />
                  <div className="text flex justify-between">
                    <p>Lorem ipsum dolor ngồi amet consectetue</p>
                    <button>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
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
      </div>
    </div>
  );
};

export default PortfolioArticle;
