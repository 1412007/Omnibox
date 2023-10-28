import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutUs my-20 text-center">
      <div className="mx-auto max-w-screen-xl">
        <div className="aboutUsContent py-14">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor ngồi amet consectetuer lorem ipsum dolor ngồi
              amet consectetuer lorem ipsum dolor ngồi amet consectetuer lorem
              ipsum dolor ngồi amet consectetuer lorem ipsum dolor ngồi amet
              consectetuer lorem ipsum dolor ngồi amet consectetuer lorem ipsum
              dolor ngồi amet consectetuer lorem ipsum dolor{" "}
            </p>
          </div>
          <div className="content">
            <div className="grid grid-cols-3">
              <div className="aboutUsItem">
                <div className="aboutUsItemContent">
                  <img src={"./img/aboutus_1.png"} />
                  <h4>Lorem ipsum dolor</h4>
                  <p>
                    lorem ipsum dolor ngồi amet consectetuer lorem ipsum dolor
                    ngồi amet consectetuer lorem ipsum dolor ngồi amet
                    consectetuer
                  </p>
                  <button>Lorem ipsum</button>
                </div>
              </div>
              <div className="logo">
                <img src={"./img/logo.png"} />
                <div className="line">
                  <div className="circle"></div>
                </div>
              </div>
              <div className="aboutUsItem">
                <div className="aboutUsItemContent">
                  <img src={"./img/aboutus_2.png"} />
                  <h4>Lorem ipsum dolor</h4>
                  <p>
                    lorem ipsum dolor ngồi amet consectetuer lorem ipsum dolor
                    ngồi amet consectetuer lorem ipsum dolor ngồi amet
                    consectetuer
                  </p>
                  <button>Lorem ipsum</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
