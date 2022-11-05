import React, { useState, useEffect } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const initData = {
  heading: "THE Team",
  content:
    "We are committed to delivering a cutting-edge experience and making this project a success. ",
  sub_heading1: "Rodrigo H",
  sub_title1: "Community Manager",
  sub_content1: "",
  sub_Image1: "/assets/img/artist1.jpg",
  sub_heading2: "John L",
  sub_title2: "The Project Manager",
  sub_content2: "",
  sub_Image2: "/assets/img/artist2.jpg",
  sub_heading3: "Artem Pobedennyi",
  sub_title3: "Cheif Technical Officer",
  sub_content3: "",
  sub_Image3: "/assets/img/artist3.jpg",
  sub_heading4: "Yury Yurevich",
  sub_title4: "Product Manager",
  sub_content4: "",
  sub_Image4: "/assets/img/artist4.jpg",
};

var properties1 = {
  duration: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  indicators: false,
};

var properties2 = {
  duration: 3000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  indicators: false,
};

var properties3 = {
  duration: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  indicators: false,
};

function Artist() {
  const [data, setData] = React.useState({});
  const [properties, setProperties] = React.useState({});
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setData(initData);

    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();

    if (width <= 500) {
      setProperties(properties1);
    } else if (width > 500 && width < 800) {
      setProperties(properties2);
    } else {
      setProperties(properties3);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <section id="team" className="artist-section">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="mt-4">{data.heading}</h1>
        </div>
        <div className="custom-divider"></div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-10 text-center">
            <p style={{ fontSize: "1rem" }}>{data.content}</p>
          </div>
        </div>
        <div
          className="w-100 my-5"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <Slide {...properties}>
            <div className="py-0 px-3 text-center">
              <div className="artist-item">
                <div className="card about-card">
                  <img className="about-img" src={data.sub_Image1} alt="" />
                </div>
                <h3 className="mt-4 mb-0" style={{ color: "#50ebe3" }}>
                  {data.sub_heading1}
                </h3>
                <h4 className="mt-2 mb-0">{data.sub_title1}</h4>
                <p
                  className="mt-2"
                  style={{ fontSize: "10px", letterSpacing: "-0.5px" }}
                >
                  {data.sub_content1}
                </p>
                {/* <div className="mb-2">
                  <a href="https://twitter.com">
                    <img className="mx-1" src="assets/img/twitter-square.png" />
                  </a>
                  <a href="https://instagram.com">
                    <img
                      className="mx-1"
                      src="assets/img/instagram-square.png"
                    />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="py-0 px-3 text-center">
              <div className="artist-item">
                <div className="card about-card">
                  <img className="about-img" src={data.sub_Image2} alt="" />
                </div>
                <h3 className="mt-4 mb-0" style={{ color: "#50ebe3" }}>
                  {data.sub_heading2}
                </h3>
                <h4 className="mt-2 mb-0">{data.sub_title2}</h4>
                <p
                  className="mt-2"
                  style={{ fontSize: "10px", letterSpacing: "-0.5px" }}
                >
                  {data.sub_content2}
                </p>
                {/* <div className="mb-2">
                  <a href="https://twitter.com">
                    <img className="mx-1" src="assets/img/twitter-square.png" />
                  </a>
                  <a href="https://instagram.com">
                    <img
                      className="mx-1"
                      src="assets/img/instagram-square.png"
                    />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="py-0 px-3 text-center">
              <div className="artist-item">
                <div className="card about-card">
                  <img className="about-img" src={data.sub_Image3} alt="" />
                </div>
                <h3 className="mt-4 mb-0" style={{ color: "#50ebe3" }}>
                  {data.sub_heading3}
                </h3>
                <h4 className="mt-2 mb-0">{data.sub_title3}</h4>
                <p
                  className="mt-2"
                  style={{ fontSize: "10px", letterSpacing: "-0.5px" }}
                >
                  {data.sub_content3}
                </p>
                {/* <div className="mb-2">
                  <a href="https://twitter.com">
                    <img className="mx-1" src="assets/img/twitter-square.png" />
                  </a>
                  <a href="https://instagram.com">
                    <img
                      className="mx-1"
                      src="assets/img/instagram-square.png"
                    />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="py-0 px-3 text-center">
              <div className="artist-item">
                <div className="card about-card">
                  <img className="about-img" src={data.sub_Image4} alt="" />
                </div>
                <h3 className="mt-4 mb-0" style={{ color: "#50ebe3" }}>
                  {data.sub_heading4}
                </h3>
                <h4 className="mt-2 mb-0">{data.sub_title4}</h4>
                <p
                  className="mt-2"
                  style={{ fontSize: "10px", letterSpacing: "-0.5px" }}
                >
                  {data.sub_content4}
                </p>
                <div className="mb-2">
                  <a href="https://twitter.com">
                    <img className="mx-1" src="assets/img/twitter-square.png" />
                  </a>
                  <a href="https://instagram.com">
                    <img
                      className="mx-1"
                      src="assets/img/instagram-square.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default Artist;
